import React, { useState } from 'react';
import styles from "../../style";

import { client, urlFor } from '../../../lib/client';
import { Product } from '../../components';

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price } = product;
  const [index, setIndex] = useState(0);
  
  return (
    <div className="bg-primary h-full">
      <div className="product-detail-container flex gap-[40px] m-[20px] my-0 flex-wrap overflow-hidden">
        <div className="mt-[60px]">
          <div className="image-container">
            <img src={urlFor(image && image[index])} className="product-detail-image object-cover overflow-hidden hover:bg-secondary" />
          </div>
          <div className="flex gap-[10px] mt-[20px] ">
            {image?.map((item, i) => (
              <img 
                key={i}
                src={urlFor(item)}
                className={i === index ? 'small-image selected-image' : 'small-image'}
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        <div className="product-detail-desc mt-[28px]">
          <h1 className="font-bold text-white text-3xl md:mt-[30px]">{name}</h1>

          <h4 className="md:mt-[10px] font-bold text-dimWhite text-md">Details: </h4>
          <p className={`${styles.paragraph} md:max-w-[700px] tracking-tight mt-[10px]`}>{details}</p>
          <p className="price font-bold text-white text-xl mt-[30px]"> Ksh.{price}</p>
        
          <div className="buttons">
            <a aria-label="Order on WhatsApp" target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=759663648&text=Hello%20there...%20I%20want%20to%20make%20an%20order%20for%20a%20Product%20I%20found%20on%20your%20Joytech%20Website"className="buy-now bg-secondary rounded-md text-primary">Order on WhatsApp</a>
          </div>
        </div>
      </div>

      <div className="mt-[100px]">
          <h2 className=" font-bold text-center text-2xl m-[10px] text-white">You may also like</h2>
          <div className="marquee">
            <div className="maylike-products-container track">
              {products.map((item) => (
                <Product key={item._id} product={item} />
              ))}
            </div>
          </div>
      </div>
    </div>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: { 
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { slug }}) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]'
  
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  console.log(product);

  return {
    props: { products, product }
  }
}

export default ProductDetails
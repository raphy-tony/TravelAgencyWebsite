import React from 'react';
import Link from 'next/link';

import { urlFor } from '../../lib/client';

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div id='product' className="mx-3 my-2">
      <Link href={`/product/${slug.current}`}>
        <div className="product-card flex flex-col cursor-pointer">
          <img 
            src={urlFor(image && image[0])}
            className="product-image rounded-lg h-[250px] w-[250px] object-cover overflow-hidden"
          />
          <p className="font-poppins font-semibold text-[20px] leading-[32px] text-white mt-7">{name}</p>
          <p className="mt-[6px] font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">Ksh.{price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product
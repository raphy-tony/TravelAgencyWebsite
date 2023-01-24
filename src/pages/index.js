import Head from 'next/head'
import { client } from '../../lib/client';

import styles from "../style";
import { Visa, AboutUs, Product, ContactUs, Footer, Navbar, Testimonials, Hero } from "../components";

const Home = ({ products}) => (
    <>
      <Head>
        <title>Joytech Technologies</title>
        <meta name="description" content="Joytech Technologies" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/joytech.svg" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <main className={styles.main}>
        <div className="bg-primary z-50 w-full overflow-hidden">
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Navbar />
            </div>
          </div>

          <div className={`bg-primary ${styles.flexStart} z-0`}>
            <div className={`${styles.boxWidth}`}>
              <Hero />
            </div>
          </div>
          
          <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <AboutUs />
              <Visa/>
              <div className="products-container">
                <h2 className={`font-poppins font-semibold  xs:text-[48px] text-[30px] sm:text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full mx-6 flex justify-center`}>Products</h2>
                {products?.map((product) => <Product key={product._id} product={product} />)}
              </div>
              <Testimonials />
              <ContactUs />
              <Footer />
            </div>
          </div>
        </div>
      </main>
    </>
  );

  export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);
  
    return {
      props: { products}
    }
  }

  export default Home;

import { useLoaderData, useNavigate } from 'react-router';
import image from '../assets/images/tamara-bellis-IwVRO3TLjLc-unsplash.jpg'
import Product from './Product';
import { useState } from 'react';
import Review from './Review';


const Home = () => {

    const navigate = useNavigate();

    const handleShowNewArravals = () => {
        navigate('/arrivals')
    }



    const productData = useLoaderData();

    const [filterCategory, setFilterCategory] = useState("All");

  const categories = ["All", "Men", "Women", "Children"]

    const filterProducts = productData?.filter(data => {
        if (filterCategory === "All") return true;

        if (filterCategory === "Men" && data.category.toLowerCase().includes("mens")) return true;

        if (filterCategory === "Women" && data.category.toLowerCase().includes("women")) return true;

        if (filterCategory === "Children" && data.category.toLowerCase().includes("children")) return true;


     

    })
   

    const displayProducts = filterProducts.slice(0, 5)
    const populerProducts = productData?.sort((a, b) => b.ratings - a.ratings).slice(0, 6)






    return (
        <section>
            {/* bannner section start */}
            <div
                className="hero  min-h-[600px]"
                style={{
                    backgroundImage:
                        `url(${image})`,
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 lg:text-4xl text-2xl font-bold">  Step Into Style with Our Western Collection</h1>
                        <p className="mb-5">
                            Curated outfits to elevate your everyday fashion
                        </p>

                       
                    </div>
                </div>
            </div>
            {/* bannner section end*/}

                    {/* collection */}
            <div className=' text-center mt-9'>
                <h1 className='text-4xl font-bold'>Our Collection</h1>
                <p className='mt-2  text-gray-500'>Browse through our diverse range of products to find exactly what you need.</p>
            </div>

            {/* categories */}

            <div className='flex justify-center gap-7 mt-11'>
                {
                    categories?.map((category, idx) => (
                        <button key={idx} onClick={() => setFilterCategory(category)} className='btn btn-outline ' >{category}</button>
                    ))
                }
            </div>

            {/* product */}

            <div>

                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center gap-4 mt-10'>
                    {
                        displayProducts?.map(product => <Product
                            key={product.id}
                            product={product}></Product>)
                    }

                </div>

                <div className='flex justify-center mt-4'>
                    <button onClick={handleShowNewArravals} className='btn'>See all</button>
                </div>
            </div>

            {/* Popular */}

            <div className='mt-8'>
                <div className='text-center'>
                    <h1 className='text-4xl font-bold mb-2'>Popular Collection</h1>
                    <p className='mt-2 text-gray-500'>
                        Discover our most loved products by our customers.
                    </p>
                </div>

                <div className=' grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 justify-items-center  md:mt-9'>
                    {
                        populerProducts?.map((product) => <Product
                            key={product.id}
                            product={product}
                        ></Product>)

                    }
                </div>
            </div>

            {/* Client Reviews  */}
          <Review></Review>


        </section >

    );
};

export default Home;

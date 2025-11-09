
import { useLoaderData, useNavigate } from 'react-router';
import image from '../assets/images/tamara-bellis-IwVRO3TLjLc-unsplash.jpg'
import Product from './Product';
import { useState } from 'react';


const Home = () => {

    const navigate = useNavigate();

    const handleShowNewArravals = ()=>{
        navigate('/arrivals')
    }

    const productData = useLoaderData() ;
    
    const [filterCategory, setFilterCategory] = useState("All");
    console.log(filterCategory);
    

    const filterProducts = productData.filter(data => {
        if (filterCategory === "All") return true;

        if (filterCategory === "Men" && data.category.toLowerCase().includes("mens")) return true;

        if (filterCategory === "Women" && data.category.toLowerCase().includes("women")) return true;

        if (filterCategory === "Children" && data.category.toLowerCase().includes("children")) return true;

    })
    const categories = ["All", "Men", "Women", "Children"]

    const displayProducts = filterProducts.slice(0, 5)


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
                        <h1 className="mb-5 text-4xl font-bold">  Step Into Style with Our Western Collection</h1>
                        <p className="mb-5">
                            Curated outfits to elevate your everyday fashion
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            {/* bannner section end*/}

            {/* categories */}

            <div className='flex justify-center gap-7 mt-11'>
                {
                    categories.map((category, idx) => (
                        <button key={idx} onClick={() => setFilterCategory(category)} className='btn btn-outline ' >{category}</button>
                    ))
                }
            </div>



            {/* product */}

            <div>
                <div className='grid grid-cols-3 gap-4 mt-10'>
                    {
                        displayProducts.map(product => <Product
                            key={product.id}
                            product={product}></Product>)
                    }

                </div>

                <div className='flex justify-center mt-4'>
                    <button onClick={handleShowNewArravals} className='btn'>See all</button>
                </div>
            </div>

        </section >

    );
};

export default Home;
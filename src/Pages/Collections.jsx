import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import Winter from '../Components/Winter';
import Summer from '../Components/Summer';

const Collections = () => {

    const winterData = useLoaderData();

    const [summerData , setSummerData] = useState([])

    useEffect(()=>{
        fetch('summerProducts.json')
        .then(res => res.json())
        .then(data => setSummerData(data))
    },[])
    
    
    return (
        <div>
            {/* banner section */}
            <div className="hero bg-base-200 min-h-[500px]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="text-5xl font-bold">Stay Stylish All Year Round </h1>
                        <p className="py-6">
                            From cozy winter jackets and warm sweaters to light, breezy summer outfits,
                            explore our seasonal collections designed to keep you comfortable and fashionable no matter the weather.
                            Refresh your wardrobe with the latest trends for every season.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

            {/* winter section */}

            <div className='mt-14'>
                <div className='text-center'>
                    <h1 className='text-3xl font-bold '>Winter Collection</h1>
                <p className='mt-3'>Explore our premium winter collection — cozy jackets, soft sweaters, and elegant layers <br />
                    designed to keep you warm and trendy all season long.
                </p>
                <div className='grid md:grid-cols-3 grid-cols-1 justify-items-center'>
                    {
                        winterData.map(data => <Winter
                        key={data}
                        data={data}
                        ></Winter>)
                    }
                </div>
                </div>
            </div>

         {/* summer section */}

                     <div className='mt-14'>
                <div className='text-center'>
                    <h1 className='text-3xl font-bold '>Summer Collection</h1>
                   
                <p className='mt-3'> Beat the heat with breezy fabrics and bright colors. <br /> 
    Discover our latest summer collection to refresh your wardrobe.
                </p>
                <div className='grid md:grid-cols-3 grid-cols-1 justify-items-center mt-6'>
                    {
                        summerData.map(data => <Summer
                        key={data}
                        data={data}
                        ></Summer> ) }
                </div>
                </div>
            </div>

        </div>
    );
};

export default Collections;
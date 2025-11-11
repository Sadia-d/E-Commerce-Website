import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import Winter from '../Components/Winter';
import Summer from '../Components/Summer';
import img from '../assets/images/photo.jpeg'
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
                <div className=" flex md:flex-row flex-col justify-center gap-8">
                  <div>
                      <img 
                        src={img}
                        className="lg:w-[480px] lg:h-[400px] rounded-lg shadow-2xl"
                    />
                  </div>
                    <div className='mt-16'>
                        <h1 className="text-4xl font-bold">Stay Stylish All Year Round </h1>
                        <p className="py-6">
                            From cozy winter jackets and warm sweaters to light, breezy summer outfits,<br />
                            explore our seasonal collections designed to keep you comfortable and fashionable <br /> no matter  the weather.
                            Refresh your wardrobe with the latest trends for every season.
                        </p>
                       
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
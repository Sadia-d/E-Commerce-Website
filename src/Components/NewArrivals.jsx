import { useLoaderData } from 'react-router';
import img from '../assets/images/TPWW.webp'
import NewArrival from './NewArrival';

const NewArrivals = () => {
    const productsData = useLoaderData()
    // console.log(productsData);
    
    return (
        <div >
             {/* /* banner/ */}
            <div
                        className="hero min-h-[600px]"
                        style={{
                            backgroundImage:
                                `url(${img})`,
                        }} >  
                        
                        
             </div>

             {/* card */}

             <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:px-2 justify-items-center px-4 mt-9'>
                {
                    productsData.map(product => <NewArrival
                    key={product.id}
                    product={product}
                    ></NewArrival>)
                }
             </div>
        </div>
    );
};

export default NewArrivals;
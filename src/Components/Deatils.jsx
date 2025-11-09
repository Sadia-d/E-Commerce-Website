
import { Link, useLoaderData, useParams } from 'react-router';

const Deatils = () => {
        const {id} = useParams();
      const products = useLoaderData() ;
      
         const product = products.find(p => p.id.toString() === id)

         if(!product){
            return <h1>Product not found</h1>
         }
      

    return (
        <div className='container mx-auto px-4 py-8 '>
           {/* <div className='mb-8 p-2.5 inline-block bg-zinc-200'>
            <Link to="/">Go to back</Link>
           </div> */}

           <div className='grid md:grid-cols-2 grid-cols-1 bg-amber-100'>
            <div className='shadow-md rounded '>
                    <img src={product.image} alt="" />
            </div>
            <div>
                    <h1 className='text-lg font-bold'>{product.title}</h1>
                    <p>{product.description}</p>
                    <div className='text-lg font-bold'>
                        <span>{product.price}</span>
                    </div>
                    <div >
                        <h1 className='text-lg font-bold'>Category</h1>
                        <span>{product.category}</span>
                    </div>
                    <button>Add to cart</button>
            </div>
           </div>
        </div>
    );
};

export default Deatils;
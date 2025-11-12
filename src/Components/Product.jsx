import  { useContext } from 'react';
import { Link } from 'react-router';
import { AppContext } from '../Context/AppContext';
import toast from 'react-hot-toast';

const Product = ({ product }) => {
    // console.log(product);
    const { id,image, price, description, title } = product;

    const { addToCart} = useContext(AppContext)

    const handleAddtoCart =() =>{
        addToCart(product)
        toast.success('cart added succesfully')
    }

    return (
        <div className='mt-5'>
            <div className="card bg-base-100 w-[340px] shadow-xl">
                <figure>
                    <img
                      className='h-80 w-full'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <hr />
                    <div className="flex">
                       <p>Price :${price} </p>
                        <Link to={`/details/${id}`} >Details</Link>
                    </div>

                        <hr />
                    <div className='mt-2 flex justify-center w-full'>
            <Link to={'/cart'}><button onClick={handleAddtoCart} className='px-16 rounded-xl bg-blue-800 text-white py-2 text-lg'>Add to cart</button></Link>
          </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
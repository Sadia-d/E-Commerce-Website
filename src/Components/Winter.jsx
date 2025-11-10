
import { useContext } from 'react';
import { Link } from 'react-router';
import { AppContext } from '../Context/AppContext';

const Winter = ({ data }) => {

      const { addToCart } = useContext(AppContext);

  const handleAddToCart = () => {
    addToCart(data);
  };

    const {image ,title ,description ,price,category,rating} = data
    return (
        <div className='mt-16'>
             <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                      className='h-36'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body ">
                    <h2 className="text-xl font-medium">{title}</h2>
                    <p>{description}</p>
                    <hr />
                    <div className="flex">
                       <p>Price :${price} </p>
                        <p>Ratings : {rating} </p>
                    </div>
                         <hr />
                  <div className='mt-2 w-full'>
                     <Link to={'/cart'}> <button onClick={handleAddToCart} className='btn bg-[#5586be]'>Add to cart</button></Link>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Winter;
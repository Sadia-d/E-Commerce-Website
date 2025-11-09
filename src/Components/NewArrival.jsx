import { Link } from "react-router";
import Product from "./Product";



const NewArrival = ({product}) => {
  const { id,image, price, description, title } = product;
    return (
        <div>
          
             <div className='mt-5'>
            <div className="card bg-base-100 w-96 shadow-2xl">
                <figure>
                    <img
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
                </div>
            </div>
        </div>
        </div>
    );
};

export default NewArrival;
import { Link } from "react-router";


const NewArrival = ({product}) => {
  const { id,image, price, description, title } = product;
    return (
        <div>
          
             <div className='mt-5'>
            <div className="card bg-base-100 w-96 shadow-2xl">
                <figure>
                    <img
                    className="h-36"
                        src={image}
                        />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <hr />
                    <div className="flex">
                       <p>Price :${price} </p>
                     <Link to={`/details/${id}`} ><button>Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default NewArrival;
import React from 'react';

const Product = ({ product }) => {
    // console.log(product);
    const { image, price, description, title } = product;

    return (
        <div className='mt-5'>
            <div className="card bg-base-100 w-96 shadow-xl">
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
                       <button>View details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;

import { useContext } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link, useLoaderData } from 'react-router';
import { AppContext } from "../Context/AppContext";
import toast from "react-hot-toast";

const Details = () => {

    const product = useLoaderData();
    const { addToCart } = useContext(AppContext);

    const handleAddTocart = () =>{
        addToCart(product)
        toast.success(" Product successfully added to cart!")
    }

    const { image, price, colors, ratings, title, sizes, stock, category } = product;


    return (
        <section>
             
            <div className="bg-sky-50 p-10 flex justify-center  items-center md:min-h-[800px]">
                <div className="flex bg-white px-6 md:h-[500px] flex-col md:flex-row justify-center items-center border border-zinc-200 shadow-xl gap-10">
                    {/* image div */}
                    <div className="w-full  md:w-1/2 flex justify-center">
                        <img className="rounded-xl w-[350px] shadow-lg" src={image} alt={title} />
                    </div>

                    {/* text div */}
                    <div className="space-y-2 w-full md:w-1/2">
                        <h1 className="text-3xl font-bold ">{title}</h1>

                        <div className="text-xl font-semibold text-gray-800">
                            <p>Category: <span className="font-normal text-gray-700">{category}</span></p>
                            <p>Price: <span className="text-green-600">${price}</span></p>
                            <p>Ratings: <span className="text-yellow-500">⭐ {ratings}</span></p>
                            <p>Available Stock: <span className="text-gray-700">{stock} pcs</span></p>
                        </div>

                        <div  className="space-y-3">
                            <p className="font-semibold">Available Colors:</p>
                            <div className="flex gap-2">
                                {colors.map((color, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 border rounded-full
                   bg-white shadow-sm"
                                    >
                                        {color}
                                    </span>
                                ))}
                            </div>

                            <p className="font-semibold mt-4">Sizes:</p>
                            <div className="flex gap-2">
                                {sizes.map((size, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 border rounded-full bg-white shadow-sm"
                                    >
                                        {size}
                                    </span>
                                ))}
                            </div>
                        </div>

                       <div>
                        <Link to={'/cart'}> <button onClick={handleAddTocart}  className="mt-6 px-6 py-3 flex items-center gap-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
                            <FaCartShopping /> Add to Cart
                        </button></Link>
                       </div>
                    </div>
                </div>
                   
            </div>
          
        </section>

    );
};

export default Details;
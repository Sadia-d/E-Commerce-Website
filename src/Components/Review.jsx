import React from 'react';

const Review = () => {
    return (
        <div>
            <div className='mt-16 bg-gray-50 py-12'>
                <div className='text-center mb-10'>
                    <h2 className='text-4xl font-bold'>What Our Clients Say</h2>
                    <p className='mt-2 text-gray-500'>
                        Hear from our happy customers who love our collections.
                    </p>
                </div>

                <div className='grid md:grid-cols-3 grid-cols-1 gap-8 max-w-6xl mx-auto'>

                    <div className='bg-white p-6 rounded-xl shadow-md'>
                        <p className='text-gray-700 mb-4'>
                            "Amazing products and quick delivery! I love the quality and style."
                        </p>
                        <div className='flex items-center gap-3'>
                            <img
                                src='https://randomuser.me/api/portraits/women/44.jpg'
                                alt='Client'
                                className='w-12 h-12 rounded-full object-cover'
                            />
                            <div>
                                <h4 className='font-semibold'>Jane Doe</h4>
                                <p className='text-gray-500 text-sm'>Verified Buyer</p>
                            </div>
                        </div>
                    </div>

                    <div className='bg-white p-6 rounded-xl shadow-md'>
                        <p className='text-gray-700 mb-4'>
                            "Excellent service and the clothes fit perfectly. Highly recommend!"
                        </p>
                        <div className='flex items-center gap-3'>
                            <img
                                src='https://randomuser.me/api/portraits/men/32.jpg'
                                alt='Client'
                                className='w-12 h-12 rounded-full object-cover'
                            />
                            <div>
                                <h4 className='font-semibold'>John Smith</h4>
                                <p className='text-gray-500 text-sm'>Verified Buyer</p>
                            </div>
                        </div>
                    </div>

                    <div className='bg-white p-6 rounded-xl shadow-md'>
                        <p className='text-gray-700 mb-4'>
                            "Great customer support and amazing collection. I will buy again!"
                        </p>
                        <div className='flex items-center gap-3'>
                            <img
                                src='https://randomuser.me/api/portraits/women/68.jpg'
                                alt='Client'
                                className='w-12 h-12 rounded-full object-cover'
                            />
                            <div>
                                <h4 className='font-semibold'>Emily Clark</h4>
                                <p className='text-gray-500 text-sm'>Verified Buyer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;
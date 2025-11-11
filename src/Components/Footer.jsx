import React from 'react';

const Footer = () => {
  return (
    <div>

      <footer className='bg-gray-900 text-gray-200 mt-16'>
        <div className='max-w-6xl mx-auto py-10 px-4 md:px-0 grid md:grid-cols-4 gap-8'>

          {/* About */}
          <div>
            <h3 className='text-xl font-bold mb-4'>About Us</h3>
            <p className='text-gray-400 text-sm'>
              Step into style with our curated collections. High-quality outfits for men, women, and children.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-xl font-bold mb-4'>Support</h3>
            <ul className='space-y-2 text-gray-400 text-sm'>
              <li><a href="/" className='hover:text-white'>Home</a></li>
              <li><a href="/arrivals" className='hover:text-white'>New Arrivals</a></li>
              <li><a href="/popular" className='hover:text-white'>Popular</a></li>
              <li><a href="/cart" className='hover:text-white'>Cart</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className='text-xl font-bold mb-4'>Contact</h3>
            <ul className='space-y-2 text-gray-400 text-sm'>
              <li>Email: styleHaven123@gmail.com</li>
              <li>Address: Dhaka, Bangladesh</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className='text-xl font-bold mb-4'>Follow Us</h3>
            <div className='flex gap-4'>
              <a href="#" className='hover:text-white'>Facebook</a>
              <a href="#" className='hover:text-white'>Instagram</a>
              <a href="#" className='hover:text-white'>Twitter</a>
            </div>
          </div>

        </div>

        <div className='border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm'>
          &copy; {new Date().getFullYear()} style Haven. All rights reserved.
        </div>
      </footer>

    </div>
  );
};

export default Footer;
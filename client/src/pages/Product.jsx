import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import Sidebar from '../components/Sidebar';
import product from '../utils/Product.json'


function Product() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
     <>
     
     <Sidebar/>
     <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      
      {/* Main Content */}
      <div className="flex-1 bg-gray-100">
        {/* Toggle Sidebar Icon */}
        {!isSidebarOpen && (
          <div className="fixed top-0 left-0 m-4">
            <button onClick={toggleSidebar} className="bg-blue-600 text-white p-2 rounded-full">
              <FiMenu size={30} />
            </button>
          </div>
        )}

        <div className='w-full h-full'>
            <div className='mt-10'>
              <h1 className='text-center text-3xl mb-10'>Our Product</h1>
                 <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 gap-y-16 mx-10 rounded-sm mb-40'>
                  {product.map(product =>(
                  <div key={product.id} className="bg-white shadow-2xl rounded-xl  p-6">
                  <div className="">
                    <div className="flex gap-4">
                      <div>
                        <h2 className="text-2xl font-semibold text-[2rem] text-center">
                          {product.ProductName}
                        </h2>
                        <p className="font-bold text-start">{product.ProductSpecs}</p>
                      </div>
                     
                    </div>
                    
                  </div>
                  <div className='flex justify-between mt-4'>
                      <button className='text-red-500'>Save</button>
                      <button>Edit</button>
                      </div>
                </div>
                  ))}
                 
                 </div>
                 
            </div>
         
        </div>

      </div>
    </div>
     </>
  );
};

export default Product;

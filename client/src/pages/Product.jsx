import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import Sidebar from '../components/Sidebar';


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
        <h1 className='text-center'>Product</h1>
      </div>
    </div>
     </>
  );
};

export default Product;

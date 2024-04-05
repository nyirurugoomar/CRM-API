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

        <div className='w-full h-full'>
            <div className='mt-10'>
                 <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 gap-y-16 mx-10 rounded-sm mb-40'>
                    
                 </div>
                 <div className="bg-white shadow-2xl rounded-xl px-2">
                  <div className="mt-4 mx-2">
                    <div className="flex gap-4">
                      <div>
                        <h2 className="text-xl font-semibold text-[2rem] text-center">
                          CAMERA
                        </h2>
                        <p className="font-bold text-center">it's camera that user for outside</p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
         
        </div>

      </div>
    </div>
     </>
  );
};

export default Product;

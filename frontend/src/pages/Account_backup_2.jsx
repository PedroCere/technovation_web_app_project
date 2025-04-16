import React from 'react';
import Sidebar from '../components/Sidebar';

const Account = () => {
  return (
    <div className="min-h-screen flex bg-[#07020B] text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col">
   
        {/* Account Content Container */}
        <div className="flex-1 p-8 bg-[#07020B]">
          <h1 className="text-2xl mb-4">Account Settings</h1>
          <p>We'll restore the full account settings panels next</p>
        </div>
      </div>
    </div>
  );
};

export default Account;

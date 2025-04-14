import React from 'react';
import { FaChartLine, FaNewspaper, FaFileAlt, FaCog, FaUserCircle, FaWallet, FaShieldAlt, FaHistory } from 'react-icons/fa';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const Account = () => {
  return (
    <div className="min-h-screen flex bg-[#07020B] text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        {/* Enhanced Account Content */}
       <Navbar/>
        <div className="flex-1 p-8 bg-gradient-to-b from-[#0D0911] to-[#1A1520]">
          <div className="bg-[#121318] rounded-xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#0070E4] to-[#00C4E4] bg-clip-text text-transparent">
              Account Settings
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Personal Information */}
              <div className="bg-[#1A161F] p-6 rounded-xl border border-[#2A2530]">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <FaUserCircle className="text-[#0070E4]" />
                  Personal Information
                </h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-[#CCCCCC] text-sm font-medium mb-2">Full Name</label>
                    <input 
                      type="text" 
                      defaultValue="Mateo Baccillere"
                      className="w-full bg-[#2A2530] p-3 rounded-lg border border-[#3A3540] focus:border-[#0070E4] focus:ring-2 focus:ring-[#0070E433] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[#CCCCCC] text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      defaultValue="mateo@example.com"
                      className="w-full bg-[#2A2530] p-3 rounded-lg border border-[#3A3540] focus:border-[#0070E4] focus:ring-2 focus:ring-[#0070E433] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[#CCCCCC] text-sm font-medium mb-2">Phone</label>
                    <input 
                      type="tel" 
                      defaultValue="+1 (555) 123-4567"
                      className="w-full bg-[#2A2530] p-3 rounded-lg border border-[#3A3540] focus:border-[#0070E4] focus:ring-2 focus:ring-[#0070E433] transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Security */}
              <div className="bg-[#1A161F] p-6 rounded-xl border border-[#2A2530]">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <FaShieldAlt className="text-[#00C4E4]" />
                  Security Settings
                </h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-[#CCCCCC] text-sm font-medium mb-2">Password</label>
                    <button className="w-full bg-gradient-to-r from-[#0070E4] to-[#0060C4] text-white p-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                      Change Password
                    </button>
                  </div>
                  <div>
                    <div className="flex items-center justify-between p-4 bg-[#2A2530] rounded-lg">
                      <div>
                        <div className="text-[#CCCCCC] font-medium mb-1">Two-Factor Authentication</div>
                        <div className="text-xs text-[#999999]">Enhanced account security</div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-12 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0070E4]"></div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Account Details */}
              <div className="bg-[#1A161F] p-6 rounded-xl border border-[#2A2530] col-span-1 lg:col-span-2">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <FaWallet className="text-[#81C784]" />
                  Account Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-[#2A2530] p-4 rounded-lg">
                    <label className="block text-[#999999] text-xs font-medium mb-1">Account Number</label>
                    <div className="font-mono text-sm">4453729992</div>
                  </div>
                  <div className="bg-[#2A2530] p-4 rounded-lg">
                    <label className="block text-[#999999] text-xs font-medium mb-1">Account Type</label>
                    <div className="text-sm">Individual</div>
                  </div>
                  <div className="bg-[#2A2530] p-4 rounded-lg">
                    <label className="block text-[#999999] text-xs font-medium mb-1">Opened Date</label>
                    <div className="text-sm">2022-05-15</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-end gap-4">
              <button className="px-8 py-3 rounded-lg border border-[#3A3540] hover:border-[#0070E4] hover:text-[#0070E4] transition-colors">
                Cancel
              </button>
              <button className="bg-gradient-to-r from-[#0070E4] to-[#0060C4] text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;

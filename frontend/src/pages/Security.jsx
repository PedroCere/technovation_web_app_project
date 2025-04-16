import React from 'react';
import { FaShieldAlt, FaKey, FaLock, FaFingerprint, FaUserShield } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const Security = () => {
  return (
    <div className="min-h-screen flex bg-[#07020B] text-white">
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
    
      <Navbar />

        {/* Security Page Content */}
        <div className="flex-1 p-8 bg-[#07020B]">
          <div className="bg-[#121318] rounded-xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r  from-[#0070E4] to-[#00C4E4] bg-clip-text text-transparent">
              Security Settings
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Password Management */}
              <div className="bg-[#1A161F] p-6 rounded-xl border border-[#2A2530]">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <FaKey className="text-[#0070E4]" />
                  Change Password
                </h3>
                <button className="w-full bg-gradient-to-r from-[#0070E4] to-[#0060C4] text-white p-3 rounded-lg hover:opacity-90 transition-opacity">
                  Update Password
                </button>
              </div>

              {/* Two-Factor Authentication */}
              <div className="bg-[#1A161F] p-6 rounded-xl border border-[#2A2530]">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <FaShieldAlt className="text-[#00C4E4]" />
                  Two-Factor Authentication
                </h3>
                <div className="flex items-center justify-between p-4 bg-[#2A2530] rounded-lg">
                  <div>
                    <div className="text-[#CCCCCC] font-medium mb-1">Enable 2FA</div>
                    <div className="text-xs text-[#999999]">Secure your account with two-step verification</div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-12 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0070E4]"></div>
                  </label>
                </div>
              </div>

              {/* Login Alerts */}
              <div className="bg-[#1A161F] p-6 rounded-xl border border-[#2A2530]">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <FaLock className="text-[#FFC107]" />
                  Login Alerts
                </h3>
                <p className="text-sm text-[#CCCCCC] mb-4">Receive alerts for logins from new devices or locations.</p>
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-12 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0070E4]"></div>
                  <span className="ml-3 text-sm text-[#CCCCCC]">Enable login alerts</span>
                </label>
              </div>

              {/* Biometric Setup */}
              <div className="bg-[#1A161F] p-6 rounded-xl border border-[#2A2530]">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <FaFingerprint className="text-[#00E4A5]" />
                  Biometric Authentication
                </h3>
                <p className="text-sm text-[#CCCCCC] mb-4">Use Face ID or fingerprint for faster login on supported devices.</p>
                <button className="w-full bg-[#2A2530] border border-[#3A3540] text-white py-2 rounded-lg hover:border-[#00E4A5] hover:text-[#00E4A5] transition-colors">
                  Configure Biometrics
                </button>
              </div>

              {/* Session Management */}
              <div className="bg-[#1A161F] p-6 rounded-xl border border-[#2A2530] md:col-span-2">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <FaUserShield className="text-[#E91E63]" />
                  Active Sessions
                </h3>
                <p className="text-sm text-[#CCCCCC] mb-4">Manage and sign out from active sessions across devices.</p>
                <button className="w-full bg-gradient-to-r from-[#E91E63] to-[#C2185B] text-white p-3 rounded-lg hover:opacity-90 transition-opacity">
                  Sign Out All Sessions
                </button>
              </div>
            </div>

            <div className="mt-8 flex justify-end gap-4">
              <button className="px-8 py-3 rounded-lg border border-[#3A3540] hover:border-[#0070E4] hover:text-[#0070E4] transition-colors">
                Cancel
              </button>
              <button className="bg-gradient-to-r from-[#0070E4] to-[#0060C4] text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">
                Save Changes
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
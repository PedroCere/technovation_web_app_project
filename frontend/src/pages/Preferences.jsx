import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  FaCog, 
  FaUserCircle, 
  FaShieldAlt, 
  FaMoon, 
  FaSun, 
  FaBell,
  FaLanguage,
  FaLock,
  FaDownload,
  FaUniversalAccess,
  FaTrash
} from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Preferences = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const activeTab = location.pathname.split('/')[1] || 'preferences';
  
  const [userSettings, setUserSettings] = useState({
    notifications: true,
    darkMode: window.matchMedia('(prefers-color-scheme: dark)').matches,
    privacyLevel: 'medium',
    language: 'en',
    twoFactorAuth: false,
    emailFrequency: 'weekly',
    showOnlineStatus: true,
    dataSharing: false,
    reducedMotion: false,
    autoSave: true
  });

  useEffect(() => {
    const html = document.documentElement;
    userSettings.darkMode ? html.classList.add('dark') : html.classList.remove('dark');
    localStorage.setItem('userPreferences', JSON.stringify(userSettings));
  }, [userSettings]);

  const updateSettings = (setting, value) => {
    setUserSettings(prev => ({ ...prev, [setting]: value }));
  };

  const SettingItem = ({ icon, label, children, description }) => (
    <div className="w-full group hover:bg-[#1A161F] transition-all duration-300 max-w-2xl flex items-center justify-between bg-[#1A161F] p-6 rounded-xl border border-[#2A2530] mb-4">
      <div className="flex-1">
        <div className="flex items-center space-x-4">
          <span className="text-xl bg-gradient-to-r from-[#0070E4] to-[#00C4E4] bg-clip-text text-transparent">
            {icon}
          </span>
          <div>
            <h3 className="text-lg font-semibold text-[#CCCCCC]">{label}</h3>
            {description && <p className="text-sm text-[#999999] mt-1">{description}</p>}
          </div>
        </div>
      </div>
      <div className="ml-4">
        {children}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex bg-[#07020B] text-[#CCCCCC]">
      <Sidebar activeTab={activeTab} onTabChange={(tab) => navigate(`/${tab}`)} />
      
      <div className="flex-1 flex flex-col">
        <Navbar />
        
        <main className="flex-1 p-8 lg:p-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#0070E4] to-[#00C4E4] bg-clip-text text-transparent">
              Account Settings
            </h1>
            
            <div className="space-y-6">
              <SettingItem
                icon={<FaUserCircle />}
                label="Public Profile"
                description="Manage your public facing information"
              >
                <button
                  className="bg-gradient-to-r from-[#0070E4] to-[#0060C4] text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
                  onClick={() => {}}
                >
                  Edit Profile
                </button>
              </SettingItem>

              <SettingItem
                icon={<FaLock />}
                label="Security"
                description="Enhance your account security"
              >
                <label className="flex items-center space-x-3 cursor-pointer">
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={userSettings.twoFactorAuth}
                      onChange={() => updateSettings('twoFactorAuth', !userSettings.twoFactorAuth)}
                      className="sr-only"
                    />
                    <div className={`w-14 h-8 rounded-full transition-colors duration-300 ${
                      userSettings.twoFactorAuth ? 'bg-[#0070E4]' : 'bg-[#2A2530]'
                    }`}>
                      <div className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white transition-transform duration-300 ${
                        userSettings.twoFactorAuth ? 'translate-x-6' : ''
                      }`} />
                    </div>
                  </div>
                </label>
              </SettingItem>

              <SettingItem
                icon={<FaBell />}
                label="Notifications"
                description="Customize your notification preferences"
              >
                <div className="flex flex-col items-end space-y-2">
                  <select
                    value={userSettings.emailFrequency}
                    onChange={(e) => updateSettings('emailFrequency', e.target.value)}
                    className="bg-[#2A2530] px-4 py-2 rounded-lg border border-[#3A3540] focus:border-[#0070E4] focus:ring-2 focus:ring-[#0070E433]"
                  >
                    <option value="instant">Instant</option>
                    <option value="daily">Daily Digest</option>
                    <option value="weekly">Weekly Summary</option>
                  </select>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={userSettings.notifications}
                      onChange={() => updateSettings('notifications', !userSettings.notifications)}
                      className="form-checkbox h-5 w-5 text-[#0070E4]"
                    />
                    <span className="text-sm">Push Notifications</span>
                  </label>
                </div>
              </SettingItem>

              <SettingItem
                icon={userSettings.darkMode ? <FaMoon /> : <FaSun />}
                label="Appearance"
                description="Customize your viewing experience"
              >
                <label className="flex items-center space-x-3 cursor-pointer">
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={userSettings.darkMode}
                      onChange={() => updateSettings('darkMode', !userSettings.darkMode)}
                      className="sr-only"
                    />
                    <div className={`w-14 h-8 rounded-full transition-colors duration-300 ${
                      userSettings.darkMode ? 'bg-[#0070E4]' : 'bg-[#2A2530]'
                    }`}>
                      <div className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white transition-transform duration-300 ${
                        userSettings.darkMode ? 'translate-x-6' : ''
                      }`} />
                    </div>
                  </div>
                </label>
              </SettingItem>

              <SettingItem
                icon={<FaLanguage />}
                label="Language & Region"
                description="Set your preferred language and timezone"
              >
                <select
                  value={userSettings.language}
                  onChange={(e) => updateSettings('language', e.target.value)}
                  className="bg-[#2A2530] px-4 py-2 rounded-lg border border-[#3A3540] focus:border-[#0070E4] focus:ring-2 focus:ring-[#0070E433]"
                >
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                  <option value="de">Deutsch</option>
                </select>
              </SettingItem>

              <SettingItem
                icon={<FaDownload />}
                label="Data Management"
                description="Manage your account data"
              >
                <div className="flex space-x-3">
                  <button className="bg-gradient-to-r from-[#0070E4] to-[#0060C4] text-white px-4 py-2 rounded-lg hover:opacity-90">
                    Export Data
                  </button>
                  <button className="bg-gradient-to-r from-[#E46070] to-[#C44050] text-white px-4 py-2 rounded-lg hover:opacity-90 flex items-center">
                    <FaTrash className="mr-2" />
                    Delete Account
                  </button>
                </div>
              </SettingItem>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Preferences;
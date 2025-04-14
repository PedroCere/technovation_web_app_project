import { FaChartLine,FaShieldAlt, FaFileAlt, FaCog, FaSearch, FaUserCircle } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (tab) => {
    navigate(`/${tab}`);
  };

  const isActive = (tab) => location.pathname.includes(tab);

  return (
    <div className="w-64 p-6 border-r border-[#2A2530] bg-[#07020B]">
      <div className="w-full">
        <img src="/logo (2).png" alt="MarketVision.AI Logo" className="h-24 w-full object-cover" />
      </div>

      <nav className="space-y-6">
        {/* Trading Section */}
        <div className="border-b border-[#2A2530] pb-4">
          <h3 className="text-[#90CAF9] text-xs font-bold uppercase mb-3 tracking-widest">Trading</h3>
          <div className="space-y-2">
            {[
              { icon: <FaChartLine className="text-[#90CAF9]" />, label: 'Dashboard', tab: 'dashboard' },
              { icon: <FaChartLine className="text-[#64B5F6]" />, label: 'Markets', tab: 'markets' },
              { icon: <FaSearch className="text-[#81C784]" />, label: 'Predictions', tab: 'predictions' }
            ].map((item) => (
              <button
                key={item.label}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group ${
                  isActive(item.tab) ? 'bg-[#0070E4] text-white' : 'hover:bg-[#2A2530]'
                }`}
                onClick={() => handleNavigation(item.tab)}
              >
                <span className="group-hover:text-[#90CAF9] transition-colors">{item.icon}</span>
                <span className="group-hover:text-[#90CAF9] transition-colors">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Section */}
        <div className="border-b border-[#2A2530] pb-4">
          <h3 className="text-[#90CAF9] text-xs font-bold uppercase mb-3 tracking-widest">Portfolio</h3>
          <div className="space-y-2">
            {[
              { icon: <FaFileAlt className="text-[#FFB74D]" />, label: 'Overview', tab: 'overview' },
              { icon: <FaFileAlt className="text-[#4DB6AC]" />, label: 'Holdings', tab: 'holdings' },
              { icon: <FaFileAlt className="text-[#9575CD]" />, label: 'Performance', tab: 'performance' }
            ].map((item) => (
              <button
                key={item.label}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group ${
                  isActive(item.tab) ? 'bg-[#0070E4] text-white' : 'hover:bg-[#2A2530]'
                }`}
                onClick={() => handleNavigation(item.tab)}
              >
                <span className="group-hover:text-[#90CAF9] transition-colors">{item.icon}</span>
                <span className="group-hover:text-[#90CAF9] transition-colors">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
        
         {/* Settings Section */}
                     <div className="pb-4">
                       <h3 className="text-[#90CAF9] text-xs font-bold uppercase mb-3 tracking-widest">Settings</h3>
                       <div className="space-y-2">
                         {[
                           { icon: <FaCog className="text-[#E57373]" />, label: 'Preferences', tab: 'preferences' },
                           { icon: <FaUserCircle className="text-[#4DD0E1]" />, label: 'Account', tab: 'account' },
                           { icon: <FaShieldAlt className="text-[#AED581]" />, label: 'Security', tab: 'security' }
                         ].map((item) => (
                           <button
                             key={item.label}
                             className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#2A2530] transition-all duration-200 group"
                             onClick={() => navigate(`/${item.tab}`)}
                           >
                             <span className="group-hover:text-[#90CAF9] transition-colors">{item.icon}</span>
                             <span className="group-hover:text-[#90CAF9] transition-colors">{item.label}</span>
                           </button>
                         ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;

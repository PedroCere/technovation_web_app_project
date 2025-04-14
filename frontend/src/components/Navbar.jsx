import React from "react";
import "./styles/navbar.css";
import { FiChevronDown } from 'react-icons/fi';
import { FaSearch} from 'react-icons/fa';
const Navbar = () => {
  return (
           <div className="h-16 flex items-center justify-between px-8 border-b-2 border-[#2A2530] bg-bg-[#07020B]">
             <div className="flex items-center gap-6">
               <div className="flex items-center gap-2 group cursor-pointer relative">
                 <img 
                   src="/foto_usuario.jpg" 
                   alt="Usuario" 
                   className="h-10 w-10 rounded-full object-cover border-2 border-transparent group-hover:border-[#0070E4] transition-all"
                 />
                 <span className="font-medium">Mateo Baccillere</span>
                 <FiChevronDown className="text-gray-400 group-hover:text-[#0070E4] transition-colors" />
                 
                 {/* Dropdown Menu */}
                 <div className="absolute top-full left-0 w-48 bg-[#1A161F] rounded-lg shadow-2xl mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 invisible group-hover:visible">
                   <div className="py-2">
                     <button className="w-full px-4 py-2 text-left hover:bg-[#2A2530]">Profile Settings</button>
                     <button className="w-full px-4 py-2 text-left hover:bg-[#2A2530]">Logout</button>
                   </div>
                 </div>
               </div>
               <div className="flex items-center gap-6">
                 <div className="p-3 bg-bg-[#07020B] rounded-lg">
                   <p className="text-[#999999] text-sm">Portfolio Balance</p>
                   <p className="text-lg font-bold bg-gradient-to-r from-[#0070E4] to-[#00C4E4] bg-clip-text text-transparent">
                     $623,098.17
                   </p>
                 </div>
                 <div className="p-3 bg-bg-[#07020B] rounded-lg">
                   <p className="text-[#999999] text-sm">Available Funds</p>
                   <p className="text-lg font-bold text-[#81C784]">$122,912.50</p>
                 </div>
               </div>
             </div>
             
             <div className="flex items-center gap-6">
               <div className="flex items-center gap-2 bg-[#1F1B23] px-4 py-2 rounded-lg hover:bg-[#2A2530] transition-colors">
                 <FaSearch className="text-gray-400" />
                 <input 
                   type="text" 
                   placeholder="Search..." 
                   className="bg-transparent outline-none placeholder-[#666666] focus:text-white transition-colors"
                 />
               </div>
             </div>
           </div>
  )}
export default Navbar;

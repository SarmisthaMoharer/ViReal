import React , {useState} from 'react';
import{Menu,X} from "lucide-react";
import logo from "../assets/logo.png";
import {navItems} from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, SetMobileDrawerOpen] = useState(false);

  const toggleNavbar = ()=> {
    SetMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto ralative text-sm">
        <div className="flex justify-between items-center ">
          <div className="flex items-center flex-shink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tight">ViReal</span>
          </div>
          <ul className='hidden lg:flex ml-14 space-x-12'>
            {navItems.map((item,index)=>(
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className='py-2 px-3 border rounded-md'>
              Sign In
            </a>
            <a href="#" className='bg-gradient-to-r from-emerald-500 to-blue-400 py-1 px-3 rounded-md'>Create an account</a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
            <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
              <ul className='flex flex-col ml-5 space-y-10 lg:hidden'>
                {navItems.map((item,index)=>(
                  <li key={index} className='py-4'>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
              <div className="py-6 flex justify-center space-x-12 items-center lg:hidden">
                  <a href="#" className='py-2 px-3 border rounded-md'>
                    Sign In
                  </a>
                  <a href="#" className='bg-gradient-to-r from-emerald-500 to-blue-400 py-1 px-3 rounded-md'>Create an account</a>
                </div>
            </div>
        )}
      </div>
    </nav>

  )
}

export default Navbar

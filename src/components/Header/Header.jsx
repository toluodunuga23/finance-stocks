import React from 'react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { navbarLinks } from '../../constants/index'

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    }
    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 flex flex-row ">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex justify-between items-center">
                        <img className='h-10  w-10 mr-2' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="logo" />
                        <span className="text-xl tracking-tight ">Financely</span>
                    </div>
                    <ul className='hidden lg:flex ml-14 space-x-12'>
                        {navbarLinks.map((item, index) => (
                            <li key={index} className='hover:text-primary-500'>
                                <a href={item.url}>{item.name}</a>
                            </li>
                        )
                        )}
                    </ul>
                    <div className="hidden lg:flex justify-center space-x-12 items-center">
                        <a href="#" className="py-2 px-3 border rounded-md">
                            Sign in
                        </a>
                        <a href="#" className="bg-gradient-to-r from-emerald-400 to-emerald-800  py-2 px-3 rounded-md">
                            Create an Account
                        </a>
                    </div>
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                    {mobileDrawerOpen && (
                        <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                           <ul>
                                 {navbarLinks.map((item, index) => (
                                      <li key={index} className='hover:text-primary-500'>
                                    <a href={item.url}>{item.name}</a>
                                    </li>
                                 ))}
                           </ul>
                           <div className="flex space-x-6">
                            <a href="#" className="py-2 px-3 border rounded-md">
                                Sign In
                            </a>
                            <a href="#"
                            className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800">
                                Create an Account
                            </a>
                            </div>
                 
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar

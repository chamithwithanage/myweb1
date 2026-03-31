// src/components/Navbar.jsx
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative">

                {/* Logo */}
                 <h1 className="text-2xl font-bold text-gray-700">
                <ReactTyped
                strings={[
                   
                         "WithanZ"

                ]}
                typeSpeed={150}
                backSpeed={30}
                loop
                
                
                />
                </h1>
                

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 text-gray-700 font-medium absolute left-1/2 -translate-x-1/2">
                    <Link to="/" ><li className="hover:text-blue-600">Home</li></Link>
                    <Link to="/about" ><li className="hover:text-blue-600">About</li></Link>
                    <Link to="/projects" ><li className="hover:text-blue-600">Projects</li></Link>
                    <Link to="/contact" ><li className="hover:text-blue-600">Contact</li></Link>

                </ul>
                <Link to="/Login">
            <span className="hidden md:flex text-gray-700 font-medium hover:text-blue-600 cursor-pointer">
                Login
            </span>
                </Link>
                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={28} /> : <Menu size={28} />}
                </button>

            </div>

            {/* Mobile Menu */}
            {open && (
                <ul className="md:hidden flex flex-col gap-4 p-4 bg-transparent text-center  ">


                    <Link to="/" ><li className="block py-2 hover:text-blue-600">Home</li></Link>
                    <Link to="/about" ><li className="block py-2 hover:text-blue-600">About</li></Link>
                    <Link to="/projects" ><li className="block py-2 hover:text-blue-600">Projects</li></Link>
                    <Link to="/contact" ><li className="block py-2 hover:text-blue-600">Contact</li></Link>
                    <Link to="/login" ><li className="block py-2 hover:text-blue-600 ">Login</li></Link>
                </ul>
            )}
        </nav>
    );
}
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { asset} from '../assets/assest'
import { motion, AnimatePresence } from 'framer-motion'
const Navbar = () => {
  const [show,setShow]=useState(false)
  return (
    <div className="relative z-50">
      {/* Top Navbar */}
      <div className="z-50 font-poppins px-4 h-16 w-full max-w-screen flex items-center justify-between font-medium bg-transparent text-gray-700">
        <h3 className="font-poppins text-3xl">ScrapMart</h3>

        {/* Desktop NavLinks */}
        <div className="hidden sm:flex items-center justify-between gap-6">
          <NavLink to="/"><p>Home</p></NavLink>
          <NavLink to="/about"><p>About</p></NavLink>
          <NavLink to="/help"><p>Help</p></NavLink>
          <NavLink to="/postscrap"><p>PostScrap</p></NavLink>
        </div>
        <div>
            <button className=' ml-2  h-9 w-24 border border-green-400 shadow-emerald-300 rounded-lg shadow-sm'>Sign</button>
        </div>
      </div>

      {/* Mobile Slide Menu */}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 h-full w-64 bg-cyan-200 z-40 sm:hidden rounded-r-xl shadow-lg font-poppins pt-20 pl-6 text-xl"
          >
            <NavLink to="/" onClick={() => setShow(false)}>
              <p className="py-4">Home</p>
            </NavLink>
            <NavLink to="/about" onClick={() => setShow(false)}>
              <p className="py-4">About</p>
            </NavLink>
            <NavLink to="/help" onClick={() => setShow(false)}>
              <p className="py-4">Help</p>
            </NavLink>
            <NavLink to="/postscrap" onClick={() => setShow(false)}>
              <p className="py-4">PostScrap</p>
            </NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar

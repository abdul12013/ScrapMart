import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { asset} from '../assets/assest'
import { motion, AnimatePresence } from 'framer-motion'
const Navbar = () => {
  const [show,setShow]=useState(false)
  const {backendUrl,navigate,token,setToken, setUserRole}=useContext(ScrapContext)
  return (
    <div className=''>
       <div className=' z-20 font-poppins  px-4  h-16 w-full max-w-screen  flex  items-center justify-between  font-medium bg-transparent text-gray-500'>
        <h3 className=' font-poppins text-3xl'>ScrapMart</h3>
        <div className='  hidden sm:flex items-center justify-between gap-6'>
            <NavLink>
              <p className='  '>Home</p>
              <hr className=' w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
            </NavLink>
            <NavLink>
              <p >About</p>
              <hr className=' w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
              </NavLink>
            <NavLink>
              <p>Help</p>
              <hr className=' w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
              </NavLink>
            <NavLink>
              <p>PostScrap</p>
              <hr className=' w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
              </NavLink>
        </div>
        <div>
            <button className=' ml-2  h-9 w-24 border border-green-400 shadow-emerald-300 rounded-lg shadow-sm'>Sign</button>
        </div>

        <div className=' z-40 relative sm:hidden' onClick={()=>{setShow(!show)}}>
          <img src={`${show ? asset.cross_icon :asset.menu_icon}`} className='w-6'/></div>
        </div> 
       {/* Mobile view  */}
       { show && (
        <AnimatePresence>
        <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        exit={{ x: '-100%' }}
        transition={{ duration: 0.3 }}
        className=' font-medium  font-poppins  text-xl ml-2 w-80  bg-cyan-200 rounded-lg h-[90vh] z-40   pl-4   relative sm:hidden'
      >
       
       <NavLink>
              <p className=' py-2 pl-6 border h-5 pt-10  '>Home</p>
             
            </NavLink>
            <NavLink>
              <p className=' py-2 pl-6 border h-5 pt-10' >About</p>
            
              </NavLink>
            <NavLink>
              <p  className='py-2 pl-6 border h-5 pt-10'>Help</p>
              
              </NavLink>
            <NavLink>
              <p  className='py-2 pl-6 border h-5 pt-10'>PostScrap</p>
             
              </NavLink>
       </motion.div>
       </AnimatePresence>
       )}
    </div>
  )
}

export default Navbar

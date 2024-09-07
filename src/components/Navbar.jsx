import React from 'react'
import logo from "../assets/react.svg"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-blue-700 p-4 flex justify-between items-center">
      <div className="flex items-center ml-10">
        {/* Logo */}
        <img className='w-12' src="https://static-00.iconduck.com/assets.00/training-icon-2048x2046-pm3vlakf.png" />

        {/* Brand Text */}
        <span className="text-white font-semibold text-lg">NVC Treining Center</span>
      </div>

      <ul className="flex space-x-4 mr-10">
        <li><NavLink to="/" className="text-white hover:text-green-400">หน้าหลัก</NavLink></li>
        <li><NavLink to="/Course" className="text-white hover:text-green-400">หลักสูตรที่เปิดสอน</NavLink></li>
        <li><NavLink to="/contact" className="text-white hover:text-green-400">ติดต่อ</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar
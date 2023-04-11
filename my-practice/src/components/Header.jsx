import React, { createContext } from 'react';
import { Link, NavLink, Outlet, useLoaderData } from 'react-router-dom';
export const AllJobContext=createContext([])
export const AppliedJobContext=createContext([])
const Header = () => {
    const { products, initialCart }= useLoaderData()
    console.log(initialCart,products)
    
    return (
        <div className='md:mx-4'>
            <div className="navbar bg-red-200 rounded-md sticky top-0 z-10">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li tabIndex={0}>
          <a className="justify-between">
            Parent
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-2xl text-black">Search Job Hub</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="flex justify-between w-96  text-amber-800 font-extrabold ">
      <NavLink to='/' className={({isActive})=>isActive?"text-green-400" :''}>Home</NavLink>
      <NavLink to='/Statistics' className={({isActive})=>isActive?"text-green-400" :''}>Statistics</NavLink>
      <NavLink to='/Jobs' className={({isActive})=>isActive?"text-green-400" :''}>Applied Jobs</NavLink>
      <NavLink to='/Blog' className={({isActive})=>isActive?"text-green-400" :''}>Blog</NavLink>
      
    </ul>
  </div>
  <div className="navbar-end">
    <Link><button className='btn bg-blue-500 text-white'>Start Applying</button></Link>
  </div>
</div>
<Outlet></Outlet>
        </div>
    );
};

export default Header;
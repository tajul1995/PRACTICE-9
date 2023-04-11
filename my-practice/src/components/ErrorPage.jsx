import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const{error,status}=useRouteError()
    return (
        <>
            <div className="alert alert-error shadow-lg w-1/2 h-60 mx-auto  ">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    <span className='text-2xl text-black'>Error:{error?.message}</span>
    <span className='text-2xl text-black'>Error:{status}</span>
    <Link
            to='/'
            
          >
            <p className='text-xl border p-2 rounded bg-blue-500 text-white'><i class="fa-solid fa-backward "></i> back home</p>
          </Link>
  </div>
</div>
        </>
    );
};

export default ErrorPage;
import React from 'react';

const SingleJob = ({job}) => {
    const {icon,catagory,vacancy}=job
    return (
        <div>
           <div className="card card-compact w-60 bg-lime-100  shadow-xl my-4 p-3">
  <p className='text-amber-600 mx-auto'>{icon}</p>
  <div className="card-body">
    <h2 className="card-title text-xl font-bold text-black my-2">{catagory}</h2>
    <p className='text-gray-900'>{vacancy}</p>
    <div className="card-actions justify-end">
    
    </div>
  </div>
</div> 
        </div>
    );
};

export default SingleJob;
import React from 'react';

const Job = ({singleCart}) => {
    console.log(singleCart)
    const {logo,jobTitle,category,location,salary,jobCatagory,id}=singleCart
    return (
        <>
            <div>
            <div className="card w-[250px]  bg-orange-100 shadow-xl overflow-hidden">
  <figure><img src={logo}alt="Shoes" className='object-cover' /></figure>
  <div className="card-body">
    <h2 className="card-title text-black">
      {jobTitle}
      
    </h2>
    <p>{category}</p>
    <div className="card-actions justify-start">
      <div className="badge badge-outline text-black">{jobCatagory}</div>
      <div className="badge badge-outline text-black">fulltime</div>
    </div>
    <div>
        <p className='text-black'>Location: {location}</p>
        <p className='text-black'>Salary: {salary}</p>
    </div>
    <button  className='btn bg-blue-500 text-white'>VIEW DETAILS</button>
  </div>
</div>
        </div>
        </>
    );
};

export default Job;
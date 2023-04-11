import React from 'react';
import { Link, NavLink, Outlet, json, useLoaderData } from 'react-router-dom';



const JodDetails = ({cart,handleCart,storDataToLocal}) => {
    
    const {category,educationalRequirement,email,jobCatagory,jobDescription,jobResponsibility,jobTitle,location,phoneNumber,salary,experience,id}=cart

    
    return (
        <div className='w-full '>
            
            <div className='single-cart w-full h-80 relative'>
            <img className='w-full h-80 ' src="https://images.unsplash.com/photo-1668162456452-11e6ca7c8608?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZGlnaXRhbCUyMGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60 " alt="" />
                <h1 className='text-4xl text-white uppercase text-center absolute top-1/2 right-1/2'>Job details</h1>
            </div>
            <div className='grid grid-cols-3 gap-3 my-9'>
                <div className='col-span-2 border rounded-xl text-center bg-primary'>
                    <h1 className='text-2xl text-black font-bold'>jobDescription: </h1><span className='my-4 text-white'>{jobDescription}</span>
                    <p className='text-2xl text-black font-bold'>jobResponsibility: </p>
                    <p className='my-4 text-white'>{jobResponsibility}</p>
                    
                    <p className='text-2xl text-black font-bold'>educationalRequirement:</p>
                    <p className='my-4 text-white'>{educationalRequirement}</p>
                    <p className='text-2xl text-black font-bold'>experience:</p>
                    <p className='my-4 text-white'>{experience}</p>


                </div>
                <div>
                <div className="card w-96 bg-primary text-primary-content">
  < div className="card-body">
    <h2 className='text-2xl font-bold text-black'>job details</h2>
    <p>salary:{salary}</p>
    <h2 className="card-title">job title: <span>{jobTitle}</span></h2>
    <p className='text-2xl font-bold text-black'>contract informtion</p>
    <p>phone: <span>{phoneNumber}</span></p>
    <p>Email: <span>{email}</span></p>
    <p>location: <span>{location}</span></p>
    <div className="card-actions justify-start ">
    <Link onClick={()=>storDataToLocal(id)} className="btn w-full my-4 bg-blue-400 text-white">Apply now</Link>  
    <Link onClick={()=>handleCart(false)} className="btn w-full my-4 bg-blue-400 text-white" > <button>BACK HOME</button></Link>  
      
    </div>
    
  </div>
</div>
                </div>

            </div>
            
        </div>
    );
};

export default JodDetails;
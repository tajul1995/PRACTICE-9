import React, { useState } from 'react';
import { Link, useLoaderData, useSubmit } from 'react-router-dom';
import JobList from './JobList';
import SearchJob from './SearchJob';
import JodDetails from './JodDetails';
import { addToDb } from './utils';

const Home = () => {
    const jobData = useLoaderData()
    const [singleCart,setSingleCart]=useState(false)
    const [cart,setCart]=useState([])
    
    const getSingleData=(details,id)=>{
        if(details&&id){
            setCart(details)
            setSingleCart(id)
        }
    }
    const handleCart =(id)=>{
        
            setSingleCart(id)
        
    }
    const storDataToLocal=(id)=>{
        addToDb(id)
    }
    
    return (
        <div>{
            singleCart?<JodDetails cart={cart} handleCart={handleCart} storDataToLocal={storDataToLocal}></JodDetails> :
            <div>
                <div className='grid grid-cols-2 gap-4 mt-20'>
                <div className='md:p-2'>
                    <p className='font-extrabold font-serif text-5xl  text-amber-600'>One Step </p>
                    <p className='font-extrabold font-serif text-5xl  text-amber-600 mt-4'> Closer To Your </p>
                    <p className='font-extrabold font-serif text-5xl text-blue-600  mt-4'>Dream job</p>
                    <p className='my-11'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <Link><button className='btn bg-blue-500 text-white'>Get Started</button></Link>
                </div>
                <img  className='object-cover'  src="https://images.unsplash.com/photo-1589149098258-3e9102cd63d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nJTIwd2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />

            </div>
            <JobList></JobList>
            <SearchJob jobData={jobData} getSingleData={getSingleData}></SearchJob>

  
            </div>
                      
            }
            
        </div>
    );
};

export default Home;
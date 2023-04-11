import React from 'react';
import SingleJob from './SingleJob';

const JobList = () => {
    const jods=[
        {
            icon:<i className="fa-sharp fa-solid fa-bullseye fa-2xl"></i>,
            catagory:'Account & Finance',
            vacancy:'300 Jobs Available',
            id:1
        },
        {
            icon:<i className="fa-solid fa-gear fa-2xl"></i>,
            catagory:'Engineering Job',
            vacancy:'400 Jobs Available',
            id:2
        },
        {
            icon:<i className="fa-solid fa-microchip fa-2xl"></i>,
            catagory:'Creative Design',
            vacancy:'100 Jobs Available',
            id:3
        },
        {
            icon:<i className="fa-solid fa-qrcode fa-2xl"></i>,
            catagory:'Marketing & Sales',
            vacancy:'350 Jobs Available',
            id:4
        }
    ]
    return (
        <div className='mt-16 '>
            <h1 className=' text-3xl font-bold text-amber-600 text-center'>Job Category List</h1>
            <p className='my-4 text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='flex justify-between items-center '>
                {jods.map(job=><SingleJob job={job} key={job.id}></SingleJob>)}
            </div>
        </div>
    );
};

export default JobList;
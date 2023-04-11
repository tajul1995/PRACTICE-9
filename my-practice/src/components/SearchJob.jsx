import React, { useState } from 'react';
import SingleJobAll from './SingleJobAll';



const SearchJob = ({jobData,getSingleData}) => {
     
    
    
    
    return (
        <>
            <div className='grid grid-cols-2 gap-4 mt-20 md:px-48'>
            {
    jobData.map(singleJob=><SingleJobAll singleJob={singleJob} getSingleData={getSingleData}></SingleJobAll>)
            }
            
        </div>
        
        </>
    );
};


    export default SearchJob;
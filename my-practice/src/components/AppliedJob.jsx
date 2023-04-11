import React, { useContext } from 'react';
import { AllJobContext, AppliedJobContext } from './Header';
import Job from './Job';

const AppliedJob = () => {
     const data = localStorage.getItem('shopping-cart')
    const singleData =JSON.parse(data)
    const [job,setJob]=useContext(AppliedJobContext)
    console.log(job)
     const AllData = useContext(AllJobContext) 
     console.log(AllData)
    /* for(let id in singleData){
        let newCart=[]
        const found=AllData.find(data=>data.id===id)
        if(found){
    

        } */
        
    
    return (
        <>
            {
                job.map(singleCart=><Job singleCart={singleCart}></Job>)
            }
        </>
    );
}; 

export default AppliedJob; 
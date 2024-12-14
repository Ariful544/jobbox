import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const viewDetails = useLoaderData();
    const {_id,title,salaryRange,applicationDeadline,requirements,company,company_logo,responsibilities,location,category,description,hr_name} = viewDetails
    return (
        <div className='min-h-screen my-4 '>
            <h3 className='text-2xl font-semibold'>Job Details for {title}</h3>
            <div className='my-4 flex gap-4 items-center'>
                <img className='w-14 h-14' src={company_logo} alt="" />
                <p className='text-2xl'>{company}</p>
            </div>
            <div>
                <p className='text-lg flex items-center gap-2'><span className='font-bold'>Location:</span> <FaLocationDot /> {location}</p>
            </div>
            <div className='my-3'>
                <p className='text-lg flex items-center gap-2'><span className='font-bold'>Category:</span> {category}</p>
            </div>
            <div className='my-3'>
                <p className='text-lg flex items-center gap-2'><span className='font-bold'>description:</span> {description}</p>
            </div>
            <div className='my-3'>
                <p className='text-lg flex items-center gap-2'><span className='font-bold'>HR name:</span> {hr_name}</p>
            </div>
            <div className='my-3'>
                <p className='text-lg flex items-center gap-2'><span className='font-bold'>Responsibilities:</span> {
                    responsibilities.map((responsibility,index) => <li key={index}>{responsibility}</li>)
                }</p>
            </div>
            <div className='my-3'>
                <p className='text-lg flex  gap-2'><span className='font-bold'>Requirements:</span> {
                    requirements.map((requirement,index) => <li key={index}>{requirement}</li>)
                }</p>
            </div>
            <div className='my-3'>
                <p className='text-lg flex items-center gap-2'><span className='font-bold'>Application Deadline:</span> {applicationDeadline}</p>
            </div>
            <div className='my-3'>
                <p className='text-lg flex items-center gap-2'><span className='font-bold'>Salary:</span>  ${salaryRange.min} - {salaryRange.max} {salaryRange.currency.toUpperCase()}</p>
            </div>
           <Link to={`/job-apply/${_id}`}>
           <button className="btn bg-blue-500 text-white hover:bg-blue-600">Apply now</button>
           </Link>
        </div>
    );
};

export default JobDetails;
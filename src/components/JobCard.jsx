import React from 'react';
import { Link } from 'react-router-dom';

const JobCard = ({ singleJob }) => {
    const { _id,company_logo, company, location,salaryRange,title,jobType,description,requirements} = singleJob;
    return (
        <div className="card  duration-150 card-compact bg-base-100 shadow-xl">

            <div className="card-body ">
                <div className='flex items-center gap-6'>
                    <div>
                        <img className='w-14 h-14' src={company_logo} alt="" />
                    </div>
                    <div>
                        <h4 className='text-xl font-medium text-slate-700'>{company}</h4>
                        <p className='text-base'>{location}</p>
                    </div>
                </div>
                <div className='mt-4'>
                    <p className='text-lg font-medium'>{title}</p>
                    <div>
                        <p className='text-base text-slate-500'>{jobType}</p>
                    </div>
                </div>
                <div className='my-6'>
                    <p>{description}</p>
                </div>
                <div className='flex gap-2 flex-wrap'>
                    {
                        requirements.map((requirement,index) => <button key={index} className='border rounded-md text-center px-2'>{requirement}</button>)
                    }
                </div>
                <div className='mt-4 card-actions justify-end items-center '>
                    <p className='text-base text-sky-800 font-medium'>Salary: ${salaryRange.min} - {salaryRange.max} {salaryRange.currency.toUpperCase()}</p>
                    <Link to={`/job-details/${_id}`} className="btn bg-blue-500 text-white hover:bg-blue-600">Apply</Link>
                </div>
            </div>
        </div>
    );
};

export default JobCard;
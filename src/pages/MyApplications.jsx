import React, { useEffect, useState } from 'react';
import UserAuth from '../hooks/UserAuth';
import { ul } from 'motion/react-client';

const MyApplications = () => {
    const { user } = UserAuth();
    const email = user.email;
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/job-application?email=${email}`)
            .then(res => res.json())
            .then(data => {
                setJobs(data);
            })
    }, [email])

    return (
        <div>
            <h3>My applications: {jobs.length} </h3>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            jobs.map(job => <>
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={job.company_logo}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{job.hr_name}</div>
                                                <div className="text-sm opacity-50">{job.location}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {job.title}
                                        <br />
                                        <span className="badge badge-ghost badge-sm">{
                                            job.requirements.map((req,index) => {
                                                return (
                                                    <ul>
                                                        <li className='mr-3' key={index}>{req}</li>
                                                    </ul>
                                                )
                                            })
                                        }</span>
                                    </td>
                                    <td>Purple</td>
                                    <th>
                                        <button className="btn btn-error text-white btn-xs">Delete</button>
                                    </th>
                                </tr>
                            </>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyApplications;
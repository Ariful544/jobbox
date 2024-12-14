import React from 'react';
import UserAuth from '../hooks/UserAuth';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const JobApply = () => {
    const {id} = useParams();
    const { user } = UserAuth();
    
    const handleApplyJobForm = (e)=>{
        e.preventDefault();
        const form = e.target;
        const githubLink = form.githubLink.value;
        const linkedinLink = form.linkedinLink.value;
        const resumeLink = form.resumeLink.value;
        const jobApplication = {
            job_id: id,
            application_email: user.email,
            githubLink,
            linkedinLink,
            resumeLink
        }
        fetch("http://localhost:3000/job-application",{
            method: 'POST',
            headers: {
                'content-type': "application/json",
            },
            body: JSON.stringify(jobApplication),
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    title: "Success",
                    text: "You have successfully apply the job application",
                    icon: "success",
                })
                form.reset();
            }
        })

    }
    return (
        <div className=" mt-10">
            <div className='w-full text-center'>
                <h1 className="text-5xl font-bold">Apply your dream job now!</h1>
            </div>
            <form onSubmit={handleApplyJobForm} className="w-full">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Github Link</span>
                    </label>
                    <input type="url" name='githubLink' placeholder="github link" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Linkedin Link</span>
                    </label>
                    <input type="url" name='linkedinLink' placeholder="linkedin link" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Resume Link</span>
                    </label>
                    <input type="url" name='resumeLink' placeholder="Resume link" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-blue-500 hover:bg-blue-600 text-white">Apply now</button>
                </div>
            </form>
        </div>
    );
};

export default JobApply;
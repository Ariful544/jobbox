import React from 'react';
import Banner from '../components/Banner';
import JobCard from '../components/JobCard';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const jobLoader = useLoaderData();
    return (
        <div>
            <header>
                <Banner />
            </header>
            <main>
                <section className='min-h-screen'>
                    <div className='text-center space-y-4'>
                        <h2 className='text-slate-950 text-5xl font-bold'>Jobs of the day</h2>
                        <p className='text-sky-950 text-xl'>Search and connect with the right candidates faster.</p>
                    </div>
                    <div className='grid my-14 md:grid-cols-3 grid-cols-1 gap-4'>
                        {
                            jobLoader.map(singleJob => <JobCard key={singleJob._id} singleJob={singleJob}/>)
                        }
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Home;
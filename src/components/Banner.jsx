import { motion } from "motion/react"
import team1 from '../assets/team/team1.jpg'
import team2 from '../assets/team/team2.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="flex items-center justify-center md:flex-row flex-col-reverse max-w-screen-lg mx-auto  gap-20 md:gap-40">
                <div className="text-center md:text-left">
                    <motion.h1
                        animate={{ x: 50 }}
                        transition={{ duration: 2, delay: 1, ease: "easeInOut", repeat: Infinity }}
                        className="md:text-5xl text-3xl -mt-50 text-sky-950 font-bold">
                        The <span className='text-blue-500 font-extrabold'>Easiest Way<br></br></span> to Get Your New Job
                    </motion.h1>
                    <p className="py-6 text-xl text-sky-900">
                        Each month, more than 3 million job seekers turn to
                        website in their search for work, making over 140,000
                        applications every single day
                    </p>
                    <button className="btn bg-blue-500 text-white">Get Started</button>
                </div>
                <div className='flex flex-col gap-4'>
                    <motion.img
                        src={team1}
                        animate={{ y: [0, 50, 0] }}
                        transition={{ repeat: Infinity, duration: 10 }}
                        className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4  border-b-4 shadow-2xl border-blue-400" />
                    <motion.img
                        src={team2}
                        animate={{ x: [100, 150, 100] }}
                        transition={{ repeat: Infinity, duration: 10 }}
                        className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-400 shadow-2xl" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
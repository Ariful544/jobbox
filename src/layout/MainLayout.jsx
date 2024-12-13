import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <header>
                <nav>
                    <Navbar />
                </nav>
            </header>
            <main className='min-h-screen '>
                <Outlet />
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default MainLayout;
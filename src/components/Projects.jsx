import React from 'react';
import ProjectItem from './ProjectItem';
import YelpcampImg from '../assets/Yelpcamp.jpg';
import MxImg from '../assets/Mx.jpg';
import TailoredImg from '../assets/Tailored.jpg';

const Projects = () => {
    return (
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
            <p className='text-center py-8'>
                Check out my projects! I have easy-to-use apps to strong back-end systems, I aim to create solutions that work well and meet real needs.
            </p>
            <div className='grid sm:grid-cols-2 gap-12'>
                <ProjectItem title='YelpCamp' img={YelpcampImg} />
                <ProjectItem title='Marathon Xtreme' img={MxImg} />
                <ProjectItem title='Tailored' img={TailoredImg} />
            </div>
        </div>
    )
}

export default Projects;

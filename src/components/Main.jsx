import React from 'react';
import { TypeAnimation } from 'react-type-animation';
// import { FaTwitter, FaFacebookF, FaInstagram, } from 'react-icons/fa';

const Main = () => {
    return (
        <div id='main'>
            <img className='w-full h-screen object-cover object-left scale-x-[-1]' src='https://plus.unsplash.com/premium_photo-1661963874418-df1110ee39c1?q=80&w=1386&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='/' />
            <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items:start items-center'>
                    <div>
                        <h1 className='sm:text-5xl text-4xl font-bold text-gray-700'>Hi, I'm Elijah!</h1>

                        <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
                            I'm a
                            <TypeAnimation
                                sequence={[
                                    2000, // wait 1s before replacing "Mice" with "Hamsters"
                                    'Developer',
                                    2000,
                                    'Athlete',
                                    2000,
                                    'Coder',
                                    2000,
                                ]}
                                wrapper='div'
                                speed={50}
                                cursor={true}
                                repeat={Infinity}
                                style={{ fontSize: '1em', paddingLeft: '5px' }} />
                        </h2>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;

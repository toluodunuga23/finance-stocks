import React from 'react'
import { useNavigate } from "react-router-dom";


const Hero = () => {
    const navigate = useNavigate();

    return (
        <div className='flex flex-col items-center text-center mt-20  '>
            <div>
                <h1 className="text-6xl">
                    Take Control of Your <span className="text-emerald-500">Money</span>
                </h1>
                <p className='mt-5'>
                    Personal budgeting, investing & Stocks in an all in one app. Start your journey today.
                </p>
            </div>

            <a href="#" className="bg-gradient-to-r from-emerald-400  to-emerald-900  py-2 px-3 rounded-md mt-12 w-80" onClick={()=>navigate('/dashboard')} >
                Get Started
            </a>


        </div>


    )
}

export default Hero

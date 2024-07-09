import React from 'react'
import whattxt from '../assets/whattxt.svg'
import buybtn from '../assets/buybtn.svg'
import leftdog from '../assets/leftdog.svg'

function About() {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='bg-[#FFD401] flex flex-col justify-center items-center rounded-[160px]'>
                <img src={whattxt} alt="" />
                <div className="divide flex flex-col lg:flex-row">
                    <div className="left">
                        <img src={leftdog} alt="" />

                    </div>
                    <div className="right">
                        <img src={buybtn} alt="" />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
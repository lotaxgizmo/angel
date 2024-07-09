import React from 'react'
import twitterbtn from '../assets/twitterbtn.svg'
import angelbot from '../assets/angelbot.svg'
import telegrambtn from '../assets/telegrambtn.svg'

function Footer() {
    return (
        <>
            <div className='flex lg:flex-row flex-col items-center justify-between relative px-4 lg:px-24 bg-[#1FAAEF]'>
                <img src={angelbot} alt="" />

                <div className=" hidden lg:flex links flex-col lg:flex-row">
                    <a href="#about"><p className='text-2xl mx-4'>ABOUT</p></a>
                    <a href="#agenomics"><p className='text-2xl mx-4'>ANGENOMICS</p></a>
                    <a href="#community"><p className='text-2xl mx-4'>COMMUNITY</p></a>
                </div>

                <div className="btns flex  flex-row">
                    <img src={telegrambtn} alt="" className='m-3' />
                    <img src={twitterbtn} alt="" className='m-3' />
                </div>
            </div>
            <div className='flex lg:flex-row flex-col items-center justify-center bg-black text-white h-28 relative px-4 lg:px-24'>

                <p className='text-2xl mx-4 text-center'>© 2024 ANGEL WIF. ALL RIGHT RESERVED</p>

            </div>

        </>
    )
}

export default Footer
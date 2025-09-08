import React from 'react'
import skillBackground from "../assets/img/skillBackground.png"
import SkillContainerGlobe from './SkillContainerGlobe';
import rectangle from "../assets/img/Rectangle 1.svg"
import Social from './Social';
import SkillsList from './SkillsList';
const SkillContainer = () => {
    return (
        <div
            className="w-screen h-screen relative bg-black"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${skillBackground})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
            }}
        >
            <div className='absolute inset-0 mx-auto mt-10 w-1/2 text-[#CEB7FF] font-death-star flex flex-col items-center text-nowrap gap-8'>
                <div className="flex flex-col items-center">
                    <div>
                        <img src={rectangle} className="h-5" alt='react' />
                    </div>
                    <h1 className='font-outline text-[42px] text-glow font-black'>My SKILLS</h1>
                    <div>
                        <img src={rectangle} className="h-5" alt='react' />
                    </div>
                </div>
                <span className="text-3xl text-[#d0b4f5] font-bebas-neue text-glow ">Here is a list of some of my skills </span>
            </div>
            <SkillContainerGlobe />
            <Social />
            <SkillsList/>
        </div>
    )
}

export default SkillContainer;
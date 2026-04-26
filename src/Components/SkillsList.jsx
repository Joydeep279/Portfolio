import { skillSet } from "../utils/contants"
const SkillsList = () => {
    return (
        <div className="absolute top-2/3 left-[15%] sm:left-[20%] md:left-[30%] -translate-y-1/2 z-50 w-[70%] sm:w-[60%] md:w-[45%] flex flex-row-reverse flex-wrap justify-end gap-2 sm:gap-3 md:gap-5">
            {
                skillSet.map((skill, index) => <span className="backdrop-brightness-75 pt-1.5 sm:pt-2 md:pt-2.5 font-mono text-white text-xs sm:text-lg md:text-2xl font-thin border-2 border-[#CEB7FF] text-center w-20 h-10 sm:w-28 sm:h-12 md:w-36 md:h-14 transition-all duration-300 hover:scale-110 hover:border-white hover:backdrop-brightness-125 hover:shadow-lg hover:shadow-[#CEB7FF]/50 cursor-pointer" key={index}>{skill}</span>)
            }

        </div>



    )
}

export default SkillsList
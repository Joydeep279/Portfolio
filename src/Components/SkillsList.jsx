import { skillSet } from "../utils/contants"
const SkillsList = () => {
    return (
        <div className="absolute top-3/5 left-[30%] -translate-y-1/2 z-50 w-[45%] flex flex-row flex-wrap gap-5">
            {
                skillSet.map((skill, index) => <span className="backdrop-brightness-75 pt-2.5 font-mono text-white text-2xl font-thin border-2 border-[#CEB7FF] text-center w-36 h-14" key={index}>{skill}</span>)
            }

        </div>



    )
}

export default SkillsList
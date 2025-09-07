import globe from "../assets/img/globe.png"
import astronaut from "../assets/img/skillastronaut.svg"

const SkillContainerGlobe = () => {

    return (
        <div className="absolute bottom-0 left-[49%] -translate-x-1/2 w-[90vw] flex justify-center items-end">
            <img src={astronaut} className="absolute bottom-11/12 z-50 h-24" alt="astronaut" />


            <img src={globe} alt="globe" className="relative w-3/4 h-full" />

        </div>


    )
}

export default SkillContainerGlobe
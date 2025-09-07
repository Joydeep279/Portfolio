import globe from "../assets/img/globe.png"
import astronaut from "../assets/img/astronaut.svg"
import BoxClose from "../assets/img/BoxClose.svg"
import BoxOpen from "../assets/img/BoxOpen.svg"
import { useState } from "react"

const Globe = () => {
    const [isBoxOpen, setIsBoxOpen] = useState(false);
    function toggleBox() {
        setIsBoxOpen(!isBoxOpen)
    }
    return (
        <div className="absolute bottom-0 left-[49%] -translate-x-1/2 w-[90vw] flex justify-center items-end">
            <img src={astronaut} className="absolute bottom-11/12 z-50 h-24" alt="astronaut" />
            {
                !isBoxOpen ? <img src={BoxClose} className="absolute bottom-20 z-50 w-40 h-40 left-[45%] cursor-pointer" onClick={() => toggleBox()} alt="BoxClose" /> :

                    <div className="absolute bottom-20 left-[35%] z-50 w-[35%] cursor-pointer" onClick={() => toggleBox()}>

                        <img src={BoxOpen} alt="BoxOpen" className="w-full" />
                        <span className="p-5 absolute inset-0 flex items-start justify-center text-white font-mono text-xl font-medium">
                            testing the website
                        </span>
                    </div>
            }

            <img src={globe} alt="globe" className="relative w-3/4 h-full" />

        </div>


    )
}

export default Globe
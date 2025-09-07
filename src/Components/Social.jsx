import github from "../assets/img/github.svg"
import instagram from "../assets/img/instagram.svg"
import linkedin from "../assets/img/linkedin.svg"

const Social = () => {
    return (
        <div className="fixed top-1/2 left-10 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-5 z-[100]">
            <a className="w-8 h-8" href="https://github.com/Joydeep279" target="blank">
                <img src={github} />
            </a>
            <a className="w-8 h-8" href="">
                <img src={instagram} />
            </a>
            <a className="w-8 h-8" href="https://www.linkedin.com/in/joydeep-nath007" target="blank">
                <img src={linkedin} />
            </a>
        </div>
    )
}

export default Social
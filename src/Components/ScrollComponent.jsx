import ScrollImg from "../assets/img/scroll.svg"

const ScrollComponent = () => {
    return (
        <div className="fixed right-10 bottom-10 text-white font-Bebas Neue font-semibold text-3xl z-[100]">
            <img src={ScrollImg} alt="ScrollImg" className="h-28 w-16" />
        </div>
    )
}

export default ScrollComponent
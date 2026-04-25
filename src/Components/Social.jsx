import github from "../assets/img/github.svg";
import instagram from "../assets/img/instagram.svg";
import linkedin from "../assets/img/linkedin.svg";

const Social = () => {
  return (
    <div className="absolute top-1/2 left-2 sm:left-4 md:left-10 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-3 sm:gap-4 md:gap-5 z-[100]">
      <a
        className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
        href="https://github.com/Joydeep279"
        target="blank">
        <img src={github} />
      </a>
      <a className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" href="">
        <img src={instagram} />
      </a>
      <a
        className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
        href="https://www.linkedin.com/in/joydeep-nath007"
        target="blank">
        <img src={linkedin} />
      </a>
    </div>
  );
};

export default Social;

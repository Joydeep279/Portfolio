import skillBackground from "../assets/img/skillBackground.png";
import SkillContainerGlobe from "./SkillContainerGlobe";
import rectangle from "../assets/img/Rectangle 1.svg";
import Social from "./Social";
import SkillsList from "./SkillsList";
const SkillContainer = () => {
  return (
    <div
      className="w-screen h-screen relative bg-black p-0 m-0"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${skillBackground})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}>
      <div className="absolute inset-0 mx-auto mt-6 sm:mt-8 md:mt-10 w-4/5 sm:w-3/4 md:w-1/2 text-[#CEB7FF] font-death-star flex flex-col items-center text-nowrap gap-4 sm:gap-6 md:gap-8">
        <div className="flex flex-col items-center">
          <div>
            <img src={rectangle} className="h-3 sm:h-4 md:h-5" alt="react" />
          </div>
          <h1 className="font-outline text-lg sm:text-2xl md:text-[42px] text-glow font-black">
            My SKILLS
          </h1>
          <div>
            <img src={rectangle} className="h-3 sm:h-4 md:h-5" alt="react" />
          </div>
        </div>
        <span className="text-lg sm:text-xl md:text-3xl text-[#d0b4f5] font-bebas-neue text-glow ">
          Here is a list of some of my skills{" "}
        </span>
      </div>
      <SkillContainerGlobe />
      {/* <Social /> */}
      <SkillsList />
    </div>
  );
};

export default SkillContainer;

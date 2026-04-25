import rectangle from "../assets/img/Rectangle 1.svg";
const Heading = () => {
  return (
    <div className="absolute inset-0 mx-auto mt-6 sm:mt-8 md:mt-10 w-4/5 sm:w-3/4 md:w-1/2 text-[#CEB7FF] font-death-star flex flex-col items-center text-nowrap gap-4 sm:gap-6 md:gap-8">
      <div className="flex flex-col">
        <div className="flex">
          <img src={rectangle} className="h-3 sm:h-4 md:h-5" alt="react" />
          <span className="font-medium text-xs sm:text-sm w-/5">
            a message from earth{" "}
          </span>
        </div>
        <h1 className="font-outline text-lg sm:text-2xl md:text-[42px] text-glow font-black">
          hello fellow galaxy member
        </h1>
        <div className="flex">
          <span className="font-medium text-xs sm:text-sm">a message from earth </span>
          <img src={rectangle} className="h-3 sm:h-4 md:h-5" alt="react" />
        </div>
      </div>
      <h1 className="font-outline text-lg sm:text-2xl md:text-[42px] text-glow">i am joydeep</h1>
    </div>
  );
};

export default Heading;

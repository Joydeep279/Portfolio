import ContactBackground from "../assets/img/ContactBackground.png";
import rectangle from "../assets/img/Rectangle 1.svg";
import EmailComponent from "./EmailComponent";
const ContactComponent = () => {
  return (
    <div
      className="w-screen h-screen"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${ContactBackground})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}>
      <div className="flex flex-col items-center pt-20">
        <div>
          <img src={rectangle} className="h-3 sm:h-4 md:h-5" alt="react" />
        </div>
        <h1 className="font-outline font-out text-lg sm:text-2xl md:text-[42px] text-glow font-black">
          CONTACT ME
        </h1>
        <div>
          <img src={rectangle} className="h-3 sm:h-4 md:h-5" alt="react" />
        </div>
        <EmailComponent/>
      </div>
    </div>
  );
};
export default ContactComponent;

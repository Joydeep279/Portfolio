import ContactBackground from "../assets/img/ContactBackground.png"
import rectangle from "../assets/img/Rectangle 1.svg";
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
        <img src={rectangle}/>
        <img src={rectangle}/>

      </div>
  );
};
export default ContactComponent;

import homeBg from "../assets/img/homeBg.png";
import Globe from "./Globe";
import Heading from "./Header";

const Home = () => {
  return (
    <div
      className="w-screen h-screen"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${homeBg})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
      }}
    >
      <Heading />
      <Globe />
    </div>

  );
};

export default Home;

import homeBg from "../assets/img/homeBg.png";
import Globe from "./Globe";
import Heading from "./Header";

const Home = () => {
  return (
    <div
      className="w-screen h-screen"
      style={{
        backgroundImage: `url(${homeBg})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
      }}
    >
      <Heading />
      <Globe/>
    </div>

  );
};

export default Home;

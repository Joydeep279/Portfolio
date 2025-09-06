import { createRoot } from "react-dom/client";
import MainHome from "./Components/Home.jsx";
import Social from "./Components/Social.jsx";
const App = () => {
  return (
    <div>
      <div className="absolute right-10 top-10 text-white font-Bebas Neue font-bold text-3xl">Contact Me</div>
      <Social />
      <MainHome />
    </div>
  );
};

createRoot(document.getElementById("root")).render(<App />);

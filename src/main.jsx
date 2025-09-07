import { createRoot } from "react-dom/client";
import MainHome from "./Components/Home.jsx";
import Social from "./Components/Social.jsx";
import SkillContainer from "./Components/SkillContainer.jsx";
import Contact from "./Components/Contact.jsx";
const App = () => {
  return (
    <div>
      <Social />
      <Contact />
      <MainHome />
      <SkillContainer />
    </div>
  );
};

createRoot(document.getElementById("root")).render(<App />);

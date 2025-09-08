import { createRoot } from "react-dom/client";
import MainHome from "./Components/Home.jsx";
import SkillContainer from "./Components/SkillContainer.jsx";
import Contact from "./Components/Contact.jsx";
import ScrollComponent from "./Components/ScrollComponent.jsx";
const App = () => {
  return (
    <div>
      <Contact />
      <ScrollComponent/>
      <MainHome />
      <SkillContainer />
    </div>
  );
};

createRoot(document.getElementById("root")).render(<App />);

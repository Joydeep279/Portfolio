import { createRoot } from "react-dom/client";
import MainHome from "./Components/Home.jsx";
import SkillContainer from "./Components/SkillContainer.jsx";
import Contact from "./Components/Contact.jsx";
import ScrollComponent from "./Components/ScrollComponent.jsx";
import ContantComponent from "./Components/ContactComponent.jsx";
import ContactComponent from "./Components/ContactComponent.jsx";
const App = () => {
  return (
    <div>
      <Contact />
      <MainHome />
      <ScrollComponent />
      <SkillContainer />
      <ContactComponent />
    </div>
  );
};

createRoot(document.getElementById("root")).render(<App />);

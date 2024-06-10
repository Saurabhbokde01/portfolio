import Navbar from "./Components/Navbar/navbar";
import Intro from "./Components/Intro/intro";
import Skills from "./Components/Skills/skills";
import Works from "./Components/Works/works";
import Projects from "./Components/Projects/projects";
import Contact from "./Components/Contact/contact";
import Footer from "./Components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

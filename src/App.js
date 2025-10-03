import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import ProfileImg from "./components/ProfileImg";
import About from "./components/About";
import Projects from "./components/Projects";

import "./App.css";

function App() {
  return (
    <div class="wrap">
      <div class="grid">
        <div class="header">
          <Navbar />
        </div>

        <div class="main">
          <Hero />
        </div>

        <div class="center">
          <ProfileImg />
        </div>

        <div class="sidebar">
          <Projects />
        </div>

        <div class="box box1">
          <About />
        </div>

        <div class="box box2">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;

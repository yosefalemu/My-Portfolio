import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
import Parallax from "./Components/Parallax/Parallax";
import Services from "./Components/Services/Services";
import Portfolio from "./Components/Portfolio/Portfolio";
import About from "./Components/About/About";
import "./app.scss";

function App() {
  return (
    <>
      <section id="Homepage">
        <NavBar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <section>
        <Portfolio />
      </section>
      <section id="About">
        <About />
      </section>
      <section id="Contact">Contact</section>
    </>
  );
}

export default App;

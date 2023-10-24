import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
import "./app.scss";

function App() {
  return (
    <>
      <section id="Homepage">
        <NavBar />
        <Hero />
      </section>
      <section id="Services">Services</section>
      <section id="Portfolio">Portfolio</section>
      <section id="Contact">Contact</section>
      <section id="About">About</section>
    </>
  );
}

export default App;

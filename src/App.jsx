import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Process from "./components/Process";
import Projects from "./components/Projects";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Projects />
        <WhyUs />
        <Testimonials />
        <CTA />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
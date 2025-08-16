import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Lightbox from "./components/Lightbox";
import CompanyStats from "./components/CompanyStats";
import CompanySlider from "./components/CompanySlider";

function App() {
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    imageSrc: "",
    imageAlt: "",
    imageId: "",
  });

  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    // Observe all fade-in elements
    const fadeElements = document.querySelectorAll(".fade-in");
    fadeElements.forEach((el) => observer.observe(el));

    // Cleanup
    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const openLightbox = (imageId, imageSrc, imageAlt) => {
    setLightbox({
      isOpen: true,
      imageSrc,
      imageAlt,
      imageId,
    });
  };

  const closeLightbox = () => {
    setLightbox((prev) => ({
      ...prev,
      isOpen: false,
    }));
  };

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <CompanyStats />

      <Services />
      <Projects onOpenLightbox={openLightbox} />
      <CompanySlider />

      <Gallery onOpenLightbox={openLightbox} />

      <Testimonials />

      <Contact />
      <Footer />
      <Lightbox lightbox={lightbox} onClose={closeLightbox} />
    </div>
  );
}

export default App;

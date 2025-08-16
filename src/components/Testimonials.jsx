import { useState, useEffect } from "react";
import "../styles/testimonials.css";

import testi1 from "../assets/Testimonial/testi1.jpg";
import testi2 from "../assets/Testimonial/testi2.jpg";
import testi3 from "../assets/Testimonial/testi3.jpg";
import testi4 from "../assets/Testimonial/testi4.jpg";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Mohammad Shahnawaz",
      role: " TeleIndia",
      image: testi1,
      testimonial:
        "BN Electricals combines expertise with reliability. Their team ensures every project is completed with precision, and their attention to safety and detail is truly commendable.",
    },
    {
      id: 2,
      name: "Vikash kumar",
      role: " RPP Electrical",
      image: testi2,
      testimonial:
        "The professionalism of BN Electricals stands out. From consultation to execution, they deliver seamless service, clear communication, and excellent workmanship.",
    },
    {
      id: 3,
      name: "Mohd Nayab",
      role: " RPP Electrical",
      image: testi3,
      testimonial:
        "Whenever we needed quick solutions, BN Electricals was always there. Their transparent pricing and dependable support make them a trusted partner for all our electrical needs.",
    },
    {
      id: 4,
      name: "Mohammad Nematullah",
      role: " Azam Electrical",
      image: testi4,
      testimonial:
        "BN Electricals consistently delivers reliable and professional service. Their team responds quickly to emergencies, and their transparent pricing makes them a trusted choice for all our electrical needs.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="testimonials" className="testimonials section-padding">
      <div className="container">
        <div className="section-title fade-in">
          <h2>Testimonials</h2>
        </div>

        <div className="testimonials-carousel">
          <div className="testimonials-wrapper">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial-slide ${
                  index === currentSlide ? "active" : ""
                } fade-in`}
              >
                <div className="testimonial-content">
                  <i className="fas fa-quote-left quote-icon"></i>
                  <p className="testimonial-text">{testimonial.testimonial}</p>
                  <div className="testimonial-author">
                    <img
                      src={testimonial.image}
                      alt={`${testimonial.name} testimonial`}
                      loading="lazy"
                    />
                    <div className="author-info">
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="carousel-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? "active" : ""}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

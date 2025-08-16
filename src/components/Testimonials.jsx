import { useState, useEffect } from "react";
import "../styles/testimonials.css";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Jennifer Martinez",
      role: "Property Manager, Downtown Complex",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
      testimonial:
        "BN Electricals transformed our entire office electrical system. Their professionalism and attention to detail exceeded our expectations. The team was punctual, efficient, and delivered exceptional results.",
    },
    {
      id: 2,
      name: "Robert Thompson",
      role: "Operations Director, Manufacturing Corp",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
      testimonial:
        "Outstanding service from start to finish. BN Electricals handled our industrial power upgrade with expertise and minimal downtime. Their 30+ years of experience really shows in their work quality.",
    },
    {
      id: 3,
      name: "Lisa Chen",
      role: "Facility Manager, Residential Complex",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616c0763c84?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
      testimonial:
        "Reliable, professional, and cost-effective. BN Electricals has been our go-to electrical contractor for over 5 years. Their emergency response is exceptional, and their pricing is always fair and transparent.",
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

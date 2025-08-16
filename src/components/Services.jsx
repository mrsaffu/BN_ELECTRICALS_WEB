import '../styles/services.css';
import Maintenance from "../assets/maintainance.jpg"
import recindatial from "..//assets/recidential.jpg"
import commerical from "..//assets/comerical.jpg"
import industrial from "../assets/industrial.jpg"

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Maintenance',
      description: 'Maintain and improve your current electrical lighting and outlets. On the spot, cost-effective solutions for your home.',
      image: Maintenance,
      alt: 'Electrical maintenance van'
    },
    {
      id: 2,
      title: 'Residential Electrician',
      description: 'Luxury Homes, apartment complexes, and mixed-use developments. Contract Electrical covers all your needs.',
      image:recindatial,
      alt: 'Luxury residential electrical interior'
    },
    {
      id: 3,
      title: 'Commercial Electrician',
      description: 'Carpark lighting, public spaces, and electrical installations for your company. Work towards a brighter future in your business.',
      image:commerical,
      alt: 'Modern commercial building exterior'
    },
    {
      id: 4,
      title: 'Industrial Solutions',
      description: 'Complex industrial electrical systems and high-voltage installations. Specialized solutions for manufacturing and industrial facilities.',
      image: industrial,
      alt: 'Industrial electrical installations'
    }
  ];

  return (
    <section id="services" className="services section-padding">
      <div className="container">
        <div className="section-title fade-in">
          <h2>Our Services</h2>
        </div>
        
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card fade-in">
              <div className="service-image">
                <img src={service.image} alt={service.alt} loading="lazy" />
              </div>
              <div className="service-content">
                <div className="service-accent-line"></div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#contact" className="read-more-link">
                  read more
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

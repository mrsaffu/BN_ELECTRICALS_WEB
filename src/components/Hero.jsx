import '../styles/hero.css';
import logo from "../assets/logo.png"
const Hero = () => {
  const handleCallNow = () => {
    // Clean phone number format for tel: links
    const phoneNumber = 'tel:+918971942796'; // Australian format
    window.location.href = phoneNumber;
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background"></div>
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <div className="container">

          <h1 className="hero-title fade-in"><img className='navLogo' src={logo} alt="" /> Electricals</h1>
          <h2 className="hero-subtitle fade-in">Electrical Contractors & Engineers</h2>
          
          <div className="hero-features fade-in">
            <div className="feature-item">
              <i className="fas fa-check-circle"></i>
              <span>Licensed Electrical Engineers</span>
            </div>
            <div className="feature-item">
              <i className="fas fa-check-circle"></i>
              <span>Urgent Pricing & Estimations</span>
            </div>
            <div className="feature-item">
              <i className="fas fa-check-circle"></i>
              <span>Delivering Reliable Solutions with Proven Results</span>
            </div>
            <div className="feature-item">
              <i className="fas fa-check-circle"></i>
              <span>Residential, Commercial & Industrial Electrical Solutions</span>
            </div>
          </div>
          
          <button className="btn-primary hero-cta fade-in" onClick={handleCallNow}>
            <i className="fas fa-phone"></i>
            Call Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

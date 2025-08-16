import { useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || "N/A",
      service: formData.service || "General",
      message: formData.message,
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      alert("Thank you! Your message has been sent.");
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    } catch (error) {
      console.error("FAILED...", error);
      alert(" Sorry, the email could not be sent. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        <div className="section-title fade-in">
          <h2>Contact Us</h2>
        </div>

        <div className="contact-content">
          {/* Contact Info */}
          <div className="contact-info fade-in">
            <h3>Get In Touch</h3>
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-text">
                  <h4>Address</h4>
                  <p>
                    NO101 Nanjappa Colony Block A, Bengaluru Karnataka 560045,
                    India
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="contact-text">
                  <h4>Phone</h4>
                  <p>
                    <a href="tel:+918789819522" className="phone-link">
                      +91 87898 19522
                    </a>
                  </p>
                  <p>
                    <a href="tel:+918971942796" className="phone-link">
                      +91 98705 28091
                    </a>
                  </p>
                    <p>
                    <a href="tel:+918971942796" className="phone-link">
                      +91 89719 42796
                    </a>
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <p>
                    <a
                      href="mailto:bnelectrical178@gmail.com"
                      className="email-link"
                    >
                      bnelectrical178@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="contact-text">
                  <h4>Business Hours</h4>
                  <p>
                    Mon-Sat: 10:00 AM - 6:00 PM
                    <br />
                    24/7 Emergency Service Available
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper fade-in">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="service">Service Required</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                >
                  <option value="">Select a service</option>
                  <option value="residential">Residential Electrical</option>
                  <option value="commercial">Commercial Electrical</option>
                  <option value="industrial">Industrial Solutions</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="emergency">Emergency Service</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn-primary form-submit"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
             {/* Google Map */}
        <div className="map-container fade-in">
          <iframe
            title="BN Electricals Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.030069722863!2d77.6321195!3d12.905788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15bb813895d5%3A0xf5135b6a77142071!2sBN%20Electrical%20ptv!5e0!3m2!1sen!2sin!4v1755372316125!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0, borderRadius: "10px", marginTop: "2rem" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

        </div>
      </div>
    </section>
  );
};

export default Contact;

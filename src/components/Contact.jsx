import { useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";

// Yahan apne EmailJS ke IDs paste karo
const SERVICE_ID = "service_8tmf3qe"; // <-- EmailJS Service ID
const TEMPLATE_ID = "template_ktrhqwu"; // <-- EmailJS Template ID
const PUBLIC_KEY = "2Z9ctaT2U4P-Z1-Z8"; // <-- EmailJS Public Key

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
      alert("❌ Sorry, the email could not be sent. Please try again later.");
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
                    Mon-Fri: 7:00 AM - 6:00 PM
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
      </div>
    </section>
  );
};

export default Contact;

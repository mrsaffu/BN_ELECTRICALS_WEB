import "../styles/about.css";
import ceo from "../assets/CEO.jpg";
import director from "../assets/director.jpg";
import supervisor from "../assets/superviser.jpg";
import site_eng from "../assets/sit-eng.jpg";
import serv1 from "../assets/service1.webp";
const About = () => {
  const teamMembers = [
    {
      id: 1,

      name: "Mohammad Barkat",
      role: "Director",
      image: director,
      sub:"Visionary Leadership & Strategic Growth",
      description:
        "Guiding the company’s growth with strategic foresight, Mohammad Barkat ensures that every project reflects BN Electricals’ core values of safety, precision, and client satisfaction.",
    },
    {
      id: 2,
      name: "Mohammad Naushad",
      role: "Chief Executive Officer",
      image: ceo,
      sub:"Driving Excellence & Client Success",
      description:
        "A visionary leader, Mohammad Naushad is the driving force behind BN Electricals. With a passion for delivering innovative electrical solutions, he ensures every client experiences unmatched quality, reliability, and service excellence.",
    },
    {
      id: 3,
      name: "Md Enayat",
      role: "Project Engineer",
      sub:"Ensuring Precision & On-Site Quality",
      image: site_eng,
      description:
        "The backbone of our on-site execution, Md Enayat combines deep technical expertise with meticulous attention to detail, guaranteeing flawless installations that stand the test of time.",
    },
    {
      id: 4,

      name: "Md Tufail",
      role: "Supervisor",
      image: supervisor,
      sub:"Operational Efficiency & Team Coordination",
      description:
        "A master at coordinating people and processes, Md Tufail ensures projects run smoothly, efficiently, and to the highest safety standards — from start to finish.",
    },
  ];

  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <div className="section-title fade-in">
          <h2>What We Do</h2>
        </div>

        <div className="about-content">
          <div className="about-text fade-in">
            <p>
              BN Electricals is a leading electrical contracting company
              providing comprehensive electrical solutions across residential,
              commercial, and industrial sectors. We deliver reliable, safe, and
              efficient electrical services that meet the highest standards with
              a strong focus on quality and innovation.
            </p>
            <p>
              Our team of licensed electrical engineers and certified
              technicians are committed to excellence in every project, from
              emergency repairs to large-scale electrical installations. We
              pride ourselves on our rapid response times, competitive pricing,
              and unwavering commitment to safety.
            </p>
            <p>
              Whether you need routine maintenance, complex industrial
              installations, or emergency electrical services, BN Electricals
              has the expertise and resources to deliver exceptional results
              that exceed your expectations.
            </p>
          </div>

          <div className="about-image fade-in">
            <img
              src={serv1}
              alt="Professional electrical team working"
              loading="lazy"
            />
          </div>
        </div>

        <div className="team-section">
          <div className="team-title fade-in">
            <h3>Our Leadership Team</h3>
          </div>

          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="profile-card fade-in">
                <div className="profile-card-inner">
                  <div className="profile-card-front">
                    <div className="member-image">
                      <img
                        src={member.image}
                        alt={`${member.name} Profile`}
                        loading="lazy"
                      />
                    </div>
                    <h4>{member.name}</h4>
                    <p className="member-role">{member.role}</p>
                    <p className="member-preview">
                   {member.sub}
                    </p>
                  </div>
                  <div className="profile-card-back">
                    <div className="card-back-content">
                      <h4>{member.name}</h4>
                      <p>{member.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import styled, { keyframes } from "styled-components";

// Your logo file (replace with your path or import)
import companyLogo01 from "../assets/rpp.jpg"
import companyLogo02 from "../assets/comp.png"
// import companyLogo03 from "../assets/indicube.jpeg"
import companyLogo03 from "../assets/Indicube.jpeg"

import companyLogo1 from "../assets/Archimedis-logo-1.png";
import companyLogo2 from "../assets/cape_start_logo.jpeg";
import companyLogo3 from "../assets/korcomptenz_logo.jpeg";
import companyLogo4 from "../assets/logo-Zauba.webp";
import companyLogo5 from "../assets/marlow_india_logo.jpeg";
import companyLogo6 from "../assets/presidio__logo.jpeg";
import companyLogo7 from "../assets/Screenshot 2025-08-14 002456.png";
import companyLogo8 from "../assets/Screenshot 2025-08-14 002634.png";

// If you have multiple logos, put them in this array/
const logos = [
  companyLogo01,
  companyLogo02,
  companyLogo03,
  companyLogo1,
  companyLogo2,
  companyLogo3,
  companyLogo4,
  companyLogo5,
  companyLogo6,
  companyLogo7,
  companyLogo8
];

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const MarqueeWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  background: white; /* Change background color if needed */
  padding: 10px 0;
`;

const MarqueeContent = styled.div`
  display: inline-block;
  white-space: nowrap;
  animation: ${scroll} 20s linear infinite;
`;

const LogoItem = styled.img`
  height: 60px; /* Change logo size */
  margin: 0 2rem;
  vertical-align: middle;
`;

const CompanySlider = () => (
  <MarqueeWrapper>
    <MarqueeContent>
      {logos.map((logo, idx) => (
        <LogoItem src={logo} alt={`logo-${idx}`} key={`first-${idx}`} />
      ))}
      {/* Duplicate logos for smooth infinite effect */}
      {logos.map((logo, idx) => (
        <LogoItem src={logo} alt={`logo-${idx}`} key={`second-${idx}`} />
      ))}
    </MarqueeContent>
  </MarqueeWrapper>
);

export default CompanySlider;

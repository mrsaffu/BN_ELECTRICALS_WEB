import { useState } from "react";
import "../styles/gallery.css";

// === Imports ===
import g1 from "../assets/Gallery/g1.jpg";
import g2 from "../assets/Gallery/g2.jpg";
import g3 from "../assets/Gallery/g3.jpg";
import g4 from "../assets/Gallery/g4.jpg";
import g5 from "../assets/Gallery/g5.jpg";
import g6 from "../assets/Gallery/g6.jpg";
import g7 from "../assets/Gallery/g7.jpg";
import g8 from "../assets/Gallery/g8.jpg";
import g9 from "../assets/Gallery/g9.jpg";
import g10 from "../assets/Gallery/g10.jpg";
import g11 from "../assets/Gallery/g11.jpg";
import g12 from "../assets/Gallery/g12.jpg";
import g13 from "../assets/Gallery/g13.jpg";
import g14 from "../assets/Gallery/g14.jpg";
import g15 from "../assets/Gallery/g15.jpg";
import g16 from "../assets/Gallery/g16.jpg";
import g17 from "../assets/Gallery/g17.jpg";
import g18 from "../assets/Gallery/g18.jpg";
import g19 from "../assets/Gallery/g19.jpg";
import g20 from "../assets/Gallery/g20.jpg";
import g21 from "../assets/Gallery/g21.jpg";
import g22 from "../assets/Gallery/g22.jpg";
import g23 from "../assets/Gallery/g23.jpg";
import g24 from "../assets/Gallery/g24.jpg";
import g25 from "../assets/Gallery/g25.jpg";

const Gallery = ({ onOpenLightbox }) => {
  const [showAll, setShowAll] = useState(false);

  const allGalleryImages = [
    {
      id: "gallery1",
      src: g1,
      alt: "Electrical contractor at work",
      height: "tall",
    },
    {
      id: "gallery2",
      src: g2,
      alt: "Modern electrical panel installation",
      height: "medium",
    },
    {
      id: "gallery3",
      src: g3,
      alt: "Commercial electrical installation",
      height: "medium",
    },
    {
      id: "gallery4",
      src: g4,
      alt: "Industrial electrical systems",
      height: "medium",
    },
    { id: "gallery5", src: g5, alt: "Electrical maintenance", height: "tall" },
    {
      id: "gallery6",
      src: g6,
      alt: "Modern electrical equipment",
      height: "short",
    },
    {
      id: "gallery7",
      src: g7,
      alt: "Residential electrical interior work",
      height: "medium",
    },
    {
      id: "gallery8",
      src: g8,
      alt: "Electrical contractor with equipment",
      height: "medium",
    },
    {
      id: "gallery9",
      src: g9,
      alt: "Smart home electrical automation",
      height: "short",
    },
    {
      id: "gallery10",
      src: g10,
      alt: "Data center electrical infrastructure",
      height: "tall",
    },
    {
      id: "gallery11",
      src: g11,
      alt: "Solar panel installation work",
      height: "medium",
    },
    {
      id: "gallery12",
      src: g12,
      alt: "Hospital emergency power systems",
      height: "short",
    },
    {
      id: "gallery13",
      src: g13,
      alt: "Warehouse lighting installation",
      height: "tall",
    },
    {
      id: "gallery14",
      src: g14,
      alt: "Retail electrical fit-out",
      height: "medium",
    },
    {
      id: "gallery15",
      src: g15,
      alt: "Electrical safety inspection",
      height: "short",
    },
    {
      id: "gallery16",
      src: g16,
      alt: "Office electrical upgrade project",
      height: "medium",
    },
    {
      id: "gallery17",
      src: g17,
      alt: "Factory electrical maintenance",
      height: "medium",
    },
    {
      id: "gallery18",
      src: g18,
      alt: "Underground cabling installation",
      height: "short",
    },
    {
      id: "gallery19",
      src: g19,
      alt: "Transformer installation project",
      height: "tall",
    },
    {
      id: "gallery20",
      src: g20,
      alt: "Outdoor electrical wiring setup",
      height: "medium",
    },
    { id: "gallery21", src: g21, alt: "Control room setup", height: "medium" },
    {
      id: "gallery22",
      src: g22,
      alt: "High-voltage equipment maintenance",
      height: "tall",
    },
    { id: "gallery23", src: g23, alt: "Panel board wiring", height: "short" },
    {
      id: "gallery24",
      src: g24,
      alt: "Lighting installation in progress",
      height: "medium",
    },
    {
      id: "gallery25",
      src: g25,
      alt: "Electrical safety audit",
      height: "short",
    },
  ];

  const displayedImages = showAll
    ? allGalleryImages
    : allGalleryImages.slice(0, 8);

  const handleImageClick = (image) => {
    onOpenLightbox(image.id, image.src, image.alt);
  };

  const handleLoadMore = () => {
    setShowAll(!showAll);
  };
  return (
    <section id="gallery" className="gallery section-padding">
      <div className="container">
        <div className="section-title fade-in">
          <h2>Gallery</h2>
        </div>

        <div className="gallery-grid">
          {displayedImages.map((image) => (
            <div
              key={image.id}
              className={`gallery-item ${image.height} fade-in`}
              onClick={() => handleImageClick(image)}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
              <div className="gallery-overlay">
                <i className="fas fa-search-plus"></i>
              </div>
            </div>
          ))}
        </div>

        <div className="load-more-container">
          <button
            className="btn-primary load-more-btn"
            onClick={handleLoadMore}
          >
            {showAll ? (
              <>
                <i className="fas fa-minus"></i>
                Show Less
              </>
            ) : (
              <>
                <i className="fas fa-plus"></i>
                Load More Images
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

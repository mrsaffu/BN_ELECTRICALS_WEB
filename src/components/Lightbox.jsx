import '../styles/lightbox.css';

const Lightbox = ({ lightbox, onClose }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!lightbox.isOpen) return null;

  return (
    <div 
      className="lightbox-overlay" 
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-image"
    >
      <div className="lightbox-container">
        <button 
          className="lightbox-close"
          onClick={onClose}
          aria-label="Close lightbox"
        >
          <i className="fas fa-times"></i>
        </button>
        
        <img 
          id="lightbox-image"
          src={lightbox.imageSrc} 
          alt={lightbox.imageAlt}
          className="lightbox-image"
        />
      </div>
    </div>
  );
};

export default Lightbox;

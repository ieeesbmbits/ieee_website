import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import DomeGallery from './DomeGallery';
import { initMobileNavbar } from './main.js';

const GALLERY_IMAGES = [
  { src: './gallery/1.jpg', alt: 'IEEE SB Event Photo 1' },
  { src: './gallery/2.jpg', alt: 'IEEE SB Event Photo 2' },
  { src: './gallery/3.jpg', alt: 'IEEE SB Event Photo 3' },
  { src: './gallery/4.jpg', alt: 'IEEE SB Event Photo 4' },
  { src: './gallery/139009.jpg', alt: 'IEEE Activity Photo 139009' },
  { src: './gallery/139010.jpg', alt: 'IEEE Activity Photo 139010' },
  { src: './gallery/139011.jpg', alt: 'IEEE Activity Photo 139011' },
  { src: './gallery/139012.jpg', alt: 'IEEE Activity Photo 139012' },
  { src: './gallery/139013.jpg', alt: 'IEEE Activity Photo 139013' },
  { src: './gallery/139014.jpg', alt: 'IEEE Activity Photo 139014' },
  { src: './gallery/139015.jpg', alt: 'IEEE Activity Photo 139015' },
  { src: './gallery/1D8A3893.jpg', alt: 'IEEE Workshop & Gathering' },
  { src: './gallery/IMG-20250302-WA0109.jpg', alt: 'IEEE MBITS Activity' },
  { src: './gallery/IMG-20250704-WA0089.jpg', alt: 'IEEE Student Branch Event' },
  { src: './gallery/IMG-20250705-WA0062.jpg', alt: 'IEEE Technical Session' },
  { src: './gallery/IMG-20250712-WA0111.jpg', alt: 'IEEE Community Gathering' },
  { src: './gallery/IMG-20250712-WA0117.jpg', alt: 'IEEE Leadership Team' },
  { src: './gallery/IMG-20250730-WA0151.jpg', alt: 'IEEE SB MBITS Photo' },
  { src: './gallery/IMG-20250730-WA0153.jpg', alt: 'IEEE Student Members' },
  { src: './gallery/IMG-20250812-WA0145 (1).jpg', alt: 'IEEE Workshop Highlights' },
  { src: './gallery/IMG-20260101-WA0121.jpg', alt: 'IEEE New Year Celebration' },
  { src: './gallery/IMG-20260119-WA0017.jpg', alt: 'IEEE Branch Assembly' },
  { src: './gallery/IMG-20260126-WA0360.jpg', alt: 'IEEE Republic Day Event' },
  { src: './gallery/IMG-20260126-WA0362.jpg', alt: 'IEEE Celebration Moment' },
  { src: './gallery/Khm .jpg', alt: 'IEEE SB Outing & Meetup' },
  { src: './gallery/Yess nit Calicut .jpg', alt: 'IEEE YESS NIT Calicut Event' },
  { src: './gallery/_Z3A5935.JPG', alt: 'IEEE Special Event Photo' },
  { src: './gallery/signal.jpg', alt: 'IEEE Signal Processing Chapter' }
];

function GalleryApp() {
  const [viewMode, setViewMode] = useState('globe'); // 'globe' or 'normal'
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    initMobileNavbar();
  }, []);

  return (
    <div className={`gallery-page-container ${viewMode === 'normal' ? 'normal-mode' : 'globe-mode'}`}>
      {/* Navigation Bar */}
      <header className="navbar" id="navbar">
        <div className="nav-container">
          <a href="./index.html" className="brand-logo" aria-label="IEEE MBITS Home">
            <img src="./logo.png" alt="IEEE MBITS Logo" className="brand-logo-img" />
          </a>

          <nav className="nav-menu" id="navMenu">
            <a href="./index.html#hero" className="nav-link">Home</a>
            <a href="./execom.html" className="nav-link">Execom</a>
            <a href="./gallery.html" className="nav-link active">Gallery</a>
            <a href="./event.html" className="nav-link">Events</a>
            <a href="./join.html" className="btn btn-donate mobile-nav-join">Join Now</a>
          </nav>

          <div className="nav-actions">
            <a href="./join.html" className="btn btn-donate desktop-join">Join Now</a>
            <button className="nav-hamburger" id="navToggle" aria-label="Toggle navigation menu" aria-expanded="false">
              <span className="hamburger-bar"></span>
              <span className="hamburger-bar"></span>
              <span className="hamburger-bar"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Floating Toggle Controls Bar: Normal View vs Globe View */}
      <div className="gallery-control-bar">
        <div className="gallery-control-inner">
          <div className="gallery-view-mode-toggle" role="group" aria-label="Gallery View Mode">
            <button
              type="button"
              className={`view-toggle-btn ${viewMode === 'normal' ? 'active' : ''}`}
              onClick={() => setViewMode('normal')}
              aria-label="Switch to Normal View"
            >
              <i className="fa-solid fa-border-all"></i>
              <span>Normal View</span>
            </button>
            <button
              type="button"
              className={`view-toggle-btn ${viewMode === 'globe' ? 'active' : ''}`}
              onClick={() => setViewMode('globe')}
              aria-label="Switch to Globe View"
            >
              <i className="fa-solid fa-globe"></i>
              <span>Globe View</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main View Content */}
      {viewMode === 'globe' ? (
        <div className="gallery-viewport">
          <DomeGallery
            images={GALLERY_IMAGES}
            fit={0.92}
            fitBasis="max"
            minRadius={520}
            maxRadius={1600}
            padFactor={0.12}
            overlayBlurColor="#090909"
            maxVerticalRotationDeg={12}
            dragSensitivity={20}
            enlargeTransitionMs={350}
            segments={24}
            dragDampening={1.8}
            openedImageWidth="min(480px, 90vw)"
            openedImageHeight="min(480px, 82vh)"
            imageBorderRadius="16px"
            openedImageBorderRadius="24px"
          />
        </div>
      ) : (
        <div className="normal-gallery-container">
          <div className="normal-gallery-grid">
            {GALLERY_IMAGES.map((img, idx) => (
              <div
                key={idx}
                className="normal-gallery-card"
                onClick={() => setActiveImage(img)}
              >
                <img src={img.src} alt={img.alt} loading="lazy" className="normal-gallery-img" />
                <div className="normal-gallery-overlay">
                  <i className="fa-solid fa-expand"></i>
                  <span>View Photo</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Lightbox Modal for Normal View */}
      {activeImage && (
        <div className="normal-lightbox-modal" onClick={() => setActiveImage(null)}>
          <div className="normal-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="normal-lightbox-close"
              onClick={() => setActiveImage(null)}
              aria-label="Close photo"
            >
              &times;
            </button>
            <img src={activeImage.src} alt={activeImage.alt} className="normal-lightbox-img" />
            <p className="normal-lightbox-caption">{activeImage.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
}

const rootElement = document.getElementById('gallery-root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <GalleryApp />
    </React.StrictMode>
  );
}


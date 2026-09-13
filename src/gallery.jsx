import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom/client';
import { initMobileNavbar } from './main.js';

const GALLERY_IMAGES = [
  { src: './gallery/1.jpg', title: 'IEEE SB Grand Inauguration & Assembly' },
  { src: './gallery/2.jpg', title: 'Annual Technical Symposium & Keynote' },
  { src: './gallery/3.jpg', title: 'Robotics & Hardware Hackathon' },
  { src: './gallery/4.jpg', title: 'IEEE SB MBITS Flagship Conference' },
  { src: './gallery/139009.jpg', title: 'Hands-on Technical Bootcamp' },
  { src: './gallery/139010.jpg', title: 'Circuit Design & Prototyping Workshop' },
  { src: './gallery/139011.jpg', title: 'Interactive Coding & Algorithm Contest' },
  { src: './gallery/139012.jpg', title: 'Embedded Systems Demonstration' },
  { src: './gallery/139013.jpg', title: 'Student Chapter Technical Talk' },
  { src: './gallery/139014.jpg', title: 'Industrial Interaction Session' },
  { src: './gallery/139015.jpg', title: 'Student Innovators Meetup' },
  { src: './gallery/1D8A3893.jpg', title: 'IEEE National Conference Gathering' },
  { src: './gallery/IMG-20250302-WA0109.jpg', title: 'Executive Committee Strategic Session' },
  { src: './gallery/IMG-20250704-WA0089.jpg', title: 'IEEE Student Branch Orientation Day' },
  { src: './gallery/IMG-20250705-WA0062.jpg', title: 'Signal Processing & AI Colloquium' },
  { src: './gallery/IMG-20250712-WA0111.jpg', title: 'IEEE Community & Volunteer Meet' },
  { src: './gallery/IMG-20250712-WA0117.jpg', title: 'Execom Team Leadership Meet' },
  { src: './gallery/IMG-20250730-WA0151.jpg', title: 'Student Branch Milestone Celebration' },
  { src: './gallery/IMG-20250730-WA0153.jpg', title: 'IEEE MBITS Active Student Members' },
  { src: './gallery/IMG-20250812-WA0145 (1).jpg', title: 'Hands-on Hardware Sprint' },
  { src: './gallery/IMG-20260101-WA0121.jpg', title: 'New Year IEEE Chapter Assembly' },
  { src: './gallery/IMG-20260119-WA0017.jpg', title: 'IEEE Branch General Body Meeting' },
  { src: './gallery/IMG-20260126-WA0360.jpg', title: 'Republic Day Community Gathering' },
  { src: './gallery/IMG-20260126-WA0362.jpg', title: 'Celebration & Cultural Evening' },
  { src: './gallery/Khm .jpg', title: 'IEEE Student Branch Annual Outing' },
  { src: './gallery/Yess nit Calicut .jpg', title: 'IEEE YESS NIT Calicut Delegation' },
  { src: './gallery/_Z3A5935.JPG', title: 'IEEE MBITS Tech Exhibition & Showcase' },
  { src: './gallery/signal.jpg', title: 'IEEE Signal Processing Society Chapter Meet' }
];

function GalleryApp() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [touchStartX, setTouchStartX] = useState(0);

  useEffect(() => {
    initMobileNavbar();
  }, []);

  const closeModal = useCallback(() => {
    setSelectedImageIndex(null);
  }, []);

  const showNext = useCallback(() => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
  }, [selectedImageIndex]);

  const showPrev = useCallback(() => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  }, [selectedImageIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, closeModal, showNext, showPrev]);

  useEffect(() => {
    if (selectedImageIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedImageIndex]);

  const handleTouchStart = (e) => {
    setTouchStartX(e.changedTouches[0].screenX);
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].screenX;
    if (touchEndX < touchStartX - 50) {
      showNext();
    } else if (touchEndX > touchStartX + 50) {
      showPrev();
    }
  };

  const currentImage = selectedImageIndex !== null ? GALLERY_IMAGES[selectedImageIndex] : null;

  return (
    <div className="gallery-page-container">
      {/* Navigation Bar */}
      <header className="navbar" id="navbar">
        <div className="nav-container">
          <a href="./index.html" className="brand-logo" aria-label="IEEE MBITS Home">
            <img src="./logo.webp" alt="IEEE MBITS Logo" className="brand-logo-img" />
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

      {/* Hero Header Section */}
      <section className="gallery-hero">
        <div className="gallery-hero-container">
          <h1 className="gallery-hero-title anton-regular">
            <span className="title-white">IEEE MBITS</span> <span className="title-gold">GALLERY</span>
          </h1>
        </div>
      </section>

      {/* Normal View of Gallery (Grid) */}
      <section className="gallery-section">
        <div className="gallery-container">
          <div className="gallery-grid">
            {GALLERY_IMAGES.map((image, idx) => (
              <article
                key={image.src + idx}
                className="gallery-card"
                onClick={() => setSelectedImageIndex(idx)}
                tabIndex={0}
                role="button"
                aria-label={`View enlarged photo: ${image.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedImageIndex(idx);
                  }
                }}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="gallery-card-img"
                  loading="lazy"
                />
                <div className="gallery-card-overlay">
                  <div className="gallery-card-top">
                    <div className="gallery-card-zoom-icon" aria-hidden="true">
                      <i className="fa-solid fa-expand"></i>
                    </div>
                  </div>
                  <div className="gallery-card-bottom">
                    <h3 className="gallery-card-title">{image.title}</h3>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Popup Modal ("When click it pop up big") */}
      {selectedImageIndex !== null && currentImage && (
        <div
          className="lightbox-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged photo view"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Top Bar */}
          <div className="lightbox-header">
            <div className="lightbox-info-group">
              <span className="lightbox-counter">
                {selectedImageIndex + 1} / {GALLERY_IMAGES.length}
              </span>
            </div>
            <button
              type="button"
              className="lightbox-close-btn"
              onClick={closeModal}
              aria-label="Close enlarged view"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          {/* Center Stage with Prev, Image, Next */}
          <div className="lightbox-stage">
            <button
              type="button"
              className="lightbox-nav-btn prev"
              onClick={showPrev}
              aria-label="Previous photo"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>

            <div
              className="lightbox-image-container"
              onClick={(e) => {
                if (e.target === e.currentTarget) closeModal();
              }}
            >
              <img
                key={currentImage.src}
                src={currentImage.src}
                alt={currentImage.title}
                className="lightbox-img"
              />
            </div>

            <button
              type="button"
              className="lightbox-nav-btn next"
              onClick={showNext}
              aria-label="Next photo"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>

          {/* Bottom Bar */}
          <div className="lightbox-footer">
            <p className="lightbox-caption">{currentImage.title}</p>
            <div className="lightbox-hints">
              <span><kbd>&larr;</kbd> Previous</span>
              <span><kbd>&rarr;</kbd> Next</span>
              <span><kbd>ESC</kbd> Close</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const rootElement = document.getElementById('gallery-root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<GalleryApp />);
}

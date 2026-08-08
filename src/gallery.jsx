import React, { useEffect } from 'react';
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
  useEffect(() => {
    initMobileNavbar();
  }, []);

  return (
    <div className="gallery-page-container">
      {/* Navigation Bar (Fixed & Transparent - Same as index.html) */}
      <header className="navbar" id="navbar">
        <div className="nav-container">
          {/* Brand Logo: logo.png */}
          <a href="./index.html" className="brand-logo" aria-label="IEEE MBITS Home">
            <img src="./logo.png" alt="IEEE MBITS Logo" className="brand-logo-img" />
          </a>

          {/* Left-aligned Nav Links next to Logo */}
          <nav className="nav-menu" id="navMenu">
            <a href="./index.html#hero" className="nav-link">Home</a>
            <a href="./execom.html" className="nav-link">Execom</a>
            <a href="./gallery.html" className="nav-link active">Gallery</a>
            <a href="./event.html" className="nav-link">Events</a>
            <a href="./index.html#support-request" className="btn btn-donate mobile-nav-join">Join Now</a>
          </nav>

          {/* Right Action Buttons */}
          <div className="nav-actions">
            <a href="./index.html#support-request" className="btn btn-donate desktop-join">Join Now</a>
            <button className="nav-hamburger" id="navToggle" aria-label="Toggle navigation menu" aria-expanded="false">
              <span className="hamburger-bar"></span>
              <span className="hamburger-bar"></span>
              <span className="hamburger-bar"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Interactive 3D Dome Gallery Canvas */}
      <div className="gallery-viewport">
        <DomeGallery
          images={GALLERY_IMAGES}
          fit={0.55}
          fitBasis="auto"
          minRadius={550}
          maxRadius={1400}
          padFactor={0.2}
          overlayBlurColor="#090909"
          maxVerticalRotationDeg={10}
          dragSensitivity={18}
          enlargeTransitionMs={350}
          segments={22}
          dragDampening={1.8}
          openedImageWidth="min(420px, 85vw)"
          openedImageHeight="min(420px, 85vw)"
          imageBorderRadius="20px"
          openedImageBorderRadius="24px"
        />
      </div>
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

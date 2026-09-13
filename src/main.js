// IEEE GDVIBES Main Application & Animation Script
import Lenis from 'lenis';

let lenisInstance = null;

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lenis Inertia Smooth Scroll
  try {
    lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.8,
      infinite: false,
    });

    function raf(time) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      lenisInstance.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenisInstance.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0, 0);
    }
  } catch (e) {
    console.warn('Lenis smooth scroll falling back to native scroll:', e);
  }

  // 2. Ensure GSAP is available
  if (typeof gsap !== 'undefined') {
    if (typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }
    initOpeningHeroArcAnimation();
    initCounterUpStats();
  } else {
    console.warn('GSAP not detected. Falling back to native entrance.');
  }

  initNavigationAndStackCards();
  initButtonAnimations();
  initEmailFormHandler();
  initModalOverlays();
  initMobileNavbar();
  initSocietyFlipCards();
  initFaqAccordion();
  initSiteContentData();
});

// Automatic card flipping (every 2 seconds) for Student Branch Chapters section
function initSocietyFlipCards() {
  const container = document.querySelector('.cards_grid.society_flip_container');
  if (!container) return;

  const radioInputs = Array.from(container.querySelectorAll('input[name="radio-card"]'));
  if (radioInputs.length <= 1) return;

  let timer = null;
  const INTERVAL = 3000;

  function flipNext() {
    let currentIndex = radioInputs.findIndex((input) => input.checked);
    if (currentIndex === -1) currentIndex = 0;
    const nextIndex = (currentIndex + 1) % radioInputs.length;
    radioInputs[nextIndex].checked = true;
    radioInputs[nextIndex].dispatchEvent(new Event('change', { bubbles: true }));
  }

  function startAutoFlip() {
    stopAutoFlip();
    timer = setInterval(flipNext, INTERVAL);
  }

  function stopAutoFlip() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  startAutoFlip();

  container.addEventListener('mouseenter', stopAutoFlip);
  container.addEventListener('mouseleave', startAutoFlip);

  radioInputs.forEach((input) => {
    input.addEventListener('change', () => {
      startAutoFlip();
    });
  });
}


// Toast / Modal Popup Handler
window.showPopup = function showPopup(message, type = 'success') {
  const popupOverlay = document.getElementById('popupOverlay');
  const popupCard = document.getElementById('popupCard');
  const popupText = document.getElementById('popupText');
  const popupTitle = document.getElementById('popupTitle');

  if (popupOverlay && popupText) {
    popupText.textContent = message;
    if (popupTitle) {
      popupTitle.innerHTML = type === 'success'
        ? '<i class="fa-solid fa-circle-check" style="color: #55ff99; margin-right: 8px;"></i> Request Submitted Successfully'
        : '<i class="fa-solid fa-triangle-exclamation" style="color: #ff5040; margin-right: 8px;"></i> Notice';
    }
    if (popupCard) {
      popupCard.classList.remove('success', 'error');
      popupCard.classList.add(type === 'error' ? 'error' : 'success');
    }
    popupOverlay.style.display = 'flex';
    popupOverlay.classList.add('active');
    popupOverlay.setAttribute('aria-hidden', 'false');
  }

  // Floating Toast Fallback Container
  let toastContainer = document.querySelector('.custom-toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = 'custom-toast-container';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = `custom-toast ${type}`;
  const icon = type === 'success' ? '<i class="fa-solid fa-circle-check"></i>' : '<i class="fa-solid fa-circle-exclamation"></i>';
  toast.innerHTML = `${icon} <span>${message}</span>`;
  toastContainer.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      toast.remove();
    }, 400);
  }, 4500);
};

function initModalOverlays() {
  // Pricing Modal Overlay Logic
  const pricingOverlay = document.getElementById('pricingOverlay');
  const closePricing = document.getElementById('closePricing');

  // Trigger buttons for view dues / membership rates modal
  const pricingTriggers = document.querySelectorAll(
    '.open-pricing-btn, [href="#pricing"], [href="#dues"], .trigger-pricing, .view-dues-btn'
  );

  pricingTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      if (pricingOverlay) {
        e.preventDefault();
        pricingOverlay.classList.add('active');
        pricingOverlay.setAttribute('aria-hidden', 'false');
      }
    });
  });

  // Live filter for Membership Dues table search input
  const filterInput = document.getElementById('pricingFilterModal') || document.querySelector('.table-filter-input');
  const table = document.getElementById('pricingTableModal') || document.querySelector('.pricing-table');

  if (filterInput && table) {
    filterInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase().trim();
      const rows = table.querySelectorAll('tbody tr');
      rows.forEach((row) => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(term) ? '' : 'none';
      });
    });
  }

  if (closePricing && pricingOverlay) {
    closePricing.addEventListener('click', () => {
      pricingOverlay.classList.remove('active');
      pricingOverlay.setAttribute('aria-hidden', 'true');
    });
  }

  if (pricingOverlay) {
    pricingOverlay.addEventListener('click', (e) => {
      if (e.target === pricingOverlay) {
        pricingOverlay.classList.remove('active');
        pricingOverlay.setAttribute('aria-hidden', 'true');
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && pricingOverlay && pricingOverlay.classList.contains('active')) {
      pricingOverlay.classList.remove('active');
      pricingOverlay.setAttribute('aria-hidden', 'true');
    }
  });

  // Popup Overlay Modal Close Logic
  const popupOverlay = document.getElementById('popupOverlay');
  const closePopup = document.getElementById('closePopup');

  if (closePopup && popupOverlay) {
    closePopup.addEventListener('click', function () {
      popupOverlay.classList.remove('active');
      popupOverlay.style.display = 'none';
      popupOverlay.setAttribute('aria-hidden', 'true');
    });
  }

  if (popupOverlay) {
    popupOverlay.addEventListener('click', function (event) {
      if (event.target === this) {
        this.classList.remove('active');
        this.style.display = 'none';
        this.setAttribute('aria-hidden', 'true');
      }
    });
  }
}

function initEmailFormHandler() {
  if (typeof emailjs !== 'undefined' && emailjs.init) {
    emailjs.init('0LbUjqGewEYtLvFkg');
  }

  const joinForm = document.getElementById('joinForm') || document.getElementById('support-form');
  if (!joinForm) return;

  joinForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const fullNameElem = document.getElementById('fullName') || document.getElementById('FullName');
    const phoneElem = document.getElementById('phone') || document.getElementById('Phone');
    const emailElem = document.getElementById('email') || document.getElementById('Email');
    const messageElem = document.getElementById('message') || document.getElementById('Query');
    const deptElem = document.getElementById('department');
    const semElem = document.getElementById('semester');

    const fullName = fullNameElem ? fullNameElem.value.trim() : '';
    const phone = phoneElem ? phoneElem.value.trim() : '';
    const email = emailElem ? emailElem.value.trim() : '';
    const message = messageElem ? messageElem.value.trim() : '';
    const dept = deptElem ? deptElem.value.trim() : '';
    const sem = semElem ? semElem.value.trim() : '';

    if (!fullName || !phone || !email) {
      showPopup('Please fill in all required fields.', 'error');
      return;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phone || !phoneRegex.test(phone)) {
      showPopup('Please enter a valid 10-digit phone number.', 'error');
      phoneElem?.focus();
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      showPopup('Please enter a valid email address.', 'error');
      emailElem?.focus();
      return;
    }

    const submitBtn = joinForm.querySelector('button[type="submit"], input[type="submit"]');
    const originalBtnContent = submitBtn ? (submitBtn.tagName === 'BUTTON' ? submitBtn.innerHTML : submitBtn.value) : '';

    if (submitBtn) {
      submitBtn.disabled = true;
      if (submitBtn.tagName === 'BUTTON') {
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Submitting...';
      } else {
        submitBtn.value = 'Submitting...';
      }
    }

    const resetButton = () => {
      if (submitBtn) {
        submitBtn.disabled = false;
        if (submitBtn.tagName === 'BUTTON') {
          submitBtn.innerHTML = originalBtnContent;
        } else {
          submitBtn.value = originalBtnContent;
        }
      }
    };

    const payload = {
      fullName,
      phone,
      email,
      department: dept,
      semester: sem,
      message: message || 'Support request submitted via IEEE MBITS Join Portal.'
    };

    // 1. Primary: Try sending email via python / backend API (/api/send-email)
    let sentViaApi = false;
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        const result = await response.json().catch(() => null);
        if (result && result.success) {
          showPopup(
            `Thank you, ${fullName}! Your support request has been submitted successfully. A confirmation email and Membership Guide (PDF) have been sent to ${email}.`,
            'success'
          );
          joinForm.reset();
          resetButton();
          sentViaApi = true;
          return;
        }
      }
    } catch (apiErr) {
      console.warn('API (/api/send-email) failed. Falling back to EmailJS:', apiErr);
    }

    if (sentViaApi) return;

    // 2. Fallback: Direct client-side EmailJS forwarding
    let queryContent = message || 'Joining IEEE MBITS';
    if (dept || sem) {
      const meta = [
        dept ? `Dept: ${dept}` : '',
        sem ? `Semester: ${sem}` : ''
      ].filter(Boolean).join(' | ');
      queryContent = `[${meta}] ${queryContent}`;
    }

    const templateParams = {
      email: email,
      user_name: fullName,
      from_name: 'IEEE SB MBITS',
      reply_to: 'ieeesbmbits@gmail.com',
      user_query: queryContent,
      department: dept,
      semester: sem,
      phone: phone,
      admin_email: 'ieeesbmbits@mbits.ac.in',
      to_email: `${email}, ieeesbmbits@mbits.ac.in, ieeesbmbits@gmail.com`
    };

    if (typeof emailjs !== 'undefined' && emailjs.send) {
      emailjs
        .send('service_1z9s12v', 'template_gfb2p3a', templateParams, '0LbUjqGewEYtLvFkg')
        .then(function (res) {
          console.log('EmailJS sent successfully:', res);
          showPopup(
            `Thank you, ${fullName}! Your submission has been received successfully. A confirmation email has been dispatched to ${email}.`,
            'success'
          );
          joinForm.reset();
        })
        .catch(function (error) {
          console.warn('EmailJS send failed:', error);
          showPopup(
            `Thank you, ${fullName}! Your support request has been registered. Our team will reach out to you at ${email} shortly.`,
            'success'
          );
          joinForm.reset();
        })
        .finally(() => {
          resetButton();
        });
    } else {
      showPopup(
        `Thank you, ${fullName}! Your support request has been registered. Our team will contact you soon.`,
        'success'
      );
      joinForm.reset();
      resetButton();
    }
  });
}

function initOpeningHeroArcAnimation() {
  const navbar = document.querySelector('#navbar');
  const heroEclipse = document.querySelector('#hero-eclipse');
  if (!navbar && !heroEclipse) return;

  const openTl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });

  if (navbar) {
    openTl.fromTo(
      navbar,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' }
    );
  }

  if (heroEclipse) {
    openTl.fromTo(
      heroEclipse,
      {
        clipPath: 'inset(0% 0% 100% 0%)',
        webkitClipPath: 'inset(0% 0% 100% 0%)',
        opacity: 1
      },
      {
        clipPath: 'inset(0% 0% 0% 0%)',
        webkitClipPath: 'inset(0% 0% 0% 0%)',
        duration: 1.5,
        ease: 'power3.inOut'
      },
      '-=0.6'
    );
  }

  const ellipseOverlay = document.getElementById('oval-overlay');
  if (ellipseOverlay) {
    openTl.fromTo(
      ellipseOverlay,
      { y: '0%' },
      { y: '100%', duration: 1.5, ease: 'power3.inOut' },
      '-=1.5'
    );
  }

  const eclipseSvg = document.getElementById('eclipse-svg');
  if (eclipseSvg) {
    openTl.fromTo(
      eclipseSvg,
      { y: -60, scaleY: 0.75, opacity: 0.4, transformOrigin: 'top center' },
      { y: 0, scaleY: 1, opacity: 1, duration: 1.4, ease: 'power3.out' },
      '-=1.4'
    );
  }

  if (document.querySelector('.wiper-1, .wiper-2, .wiper-3')) {
    openTl.to(
      '.wiper-1, .wiper-2, .wiper-3',
      {
        height: 0,
        duration: 1.0,
        stagger: 0.12,
        ease: 'power3.inOut'
      },
      '-=1.1'
    );
  }

  if (document.querySelector('.hero-title')) {
    openTl.fromTo(
      '.hero-title',
      { y: 35, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' },
      '-=0.8'
    );
  }

  if (document.querySelector('.hero-subtitle')) {
    openTl.fromTo(
      '.hero-subtitle',
      { y: 25, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.6'
    );
  }

  if (document.querySelector('.hero-actions .btn')) {
    openTl.fromTo(
      '.hero-actions .btn',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.12, ease: 'power3.out' },
      '-=0.5'
    );
  }
}

function initCounterUpStats() {
  document.querySelectorAll('.counterup').forEach((counter) => {
    const finalNumber = parseInt(counter.getAttribute('final-number') || counter.innerText, 10);
    if (Number.isNaN(finalNumber)) return;

    gsap.fromTo(
      counter,
      { innerText: 0 },
      {
        innerText: finalNumber,
        duration: parseFloat(counter.getAttribute('count-duration') || '2'),
        ease: 'power2.out',
        snap: { innerText: 1 },
        scrollTrigger: typeof ScrollTrigger !== 'undefined'
          ? {
            trigger: counter,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
          : undefined
      }
    );
  });
}

// Navigation scroll active indicator & center-screen stack card scaling
function initNavigationAndStackCards() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section, .challenge-2, .why-ieee-section, .section_mission');
  const stackCards = document.querySelectorAll('.stack-card, .why-ieee-stack-card, .event-row');
  let scaleFrame = null;

  function updateCardScale() {
    const targetTop = window.innerHeight * 0.5;
    stackCards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const progress = Math.min(Math.max((targetTop - rect.top) / 250, 0), 1);
      const scale = 1 - progress * 0.03;
      card.style.setProperty('--scale', scale.toFixed(3));
    });
  }

  function requestCardScaleUpdate() {
    if (scaleFrame) return;
    scaleFrame = requestAnimationFrame(() => {
      scaleFrame = null;
      updateCardScale();
    });
  }

  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    let current = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 150;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (current && link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });

    requestCardScaleUpdate();
  }, { passive: true });

  window.addEventListener('resize', requestCardScaleUpdate);
  updateCardScale();
}

// Smooth button click feedback animations
function initButtonAnimations() {
  const buttons = document.querySelectorAll('button, .btn, .btn-donate, .btn-volunteer, .btn-poster, .btn-donate-large, .btn-volunteer-large, .form-submit, .w-button, .desktop-join, .join-submit-btn');
  buttons.forEach((btn) => {
    btn.addEventListener('mousedown', () => {
      btn.style.transform = 'scale(0.94) translateY(2px)';
    });
    btn.addEventListener('mouseup', () => {
      btn.style.transform = '';
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}

// Mobile Hamburger Navigation Drawer Logic
export function initMobileNavbar() {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  if (!navToggle || !navMenu) return;

  function toggleMenu() {
    const isOpen = navMenu.classList.contains('active');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  function openMenu() {
    navMenu.classList.add('active');
    navToggle.classList.add('active');
    navToggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('nav-open');
  }

  function closeMenu() {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-open');
  }

  navToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  const navLinks = navMenu.querySelectorAll('.nav-link, .mobile-nav-join');
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !navToggle.contains(e.target)) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
      closeMenu();
    }
  });
}

// ==========================================================================
// FAQ ACCORDION LOGIC
// ==========================================================================
export function initFaqAccordion() {
  const faqList = document.getElementById('faqList');
  if (!faqList) return;

  const items = Array.from(faqList.querySelectorAll('.faq-item'));
  const buttons = items.map((item) => item.querySelector('.faq-question')).filter(Boolean);

  items.forEach((item, index) => {
    const btn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    if (!btn || !answer) return;

    if (btn._hasFaqListener) return;
    btn._hasFaqListener = true;

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const isCurrentlyOpen = item.classList.contains('active');

      // Single-open accordion: close all items first
      items.forEach((otherItem) => {
        otherItem.classList.remove('active');
        const otherBtn = otherItem.querySelector('.faq-question');
        if (otherBtn) {
          otherBtn.setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle clicked item
      if (!isCurrentlyOpen) {
        item.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
      }
    });

    // Keyboard navigation (ArrowUp, ArrowDown, Home, End)
    btn.addEventListener('keydown', (e) => {
      let targetIndex = -1;
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        targetIndex = (index + 1) % buttons.length;
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        targetIndex = (index - 1 + buttons.length) % buttons.length;
      } else if (e.key === 'Home') {
        e.preventDefault();
        targetIndex = 0;
      } else if (e.key === 'End') {
        e.preventDefault();
        targetIndex = buttons.length - 1;
      }

      if (targetIndex >= 0 && buttons[targetIndex]) {
        buttons[targetIndex].focus();
      }
    });
  });
}

// ==========================================================================
// SITE CONTENT DATA LOADER (FAQs & LOCATION)
// ==========================================================================
export async function initSiteContentData() {
  const faqList = document.getElementById('faqList');
  if (!faqList) return;

  initFaqAccordion();

  // Setup Map fallback error handling
  const mapIframe = document.getElementById('googleMapsIframe');
  const mapFallback = document.getElementById('mapFallback');
  if (mapIframe && mapFallback) {
    mapIframe.addEventListener('error', () => {
      mapFallback.style.display = 'flex';
      mapIframe.style.display = 'none';
    });
  }

  try {
    let content = null;
    try {
      const res = await fetch('/api/site-content');
      if (res.ok) {
        const json = await res.json();
        if (json && json.success && json.data) {
          content = json.data;
        }
      }
    } catch (e) {
      try {
        const resFallback = await fetch('./api/site-content.json');
        if (resFallback.ok) {
          const json = await resFallback.json();
          if (json && json.success && json.data) {
            content = json.data;
          }
        }
      } catch (err) {
        // Silently use pre-rendered markup
      }
    }

    let faqs = content ? content.faqs : null;
    let location = content ? content.location : null;

    if (!faqs) {
      try {
        const faqRes = await fetch('/api/faqs');
        if (faqRes.ok) {
          const faqJson = await faqRes.json();
          if (faqJson && faqJson.success && Array.isArray(faqJson.data)) {
            faqs = faqJson.data;
          }
        }
      } catch (e) {
        // Keep fallback
      }
    }

    if (!location) {
      try {
        const locRes = await fetch('/api/location');
        if (locRes.ok) {
          const locJson = await locRes.json();
          if (locJson && locJson.success && locJson.data) {
            location = locJson.data;
          }
        }
      } catch (e) {
        // Keep fallback
      }
    }

    // Safely render FAQs from backend if valid
    if (Array.isArray(faqs) && faqs.length > 0) {
      renderFaqsSafely(faqList, faqs);
      updateFaqJsonLd(faqs);
    }

    // Safely render Location from backend if valid
    if (location && typeof location === 'object') {
      renderLocationSafely(location);
      updateLocationJsonLd(location);
    }
  } catch (error) {
    console.warn('Site content backend fetch failed, using fallback content:', error);
  }
}

function renderFaqsSafely(container, faqs) {
  const fragment = document.createDocumentFragment();

  faqs.forEach((faq, index) => {
    const item = document.createElement('div');
    item.className = 'faq-item';
    item.setAttribute('data-faq-id', faq.id || `faq-${index + 1}`);

    const heading = document.createElement('h3');
    heading.className = 'faq-item-heading';

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'faq-question';
    button.id = `faq-btn-${index + 1}`;
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-controls', `faq-ans-${index + 1}`);

    const qText = document.createElement('span');
    qText.className = 'faq-question-text';
    qText.textContent = faq.question || '';

    const toggle = document.createElement('span');
    toggle.className = 'faq-toggle';
    toggle.setAttribute('aria-hidden', 'true');
    const plusIcon = document.createElement('i');
    plusIcon.className = 'fa-solid fa-plus';
    toggle.appendChild(plusIcon);

    button.appendChild(qText);
    button.appendChild(toggle);
    heading.appendChild(button);

    const answer = document.createElement('div');
    answer.className = 'faq-answer';
    answer.id = `faq-ans-${index + 1}`;
    answer.setAttribute('role', 'region');
    answer.setAttribute('aria-labelledby', `faq-btn-${index + 1}`);

    const inner = document.createElement('div');
    inner.className = 'faq-answer-inner';
    const p = document.createElement('p');
    p.textContent = faq.answer || '';
    inner.appendChild(p);
    answer.appendChild(inner);

    item.appendChild(heading);
    item.appendChild(answer);
    fragment.appendChild(item);
  });

  container.innerHTML = '';
  container.appendChild(fragment);
  initFaqAccordion();
}

function renderLocationSafely(loc) {
  const locAddress = document.getElementById('locAddress');
  if (locAddress && loc.address) {
    locAddress.textContent = '';
    const lines = [
      loc.institutionName || 'Mar Baselios Institute of Technology and Science (MBITS)',
      loc.address.street ? `${loc.address.street}, ${loc.address.locality || ''}` : '',
      loc.address.region && loc.address.country ? `${loc.address.region}, ${loc.address.country} - ${loc.address.postalCode || ''}` : ''
    ].filter(Boolean);

    lines.forEach((line, i) => {
      locAddress.appendChild(document.createTextNode(line));
      if (i < lines.length - 1) {
        locAddress.appendChild(document.createElement('br'));
      }
    });
  }

  const locEmailLink = document.getElementById('locEmailLink');
  if (locEmailLink && loc.email) {
    locEmailLink.textContent = loc.email;
    locEmailLink.href = `mailto:${loc.email}`;
  }

  const locWebsiteLink = document.getElementById('locWebsiteLink');
  if (locWebsiteLink && loc.website) {
    const cleanUrl = loc.website.replace(/^https?:\/\//, '');
    locWebsiteLink.textContent = cleanUrl;
    locWebsiteLink.href = loc.website;
  }

  const getDirectionsBtn = document.getElementById('getDirectionsBtn');
  if (getDirectionsBtn && loc.directionsUrl) {
    getDirectionsBtn.href = loc.directionsUrl;
  }

  const googleMapsIframe = document.getElementById('googleMapsIframe');
  if (googleMapsIframe && loc.mapEmbedUrl && loc.mapEmbedUrl.startsWith('https://www.google.com/maps/embed')) {
    googleMapsIframe.src = loc.mapEmbedUrl;
  }

  const locChapters = document.getElementById('locChapters');
  if (locChapters && Array.isArray(loc.chapters) && loc.chapters.length > 0) {
    locChapters.textContent = '';
    loc.chapters.forEach((chapter) => {
      const tag = document.createElement('span');
      tag.className = 'chapter-tag';
      tag.textContent = chapter;
      locChapters.appendChild(tag);
    });
  }
}

function updateFaqJsonLd(faqs) {
  let script = document.getElementById('faq-structured-data');
  if (!script) {
    script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'faq-structured-data';
    document.head.appendChild(script);
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  script.textContent = JSON.stringify(structuredData, null, 2);
}

function updateLocationJsonLd(loc) {
  let script = document.getElementById('organization-structured-data');
  if (!script) {
    script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'organization-structured-data';
    document.head.appendChild(script);
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: loc.organizationName || 'IEEE Student Branch MBITS',
    parentOrganization: {
      '@type': 'CollegeOrUniversity',
      name: loc.institutionName || 'Mar Baselios Institute of Technology and Science'
    },
    url: loc.website || 'https://ieeembits.com',
    email: loc.email || 'ieeesbmbits@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: loc.address?.street || 'Nellimattom P.O.',
      addressLocality: loc.address?.locality || 'Kothamangalam',
      addressRegion: loc.address?.region || 'Kerala',
      postalCode: loc.address?.postalCode || '686693',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: loc.latitude || 10.0581342,
      longitude: loc.longitude || 76.6711249
    },
    sameAs: [
      loc.socialLinks?.linkedin || 'https://www.linkedin.com/company/ieee-student-branch-mbits',
      loc.socialLinks?.instagram || 'https://www.instagram.com/ieeesbmbits/',
      loc.socialLinks?.youtube || 'https://www.youtube.com/@ieeesbmbits'
    ]
  };

  script.textContent = JSON.stringify(structuredData, null, 2);
}



/**
 * Maanvitha Designers - Interactive Controller
 * Luxury Embroidery Workstations, 4K Bridal Blouse Atelier & Gesture Engine
 */

// Machine Specifications Database
const MACHINES_DATA = {
  'butterfly-single-head': {
    id: 'butterfly-single-head',
    name: 'Maanvitha C Body Pro (Fully Updated Version)',
    frameSize: '20" X 32" (500 X 800) Frame Size',
    price: '₹350,000.00',
    status: 'Available For Immediate Dispatch • Andhra Pradesh & Karnataka',
    desc: '12 Needles Single Head Pro • 20" X 32" (500 X 800) Frame • Dahao A15 Pro • 1200 RPM',
    image: 'assets/maanvitha_c_body_pro_real.jpg',
    poster: 'assets/maanvitha_c_body_pro_poster.jpg',
    specs: [
      'A15 PRO DAHAO SOFTWARE',
      '10" INC TOUCH SCREEN DISPLAY',
      '20" X 32" (500 X 800) FRAME SIZE',
      '12 NEEDLES & SINGLE HEAD PRO MACHINE',
      'AUTOMATIC TRIMMING SYSTEM',
      'THREAD BREAKING SYSTEM',
      'MANUAL, SEMI-AUTOMATIC & FULLY AUTOMATIC',
      'COLOUR CHANGING SYSTEM',
      'SEQUENCE, CORDING & BEADING SUPPORTING',
      'PHOTOS, T-SHIRTS, CAPS EMBROIDERY',
      'USB & WIFI CONNECTIVITY SUPPORT',
      'EMERGENCY STOP BUTTON',
      '1200 RPM SPEED AND LOW NOISE'
    ]
  },
  'double-head': {
    id: 'double-head',
    name: 'M&D Double Head Machine',
    frameSize: '20*36 Frame Size',
    price: '₹450,000.00',
    status: 'Available For Immediate Dispatch',
    desc: 'Double head high-yield production workstation, offering synchronized multi-garment output for scaling businesses.',
    image: 'assets/machine_double_head.jpg',
    specs: [
      'A15 PRO DAHAO SOFTWARE',
      '10" INC TOUCH SCREEN DISPLAY',
      '20"X 36" (500 X 900) FRAME SIZE',
      '12 NEEDLES & DOUBLE HEAD DUAL WORKSTATION',
      'AUTOMATIC SYNCHRONIZED TRIMMING SYSTEM',
      'DUAL THREAD BREAKING SENSORS',
      'MANUAL, SEMI-AUTOMATIC & FULLY AUTOMATIC MODES',
      'HIGH SPEED SYNCHRONIZED COLOUR CHANGING',
      'DUAL SEQUENCE, CORDING & BEADING SUPPORT',
      'PHOTOS, T-SHIRTS, SAREES, FABRICS COMPATIBLE',
      'USB & INDUSTRIAL WIFI CONNECTIVITY',
      'DUAL EMERGENCY STOP CONTROLS',
      '1200 RPM HIGH SPEED CONTINUOUS PRODUCTION'
    ]
  },
  'single-head-pro': {
    id: 'single-head-pro',
    name: 'M&D Single Head Pro Model',
    frameSize: '20*32 Frame Size',
    price: '₹380,000.00',
    status: 'Available For Immediate Dispatch',
    desc: 'High-performance professional single head model with heavy-duty structural stability, speed, and premium finishes.',
    image: 'assets/machine_pro_model.jpg',
    specs: [
      'A15 PRO DAHAO SOFTWARE',
      '10" INC TOUCH SCREEN DISPLAY',
      '20"X 32" (500 X 800) REINFORCED FRAME SIZE',
      '12 NEEDLES & SINGLE HEAD PRO MACHINE',
      'HEAVY-DUTY INDUSTRIAL JAPANESE ROTARY HOOK',
      'AUTOMATIC ROTARY THREAD TRIMMING SYSTEM',
      'INTELLIGENT THREAD BREAKAGE MONITORING',
      'FULL AUTOMATIC PATTERN COLOR SEQUENCING',
      'ADVANCED MULTI-BEAD & SEQUENCE ATTACHMENT READY',
      'DESIGNER BRIDAL WEAR, CAPS & LOGO EMBROIDERY',
      'USB 3.0 & DIRECT NETWORK DATA TRANSFER',
      'FAIL-SAFE INDUSTRIAL EMERGENCY STOP',
      '1200 RPM SPEED WITH HEAVY VIBRATION-DAMPENED FRAME'
    ]
  }
};

// 4K Ultra-HD Designer Blouses Database
const BLOUSE_4K_CATALOG = [
  {
    id: 'bridal-crimson',
    theme: 'crimson',
    title: 'Royal Crimson Bridal Maggam Blouse',
    specs: '88,500 Stitches • 4L Pearl & Sequence • 1200 RPM Dahao A15 Pro',
    density: '99.8% Precision',
    densityPct: '98%',
    image: 'assets/blouse_4k_bridal_crimson.jpg',
    desc: 'Heavy bridal neckline featuring dense metallic gold bullion zari, 4-line continuous pearl beading, Kundan stone encapsulation, and synchronized sequence cut-work stitched natively on M&D workstations.'
  },
  {
    id: 'gold-zardozi',
    theme: 'obsidian',
    title: 'Gold Tissue Antique Zardozi Work',
    specs: '94,200 Stitches • Honeycomb Jaal & Cording • Ultra-Fine 0.1mm Pitch',
    density: '100% Zero-Defect',
    densityPct: '100%',
    image: 'assets/blouse_4k_gold_zardozi.jpg',
    desc: 'Intricate 3D honeycomb lattice back-neck with continuous gold cording relief, microscopic stitch tensioning, and antique temple coin embellishments.'
  },
  {
    id: 'emerald-peacock',
    theme: 'emerald',
    title: 'Royal Emerald Peacock Maggam Blouse',
    specs: '91,800 Stitches • Dual Peacock Motif & Zari • 1200 RPM Dahao A15 Pro',
    density: '99.6% Precision',
    densityPct: '96%',
    image: 'assets/blouse_4k_emerald_peacock.jpg',
    desc: 'Traditional South Indian peacock medallion crafted on rich bottle-green pure silk with 4-line graduated beads, French knot simulation, and radiant micro-sequins.'
  },
  {
    id: 'royal-sapphire',
    theme: 'sapphire',
    title: 'Royal Sapphire & Amethyst Blouse',
    specs: '86,400 Stitches • Silver-Gold Bullion & Swarovski • 1200 RPM',
    density: '99.4% Precision',
    densityPct: '94%',
    image: 'assets/blouse_4k_royal_sapphire.jpg',
    desc: 'Couture midnight sapphire silk base with double silver-gilt thread tracks, crystal droplet clusters, and floral trellis sleeves produced with millimeter precision.'
  },
  {
    id: 'ivory-pearl',
    theme: 'ivory',
    title: 'Imperial Ivory & Freshwater Pearl Blouse',
    specs: '96,700 Stitches • 4L Pure Pearl Device & Muted Gold • Zero Distortion',
    density: '99.9% Micro-Tension',
    densityPct: '99%',
    image: 'assets/blouse_4k_ivory_pearl.jpg',
    desc: 'Aristocratic raw silk blouse adorned with 4-line concentric pearl loops, champagne thread relief, cut-bead floral vines, and delicate scalloped border finishing.'
  },
  {
    id: 'rani-pink',
    theme: 'crimson',
    title: 'Rani Pink Kanchipuram Maggam Blouse',
    specs: '93,100 Stitches • Bridal Kasu & Stone Work • 1200 RPM Dahao A15 Pro',
    density: '99.7% Precision',
    densityPct: '97%',
    image: 'assets/blouse_4k_rani_pink.jpg',
    desc: 'Opulent wedding blouse on vibrant magenta silk featuring Lakshmi Kasu coins, dual-row pearl cording, heavy elbow sleeve borders, and radiant golden zari arches.'
  },
  {
    id: 'temple-nakshi',
    theme: 'obsidian',
    title: 'South Indian Temple Nakshi & Kasu Work Blouse',
    specs: '104,000 Stitches • Lakshmi Kasu & Ruby Cabochons • 1200 RPM Dahao A15 Pro',
    density: '100% Zero-Defect',
    densityPct: '100%',
    image: 'assets/blouse_4k_temple_nakshi.jpg',
    desc: 'Traditional mustard-gold Kanchipuram silk with embossed Goddess Lakshmi coins (kasu mala), antique dull-gold zari nakshi filigree, dense ruby cabochons, and pearl scalloping.'
  },
  {
    id: 'lavender-mirror',
    theme: 'sapphire',
    title: 'Royal Lavender Mirror & Silver Zari Blouse',
    specs: '87,500 Stitches • Authentic Aabla Mirror Jaal • 1200 RPM Dahao A15 Pro',
    density: '99.5% Precision',
    densityPct: '95%',
    image: 'assets/blouse_4k_lavender_mirror.jpg',
    desc: 'Contemporary royal lilac silk with hexagonal jaal embedded with authentic reflective micro-mirrors, cut-dana seed beads, and scalloped sweetheart neck embroidery.'
  },
  {
    id: 'maroon-velvet',
    theme: 'crimson',
    title: 'Deep Maroon Velvet Mughal Zardozi Blouse',
    specs: '112,000 Stitches • Heavy Dabka & Pearl Droplets • 1200 RPM Dahao A15 Pro',
    density: '99.9% Micro-Tension',
    densityPct: '99%',
    image: 'assets/blouse_4k_maroon_velvet_bridal.jpg',
    desc: 'Opulent royal wedding couture on deep wine velvet with dense antique gold dabka relief wirework, hanging pearl drops, French knots, and floral creeper trellis sleeves.'
  },
  {
    id: 'turquoise-pattu',
    theme: 'emerald',
    title: 'Royal Turquoise Pattu Silk Lotus Blouse',
    specs: '98,400 Stitches • Golden Lotus Motif & Pearl Piping • 1200 RPM Dahao A15 Pro',
    density: '99.6% Precision',
    densityPct: '96%',
    image: 'assets/blouse_4k_turquoise_pattu.jpg',
    desc: 'High-contrast peacock blue silk featuring blooming golden lotus medallions with layered zari relief, continuous pearl string piping, Kundan stones, and grand cuffs.'
  },
  {
    id: 'haldi-yellow',
    theme: 'obsidian',
    title: 'Haldi Yellow Maggam Cutwork Blouse',
    specs: '89,600 Stitches • Cutwork Boat Neck & Beaded Potli • 1200 RPM Dahao A15 Pro',
    density: '99.8% Precision',
    densityPct: '98%',
    image: 'assets/blouse_4k_haldi_yellow_potli.jpg',
    desc: 'Festive raw silk with cutwork boat neck, scalloped pearl droplets, parrot & floral vines in emerald and crimson silks, and hanging beaded potli embellishments.'
  },
  {
    id: 'coral-peach',
    theme: 'ivory',
    title: 'Pastel Coral Peach Organza Blouse',
    specs: '92,300 Stitches • Sheer Floral Jaal & Champagne Zari • 1200 RPM Dahao A15 Pro',
    density: '99.4% Precision',
    densityPct: '94%',
    image: 'assets/blouse_4k_coral_peach_zari.jpg',
    desc: 'Modern reception couture with semi-sheer organza sleeves, delicate champagne zari vines, pearl cluster edging, and subtle micro-sequin glimmer for understated elegance.'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // 1. Navbar Sticky & ScrollSpy Detection
  // =========================================================================
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');
  const sections = document.querySelectorAll('section[id], div[id="designs-gallery"]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }

    // ScrollSpy
    let current = '';
    const scrollPos = window.scrollY + 200;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });

  // =========================================================================
  // 2. Mobile Drawer Navigation
  // =========================================================================
  const menuToggle = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const drawerClose = document.getElementById('drawer-close');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  const openDrawer = () => {
    mobileNav?.classList.add('open');
    mobileNav?.setAttribute('aria-hidden', 'false');
    menuToggle?.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    mobileNav?.classList.remove('open');
    mobileNav?.setAttribute('aria-hidden', 'true');
    menuToggle?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  if (menuToggle) menuToggle.addEventListener('click', openDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  mobileLinks.forEach(link => link.addEventListener('click', closeDrawer));

  // =========================================================================
  // 3. Live Machine Stitching Demonstration Video Player (Separate & Unobstructed)
  // =========================================================================
  const stitchingVideo = document.getElementById('live-stitching-video') || document.getElementById('hero-video');
  const videoTimer = document.getElementById('video-timer');
  const videoDuration = document.getElementById('video-duration');
  const videoPlayBtn = document.getElementById('video-play-btn');
  const playBtnIcon = document.getElementById('play-btn-icon');
  const playBtnLabel = document.getElementById('play-btn-label');
  const videoSoundBtn = document.getElementById('video-sound-btn');
  const soundBtnIcon = document.getElementById('sound-btn-icon');
  const soundBtnLabel = document.getElementById('sound-btn-label');
  const videoProgressWrap = document.getElementById('video-progress-wrap');
  const videoProgressBar = document.getElementById('video-progress-bar');
  const videoFullscreenBtn = document.getElementById('video-fullscreen-btn');

  if (stitchingVideo) {
    const formatTime = (seconds) => {
      if (isNaN(seconds) || seconds === null) return '00:00';
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    stitchingVideo.addEventListener('loadedmetadata', () => {
      if (videoDuration && stitchingVideo.duration) {
        videoDuration.textContent = formatTime(stitchingVideo.duration);
      }
    });

    stitchingVideo.addEventListener('timeupdate', () => {
      if (videoTimer) {
        videoTimer.textContent = formatTime(stitchingVideo.currentTime);
      }
      if (videoProgressBar && stitchingVideo.duration) {
        const pct = (stitchingVideo.currentTime / stitchingVideo.duration) * 100;
        videoProgressBar.style.width = `${pct.toFixed(2)}%`;
      }
    });

    // Toggle Play / Pause
    const togglePlay = () => {
      if (stitchingVideo.paused) {
        stitchingVideo.play();
        if (playBtnIcon) playBtnIcon.textContent = '⏸';
        if (playBtnLabel) playBtnLabel.textContent = 'PAUSE';
      } else {
        stitchingVideo.pause();
        if (playBtnIcon) playBtnIcon.textContent = '▶';
        if (playBtnLabel) playBtnLabel.textContent = 'PLAY';
      }
    };

    if (videoPlayBtn) videoPlayBtn.addEventListener('click', togglePlay);
    stitchingVideo.addEventListener('click', togglePlay);

    // Toggle Sound (Mute / Unmute)
    if (videoSoundBtn) {
      videoSoundBtn.addEventListener('click', () => {
        stitchingVideo.muted = !stitchingVideo.muted;
        if (stitchingVideo.muted) {
          if (soundBtnIcon) soundBtnIcon.textContent = '🔇';
          if (soundBtnLabel) soundBtnLabel.textContent = 'MUTED';
        } else {
          if (soundBtnIcon) soundBtnIcon.textContent = '🔊';
          if (soundBtnLabel) soundBtnLabel.textContent = 'SOUND ON';
        }
      });
    }

    // Scrubber / Seek Progress Bar
    if (videoProgressWrap) {
      videoProgressWrap.addEventListener('click', (e) => {
        const rect = videoProgressWrap.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const ratio = Math.max(0, Math.min(1, clickX / rect.width));
        if (stitchingVideo.duration) {
          stitchingVideo.currentTime = ratio * stitchingVideo.duration;
        }
      });
    }

    // Fullscreen View
    if (videoFullscreenBtn) {
      videoFullscreenBtn.addEventListener('click', () => {
        if (!document.fullscreenElement) {
          stitchingVideo.requestFullscreen?.().catch(() => {});
        } else {
          document.exitFullscreen?.().catch(() => {});
        }
      });
    }

    stitchingVideo.play().catch(() => {
      // Autoplay muted allowed
    });
  }

  // =========================================================================
  // 4. Atelier Color Theme Engine (Obsidian, Crimson, Emerald, Sapphire, Ivory)
  // =========================================================================
  const THEME_METAS = {
    obsidian: { icon: '👑', label: 'OBSIDIAN' },
    crimson: { icon: '🌹', label: 'CRIMSON' },
    emerald: { icon: '🌿', label: 'EMERALD' },
    sapphire: { icon: '💎', label: 'SAPPHIRE' },
    ivory: { icon: '🕊️', label: 'IVORY' }
  };

  const themeMenuBtn = document.getElementById('theme-menu-btn');
  const themeDropdown = document.getElementById('theme-dropdown');
  const themeActiveIcon = document.getElementById('theme-active-icon');
  const themeActiveName = document.getElementById('theme-active-name');
  const desktopThemeBtns = document.querySelectorAll('.theme-option-btn');
  const mobileThemeBtns = document.querySelectorAll('.mobile-theme-btn');

  const applyTheme = (themeName) => {
    const normalized = THEME_METAS[themeName] ? themeName : 'obsidian';
    document.documentElement.setAttribute('data-theme', normalized);
    localStorage.setItem('maanvitha-theme', normalized);

    const meta = THEME_METAS[normalized];
    if (themeActiveIcon) themeActiveIcon.textContent = meta.icon;
    if (themeActiveName) themeActiveName.textContent = meta.label;

    desktopThemeBtns.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-theme') === normalized);
    });

    mobileThemeBtns.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-theme') === normalized);
    });
  };

  // Toggle Theme Dropdown
  if (themeMenuBtn && themeDropdown) {
    themeMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = themeDropdown.classList.contains('open');
      if (isOpen) {
        themeDropdown.classList.remove('open');
        themeDropdown.setAttribute('aria-hidden', 'true');
        themeMenuBtn.setAttribute('aria-expanded', 'false');
      } else {
        themeDropdown.classList.add('open');
        themeDropdown.setAttribute('aria-hidden', 'false');
        themeMenuBtn.setAttribute('aria-expanded', 'true');
      }
    });

    document.addEventListener('click', (e) => {
      if (!themeMenuBtn.contains(e.target) && !themeDropdown.contains(e.target)) {
        themeDropdown.classList.remove('open');
        themeDropdown.setAttribute('aria-hidden', 'true');
        themeMenuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  desktopThemeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const selected = btn.getAttribute('data-theme');
      if (selected) {
        applyTheme(selected);
        themeDropdown?.classList.remove('open');
        themeDropdown?.setAttribute('aria-hidden', 'true');
        themeMenuBtn?.setAttribute('aria-expanded', 'false');
      }
    });
  });

  mobileThemeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const selected = btn.getAttribute('data-theme');
      if (selected) applyTheme(selected);
    });
  });

  // Restore saved theme
  const savedTheme = localStorage.getItem('maanvitha-theme') || localStorage.getItem('manvitha-theme') || 'obsidian';
  applyTheme(savedTheme);

  // =========================================================================
  // 5. Wonderful Gestures Engine: Cursor Aura, Ripple & 3D Tilt
  // =========================================================================

  // A. Pointer Cursor Aura (Smooth Lerp / Transform)
  const cursorDot = document.getElementById('cursor-dot');
  const cursorRing = document.getElementById('cursor-ring');

  if (cursorDot && cursorRing && window.matchMedia('(pointer: fine)').matches) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    }, { passive: true });

    // Smooth trailing ring loop
    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      cursorRing.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      requestAnimationFrame(animateRing);
    };
    requestAnimationFrame(animateRing);

    // Click / touch reactions
    document.addEventListener('mousedown', () => {
      cursorRing.classList.add('cursor-active');
    });
    document.addEventListener('mouseup', () => {
      cursorRing.classList.remove('cursor-active');
    });

    // Expand aura on interactive element hover
    const interactiveSelectors = 'a, button, .blouse-4k-card, .machine-card, .benefit-card, .design-card, .spec-trigger, .theme-option-btn';
    document.querySelectorAll(interactiveSelectors).forEach(el => {
      el.addEventListener('mouseenter', () => cursorRing.classList.add('hovering'));
      el.addEventListener('mouseleave', () => cursorRing.classList.remove('hovering'));
    });
  }

  // B. Touch & Click Ripple Feedback
  document.addEventListener('click', (e) => {
    // Only trigger if inside viewport
    if (e.clientX === 0 && e.clientY === 0) return;

    const ripple = document.createElement('div');
    ripple.className = 'touch-ripple';
    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;
    document.body.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 750);
  });

  // C. 3D Card Tilt Gesture on hover
  const tiltElements = document.querySelectorAll('.gesture-tilt, .machine-card, .benefit-card');
  tiltElements.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6; // max 6 deg
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  // =========================================================================
  // 6. 4K Blouse Catalog Theme Filter Bar
  // =========================================================================
  const filterPills = document.querySelectorAll('.blouse-filter-pill');
  const blouseCards = document.querySelectorAll('.blouse-4k-card');

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const filter = pill.getAttribute('data-filter') || 'all';

      blouseCards.forEach(card => {
        const cardTheme = card.getAttribute('data-theme');
        if (filter === 'all' || cardTheme === filter) {
          card.style.display = '';
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            card.style.opacity = '1';
          }, 30);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // =========================================================================
  // 7. 4K Ultra-HD Macro Inspection Studio Modal (Loupe, Zoom, Pan, Nav)
  // =========================================================================
  const blouseModal = document.getElementById('blouse-4k-modal');
  const blouseModalCloseBtn = document.getElementById('blouse-modal-close-btn');
  const blouseModalImg = document.getElementById('blouse-modal-img');
  const blouseLoupeLens = document.getElementById('blouse-loupe-lens');
  const blouseModalTitle = document.getElementById('blouse-modal-title');
  const blouseModalSpecs = document.getElementById('blouse-modal-specs');
  const blouseModalDesc = document.getElementById('blouse-modal-desc');
  const stitchTelemetryVal = document.getElementById('stitch-telemetry-val');
  const stitchMeterFill = document.getElementById('stitch-meter-fill');
  const blouseModalEnquireBtn = document.getElementById('blouse-modal-enquire-btn');
  const blouseModalWaBtn = document.getElementById('blouse-modal-wa-btn');

  // Zoom & Loupe Controls
  const zoomStage = document.getElementById('zoom-stage');
  const loupeToggleBtn = document.getElementById('studio-loupe-toggle');
  const zoomInBtn = document.getElementById('studio-zoom-in');
  const zoomOutBtn = document.getElementById('studio-zoom-out');
  const zoomResetBtn = document.getElementById('studio-zoom-reset');
  const zoomDisplay = document.getElementById('studio-zoom-display');
  const studioPrevBtn = document.getElementById('studio-prev-btn');
  const studioNextBtn = document.getElementById('studio-next-btn');
  const studioThumbs = document.querySelectorAll('.studio-thumb-item');

  let activeBlouseIndex = 0;
  let zoomScale = 1;
  let isLoupeEnabled = false;
  let isPanning = false;
  let panStartX = 0;
  let panStartY = 0;
  let translateX = 0;
  let translateY = 0;

  const updateModalContent = (index) => {
    activeBlouseIndex = (index + BLOUSE_4K_CATALOG.length) % BLOUSE_4K_CATALOG.length;
    const item = BLOUSE_4K_CATALOG[activeBlouseIndex];
    if (!item) return;

    if (blouseModalImg) {
      blouseModalImg.src = item.image;
      blouseModalImg.alt = item.title;
    }

    if (blouseLoupeLens) {
      blouseLoupeLens.style.backgroundImage = `url('${item.image}')`;
      blouseLoupeLens.style.backgroundSize = '350%';
    }

    if (blouseModalTitle) blouseModalTitle.textContent = item.title;
    if (blouseModalSpecs) blouseModalSpecs.textContent = item.specs;
    if (blouseModalDesc) blouseModalDesc.textContent = item.desc;
    if (stitchTelemetryVal) stitchTelemetryVal.textContent = item.density;
    if (stitchMeterFill) stitchMeterFill.style.width = item.densityPct;

    // Prefill Buttons
    if (blouseModalEnquireBtn) {
      blouseModalEnquireBtn.href = '#contact';
      blouseModalEnquireBtn.onclick = () => {
        closeBlouseModal();
        prefillMachine(`Workstation Capable of ${item.title}`);
      };
    }

    if (blouseModalWaBtn) {
      const waMsg = encodeURIComponent(`Hi Maanvitha Designers, I am inspecting the output style "${item.title}" on your website. I want to buy an embroidery machine capable of producing this style.`);
      blouseModalWaBtn.href = `https://wa.me/919985578276?text=${waMsg}`;
    }

    // Update Thumbnail Strip
    studioThumbs.forEach((thumb, i) => {
      thumb.classList.toggle('active', i === activeBlouseIndex);
    });

    // Reset Zoom on switch
    resetZoom();
  };

  const applyZoom = (newScale) => {
    zoomScale = Math.min(Math.max(1, newScale), 3.2);
    if (zoomScale === 1) {
      translateX = 0;
      translateY = 0;
    }
    if (blouseModalImg) {
      blouseModalImg.style.transform = `scale(${zoomScale}) translate(${translateX}px, ${translateY}px)`;
    }
    if (zoomDisplay) {
      zoomDisplay.textContent = `Zoom: ${Math.round(zoomScale * 100)}%`;
    }
  };

  const resetZoom = () => {
    translateX = 0;
    translateY = 0;
    applyZoom(1);
  };

  const openBlouseModal = (index = 0) => {
    if (!blouseModal) return;
    updateModalContent(index);
    blouseModal.showModal();
    document.body.style.overflow = 'hidden';
  };

  const closeBlouseModal = () => {
    if (blouseModal) {
      blouseModal.close();
      document.body.style.overflow = '';
      if (blouseLoupeLens) blouseLoupeLens.style.display = 'none';
      resetZoom();
    }
  };

  // Bind Open Buttons across cards & swatches
  document.querySelectorAll('.open-4k-modal-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const idx = parseInt(btn.getAttribute('data-index') || '0', 10);
      openBlouseModal(idx);
    });
  });

  // Design Swatches Click
  document.querySelectorAll('.design-card').forEach((card, idx) => {
    card.addEventListener('click', () => {
      openBlouseModal(idx % BLOUSE_4K_CATALOG.length);
    });
  });

  if (blouseModalCloseBtn) {
    blouseModalCloseBtn.addEventListener('click', closeBlouseModal);
  }

  // Backdrop click close
  if (blouseModal) {
    blouseModal.addEventListener('click', (e) => {
      const rect = blouseModal.getBoundingClientRect();
      const isInDialog = (
        rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX && e.clientX <= rect.left + rect.width
      );
      if (!isInDialog) closeBlouseModal();
    });
  }

  // Loupe Lens Toggle
  if (loupeToggleBtn && blouseLoupeLens) {
    loupeToggleBtn.addEventListener('click', () => {
      isLoupeEnabled = !isLoupeEnabled;
      loupeToggleBtn.classList.toggle('active', isLoupeEnabled);
      blouseLoupeLens.style.display = isLoupeEnabled ? 'block' : 'none';
    });
  }

  // Loupe Cursor Follow & Magnification
  if (zoomStage && blouseLoupeLens) {
    zoomStage.addEventListener('mousemove', (e) => {
      if (!isLoupeEnabled) return;
      const rect = zoomStage.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
        blouseLoupeLens.style.display = 'none';
        return;
      }

      blouseLoupeLens.style.display = 'block';
      blouseLoupeLens.style.left = `${x}px`;
      blouseLoupeLens.style.top = `${y}px`;

      const posX = (x / rect.width) * 100;
      const posY = (y / rect.height) * 100;
      blouseLoupeLens.style.backgroundPosition = `${posX.toFixed(1)}% ${posY.toFixed(1)}%`;
    });

    zoomStage.addEventListener('mouseleave', () => {
      if (isLoupeEnabled && blouseLoupeLens) {
        blouseLoupeLens.style.display = 'none';
      }
    });

    // Mouse Wheel Zoom
    zoomStage.addEventListener('wheel', (e) => {
      e.preventDefault();
      const delta = e.deltaY < 0 ? 0.2 : -0.2;
      applyZoom(zoomScale + delta);
    }, { passive: false });

    // Drag to pan when zoomed
    zoomStage.addEventListener('mousedown', (e) => {
      if (zoomScale > 1) {
        isPanning = true;
        panStartX = e.clientX - translateX;
        panStartY = e.clientY - translateY;
        zoomStage.classList.add('is-dragging');
      }
    });

    window.addEventListener('mousemove', (e) => {
      if (isPanning && zoomScale > 1) {
        translateX = e.clientX - panStartX;
        translateY = e.clientY - panStartY;
        if (blouseModalImg) {
          blouseModalImg.style.transform = `scale(${zoomScale}) translate(${translateX}px, ${translateY}px)`;
        }
      }
    });

    window.addEventListener('mouseup', () => {
      isPanning = false;
      zoomStage?.classList.remove('is-dragging');
    });
  }

  // Studio Zoom Buttons
  if (zoomInBtn) zoomInBtn.addEventListener('click', () => applyZoom(zoomScale + 0.3));
  if (zoomOutBtn) zoomOutBtn.addEventListener('click', () => applyZoom(zoomScale - 0.3));
  if (zoomResetBtn) zoomResetBtn.addEventListener('click', resetZoom);

  // Prev / Next Arrows
  if (studioPrevBtn) studioPrevBtn.addEventListener('click', () => updateModalContent(activeBlouseIndex - 1));
  if (studioNextBtn) studioNextBtn.addEventListener('click', () => updateModalContent(activeBlouseIndex + 1));

  // Keyboard Arrow Navigation
  window.addEventListener('keydown', (e) => {
    if (blouseModal?.open) {
      if (e.key === 'ArrowLeft') updateModalContent(activeBlouseIndex - 1);
      if (e.key === 'ArrowRight') updateModalContent(activeBlouseIndex + 1);
      if (e.key === 'Escape') closeBlouseModal();
    }
  });

  // Thumbnails Strip Click
  studioThumbs.forEach((thumb, idx) => {
    thumb.addEventListener('click', () => {
      updateModalContent(idx);
    });
  });

  // =========================================================================
  // 8. Why Us Interactive Benefit Cards & Image Switcher
  // =========================================================================
  const benefitCards = document.querySelectorAll('.benefit-card');
  const whyUsDisplayImg = document.getElementById('why-us-display-img');
  const whyUsCaption = document.getElementById('why-us-caption');

  benefitCards.forEach(card => {
    const handleSwitch = () => {
      benefitCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');

      const newImgSrc = card.getAttribute('data-img');
      const newCaption = card.getAttribute('data-caption');

      if (whyUsDisplayImg && newImgSrc) {
        whyUsDisplayImg.style.opacity = '0.4';
        setTimeout(() => {
          whyUsDisplayImg.src = newImgSrc;
          whyUsDisplayImg.style.opacity = '1';
        }, 150);
      }

      if (whyUsCaption && newCaption) {
        whyUsCaption.textContent = newCaption;
      }
    };

    card.addEventListener('mouseenter', handleSwitch);
    card.addEventListener('click', handleSwitch);
  });

  // =========================================================================
  // 9. Machine Specifications Modal Dialog
  // =========================================================================
  const specsModal = document.getElementById('specs-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalMachineImg = document.getElementById('modal-machine-img');
  const modalFrameSize = document.getElementById('modal-frame-size');
  const modalStatus = document.getElementById('modal-status');
  const modalMachineTitle = document.getElementById('modal-machine-title');
  const modalMachinePrice = document.getElementById('modal-machine-price');
  const modalMachineDesc = document.getElementById('modal-machine-desc');
  const modalSpecsItems = document.getElementById('modal-specs-items');
  const modalEnquireBtn = document.getElementById('modal-enquire-btn');
  const modalWhatsappBtn = document.getElementById('modal-whatsapp-btn');

  const openSpecsModal = (machineId) => {
    const data = MACHINES_DATA[machineId] || MACHINES_DATA['butterfly-single-head'];
    if (!data || !specsModal) return;

    if (modalMachineImg) {
      modalMachineImg.src = data.image;
      modalMachineImg.alt = data.name;
    }
    if (modalFrameSize) modalFrameSize.textContent = data.frameSize;
    if (modalStatus) modalStatus.textContent = data.status;
    if (modalMachineTitle) modalMachineTitle.textContent = data.name;
    if (modalMachinePrice) modalMachinePrice.textContent = data.price;
    if (modalMachineDesc) modalMachineDesc.textContent = data.desc;

    // Populate specs bullets
    if (modalSpecsItems) {
      modalSpecsItems.innerHTML = '';
      data.specs.forEach(spec => {
        const li = document.createElement('li');
        li.textContent = spec;
        modalSpecsItems.appendChild(li);
      });
    }

    // Enquire link with pre-selection
    if (modalEnquireBtn) {
      modalEnquireBtn.href = '#contact';
      modalEnquireBtn.onclick = () => {
        closeSpecsModal();
        prefillMachine(data.name);
      };
    }

    // WhatsApp Direct link
    if (modalWhatsappBtn) {
      const waText = encodeURIComponent(`Hi Maanvitha Designers, I am interested in knowing more about ${data.name} (${data.price}).`);
      modalWhatsappBtn.href = `https://wa.me/919985578276?text=${waText}`;
    }

    specsModal.showModal();
    document.body.style.overflow = 'hidden';
  };

  const closeSpecsModal = () => {
    if (specsModal) {
      specsModal.close();
      document.body.style.overflow = '';
    }
  };

  document.querySelectorAll('.open-specs-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const machineId = btn.getAttribute('data-machine');
      openSpecsModal(machineId);
    });
  });

  document.querySelectorAll('.spec-trigger').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      const machineId = trigger.getAttribute('data-machine');
      if (machineId) {
        openSpecsModal(machineId);
      }
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeSpecsModal);
  }

  if (specsModal) {
    specsModal.addEventListener('click', (e) => {
      const rect = specsModal.getBoundingClientRect();
      const isInDialog = (
        rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX && e.clientX <= rect.left + rect.width
      );
      if (!isInDialog) {
        closeSpecsModal();
      }
    });
  }

  // =========================================================================
  // 10. Form Prefill & Submission Logic
  // =========================================================================
  const machineSelect = document.getElementById('quote-machine');

  const prefillMachine = (machineName) => {
    if (!machineSelect) return;
    for (let i = 0; i < machineSelect.options.length; i++) {
      if (machineSelect.options[i].value.includes(machineName) || machineName.includes(machineSelect.options[i].text)) {
        machineSelect.selectedIndex = i;
        break;
      }
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  document.querySelectorAll('.open-enquiry-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const machineName = btn.getAttribute('data-machine');
      if (machineName) prefillMachine(machineName);
    });
  });

  const quoteForm = document.getElementById('main-quote-form');
  const formFeedback = document.getElementById('form-feedback');

  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('quote-name')?.value.trim();
      const city = document.getElementById('quote-city')?.value.trim();
      const mobile = document.getElementById('quote-mobile')?.value.trim();
      const machine = document.getElementById('quote-machine')?.value;
      const notes = document.getElementById('quote-notes')?.value.trim();

      if (!name || !city || !mobile || !machine) {
        if (formFeedback) {
          formFeedback.className = 'form-feedback-message error';
          formFeedback.textContent = 'Please fill out all the fields so we can generate your quotation.';
          formFeedback.style.display = 'block';
        }
        return;
      }

      if (formFeedback) {
        formFeedback.className = 'form-feedback-message success';
        formFeedback.innerHTML = `✓ Thank you, <strong>${name}</strong>! Your quote request for <strong>${machine}</strong> has been received. Our team will call you at <strong>${mobile}</strong> shortly.`;
        formFeedback.style.display = 'block';
      }

      const waMsg = encodeURIComponent(
        `Hello Maanvitha Designers,\n` +
        `Name: ${name}\n` +
        `City: ${city}\n` +
        `Mobile: ${mobile}\n` +
        `Inquiry for: ${machine}` +
        (notes ? `\nRequirements: ${notes}` : '')
      );

      setTimeout(() => {
        const forwardToWhatsApp = confirm("Would you also like to open WhatsApp directly with your quote request to get instant answers from Ajay Kumar Reddy?");
        if (forwardToWhatsApp) {
          window.open(`https://wa.me/919985578276?text=${waMsg}`, '_blank');
        }
      }, 700);

      quoteForm.reset();
    });
  }

  // =========================================================================
  // 4L Fully Furnished Instrument Suite Interactive Switcher
  // =========================================================================
  const instrumentData = {
    'four-beads': {
      src: 'assets/device_4l_four_beads_studio.jpg',
      alt: '4L Four-Beads Automatic Dispenser Studio View',
      title: '4L Four-Beads Automatic Dispenser',
      desc: 'Robotic multi-channel feeder delivering 2mm, 3mm, 4mm, and 5mm glass and pearl beads with micro-stepper motor precision.',
      specs: ['4 Micro-Lines', 'Dahao A15 Pro', 'Zero-Drop Sensor']
    },
    'sequence': {
      src: 'assets/device_4l_sequence_studio.jpg',
      alt: '4L Four Beads With Synchronized Sequence Device Studio View',
      title: '4L Four Beads With Synchronized Sequence Device',
      desc: 'Dual-action robotic embroidery attachment head mounting rotating sequin disc reel alongside 4-channel micro-bead guide tubes at 1000 RPM.',
      specs: ['Dual-Action', '1000 RPM Sequin', 'Optical Stop Sensor']
    }
  };

  const featuredImg = document.getElementById('instrument-featured-img');
  const hudTitle = document.getElementById('instrument-hud-title');
  const hudDesc = document.getElementById('instrument-hud-desc');
  const hudSpecs = document.getElementById('instrument-hud-specs');

  const switchInstrument = (key) => {
    const data = instrumentData[key];
    if (!data || !featuredImg) return;

    featuredImg.style.opacity = '0.3';
    setTimeout(() => {
      featuredImg.src = data.src;
      featuredImg.alt = data.alt;
      if (hudTitle) hudTitle.textContent = data.title;
      if (hudDesc) hudDesc.textContent = data.desc;
      if (hudSpecs) {
        hudSpecs.innerHTML = data.specs.map(s => `<span class="spec-chip">${s}</span>`).join('');
      }
      featuredImg.style.opacity = '1';
    }, 150);

    document.querySelectorAll('.instrument-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-instrument') === key);
    });
    document.querySelectorAll('.instrument-thumb-card').forEach(card => {
      card.classList.toggle('active', card.getAttribute('data-instrument') === key);
    });
  };

  // =========================================================================
  // 13. Maanvitha C Body Pro Media Switcher (Real Photo vs Specs Poster)
  // =========================================================================
  const cBodyMainImg = document.getElementById('c-body-main-img');
  const cBodyTabs = document.querySelectorAll('.c-body-tab-btn');
  const cBodyThumbs = document.querySelectorAll('.c-body-thumb');

  const switchCBodyMedia = (targetSrc) => {
    if (!cBodyMainImg || !targetSrc) return;
    cBodyMainImg.style.opacity = '0';
    setTimeout(() => {
      cBodyMainImg.src = targetSrc;
      cBodyMainImg.style.opacity = '1';
    }, 150);

    cBodyTabs.forEach(tab => {
      const isPoster = tab.getAttribute('data-target') === 'poster';
      const active = isPoster ? targetSrc.includes('poster') : !targetSrc.includes('poster');
      tab.classList.toggle('active', active);
    });

    cBodyThumbs.forEach(thumb => {
      thumb.classList.toggle('active', thumb.getAttribute('data-img') === targetSrc);
    });
  };

  cBodyTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      const target = tab.getAttribute('data-target');
      const src = target === 'poster' ? 'assets/maanvitha_c_body_pro_poster.jpg' : 'assets/maanvitha_c_body_pro_real.jpg';
      switchCBodyMedia(src);
    });
  });

  cBodyThumbs.forEach(thumb => {
    thumb.addEventListener('click', (e) => {
      e.preventDefault();
      const src = thumb.getAttribute('data-img');
      if (src) switchCBodyMedia(src);
    });
  });
});

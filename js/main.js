// ============================================================
// 🔗 EDIT ALL YOUR SOCIAL MEDIA LINKS IN ONE PLACE:
// ============================================================
const SOCIAL_CONFIG = {
  YOUR_INSTAGRAM_URL: "https://www.instagram.com/00.hariom_?stkn=MXJ3cHdyM2plcnhoeA==",
  YOUR_LINKEDIN_URL:  "https://www.linkedin.com/in/hariom-kumar-ray-604155287/",
  YOUR_GITHUB_URL:    "https://github.com/hariomkumar4572",
  YOUR_FACEBOOK_URL:  "https://www.facebook.com/share/1D9sGregto/",
  YOUR_TWITTER_URL:   "https://x.com/hariomr36901853",
  YOUR_EMAIL:         "hariom995522@gmail.com"
};

/**
 * Er. Hariom Kumar Ray - Portfolio & Digital Identity
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Drawer Navigation
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const closeNavBtn = document.getElementById('closeNavBtn');
  const mobileNav = document.getElementById('mobileNav');
  const mobileOverlay = document.getElementById('mobileOverlay');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  function openMobileNav() {
    mobileNav.classList.add('open');
    mobileOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    mobileNav.classList.remove('open');
    mobileOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (hamburgerBtn) hamburgerBtn.addEventListener('click', openMobileNav);
  if (closeNavBtn) closeNavBtn.addEventListener('click', closeMobileNav);
  if (mobileOverlay) mobileOverlay.addEventListener('click', closeMobileNav);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });

  // 2. Sticky Navbar & Back to Top Toggle
  const navbar = document.getElementById('mainNav');
  const backToTopBtn = document.getElementById('backToTopBtn');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    if (scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    if (scrollY > 500) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 3. Scroll Reveal Animation
  const revealElements = document.querySelectorAll('.reveal-init');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.12
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('reveal-active'));
  }

  // 4. Active Link Highlight (ScrollSpy)
  const sections = document.querySelectorAll('section[id]');
  const desktopLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.scrollY;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    desktopLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });

  // 5. Interactive Project Details Modal
  const openModalBtn = document.getElementById('openProjectModalBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const projectModal = document.getElementById('projectModal');

  function openProjectModal() {
    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    projectModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (openModalBtn) openModalBtn.addEventListener('click', openProjectModal);
  if (closeModalBtn) closeModalBtn.addEventListener('click', closeProjectModal);

  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        closeProjectModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal && projectModal.classList.contains('active')) {
      closeProjectModal();
    }
  });

  // 6. Copy Email to Clipboard
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const copyToast = document.getElementById('copyToast');
  const emailTextEl = document.getElementById('emailAddressText');

  if (copyEmailBtn && emailTextEl) {
    copyEmailBtn.addEventListener('click', () => {
      const email = emailTextEl.innerText.trim();
      navigator.clipboard.writeText(email).then(() => {
        copyToast.classList.add('show');
        setTimeout(() => {
          copyToast.classList.remove('show');
        }, 2400);
      }).catch(err => {
        console.error('Failed to copy: ', err);
      });
    });
  }

  // 7. Dynamic Current Year
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

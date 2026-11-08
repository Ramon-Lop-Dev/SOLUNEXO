/**
 * SOLUNEXO - Main JavaScript
 * Manejo de interacciones, cambio de moneda, demos en vivo y cotización WhatsApp.
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollEffects();
  initMobileNav();
  initDemoModal();
});

// 1. Efecto Scroll Reveal & Header
function initScrollEffects() {
  const revealElements = document.querySelectorAll('.reveal, section, main .group');
  revealElements.forEach((element, index) => {
    if (!element.classList.contains('reveal')) {
      element.classList.add('reveal');
    }
    element.style.transitionDelay = `${Math.min(index % 6, 5) * 60}ms`;
  });

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px 60px 0px' });

  revealElements.forEach(element => revealObserver.observe(element));

  // Sombra y fondo dinámico en header al hacer scroll
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('shadow-md', 'bg-white/95');
      header.classList.remove('bg-white/80');
    } else {
      header.classList.remove('shadow-md', 'bg-white/95');
      header.classList.add('bg-white/80');
    }
  }, { passive: true });
}

// 2. Conmutador de Moneda (USD / NIO Córdobas)
function setCurrency(type) {
  const usdBtn = document.getElementById('btn-usd');
  const nioBtn = document.getElementById('btn-nio');
  const priceElements = document.querySelectorAll('.price-display');

  if (!usdBtn || !nioBtn) return;

  if (type === 'USD') {
    usdBtn.className = 'px-4 py-1.5 rounded-xl text-xs font-bold transition-all bg-brand-blue text-white shadow-sm';
    nioBtn.className = 'px-4 py-1.5 rounded-xl text-xs font-semibold transition-all text-brand-muted hover:text-brand-dark';
    priceElements.forEach(el => {
      el.textContent = el.getAttribute('data-usd');
    });
    document.querySelectorAll('.currency-suffix').forEach(el => {
      el.textContent = el.getAttribute('data-usd');
    });
  } else {
    nioBtn.className = 'px-4 py-1.5 rounded-xl text-xs font-bold transition-all bg-brand-blue text-white shadow-sm';
    usdBtn.className = 'px-4 py-1.5 rounded-xl text-xs font-semibold transition-all text-brand-muted hover:text-brand-dark';
    priceElements.forEach(el => {
      el.textContent = el.getAttribute('data-nio');
    });
    document.querySelectorAll('.currency-suffix').forEach(el => {
      el.textContent = el.getAttribute('data-nio');
    });
  }
}

// 3. Formulario Rápido hacia WhatsApp
function handleQuickQuote(e) {
  e.preventDefault();
  const name = document.getElementById('quote-name').value.trim();
  const business = document.getElementById('quote-business').value.trim();
  const phone = document.getElementById('quote-phone').value.trim();
  const sector = document.getElementById('quote-sector').value;

  const text = `Hola SOLUNEXO, mi nombre es ${name} de "${business}". Deseo cotizar una página web para ${sector}. Mi número es ${phone}.`;
  const url = `https://wa.me/50585872276?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

// 4. Modal de Vista Previa de Demos en Vivo
let currentDemoUrl = '';

function initDemoModal() {
  const modal = document.getElementById('demo-modal');
  if (!modal) return;

  // Botón cerrar
  const closeBtn = document.getElementById('close-demo-modal');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeDemoModal);
  }

  // Cerrar al hacer clic fuera del diálogo
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeDemoModal();
    }
  });

  // Cerrar con Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeDemoModal();
    }
  });

  // Controles de dispositivo (Desktop, Tablet, Mobile)
  const deviceButtons = document.querySelectorAll('.demo-device-btn');
  const iframe = document.getElementById('demo-frame');

  deviceButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const mode = btn.getAttribute('data-mode');
      deviceButtons.forEach(b => {
        b.classList.remove('bg-white', 'text-brand-blue', 'shadow-sm');
        b.classList.add('text-brand-muted');
      });
      btn.classList.add('bg-white', 'text-brand-blue', 'shadow-sm');
      btn.classList.remove('text-brand-muted');

      if (iframe) {
        iframe.className = `demo-frame mode-${mode}`;
      }
    });
  });
}

function openDemoPreview(url, title) {
  currentDemoUrl = url;
  const modal = document.getElementById('demo-modal');
  const iframe = document.getElementById('demo-frame');
  const titleEl = document.getElementById('demo-modal-title');
  const openExternalBtn = document.getElementById('demo-modal-external');

  if (titleEl) titleEl.textContent = title || 'Demo en Vivo';
  if (openExternalBtn) openExternalBtn.href = url;
  if (iframe) iframe.src = url;

  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeDemoModal() {
  const modal = document.getElementById('demo-modal');
  const iframe = document.getElementById('demo-frame');

  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
  if (iframe) {
    iframe.src = 'about:blank';
  }
}

// 5. Menú Móvil
function initMobileNav() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('mobile-menu-icon');
  if (!menuBtn || !mobileMenu) return;

  const closeMenu = () => {
    mobileMenu.classList.add('hidden');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.setAttribute('aria-label', 'Abrir Menú');
    if (menuIcon) menuIcon.textContent = 'menu';
  };

  menuBtn.addEventListener('click', () => {
    const willOpen = mobileMenu.classList.contains('hidden');
    mobileMenu.classList.toggle('hidden');
    menuBtn.setAttribute('aria-expanded', String(willOpen));
    menuBtn.setAttribute('aria-label', willOpen ? 'Cerrar Menú' : 'Abrir Menú');
    if (menuIcon) menuIcon.textContent = willOpen ? 'close' : 'menu';
  });

  // Cerrar al dar click en cualquier enlace de navegación móvil
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) closeMenu();
  });
}

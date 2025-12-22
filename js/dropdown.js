// JavaScript for click-based dropdown navigation

document.addEventListener('DOMContentLoaded', () => {
  const filmLink = document.querySelector('.dropdown-toggle.film');
  const filmDropdown = document.querySelector('.dropdown_film');
  const exhibitionLink = document.querySelector('.dropdown-toggle.exhibition');
  const exhibitionDropdown = document.querySelector('.dropdown_exhibition');
  const navMenu = document.querySelector('#nav-menu');
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');

  const dropdowns = [
    { link: filmLink, menu: filmDropdown, name: 'film' },
    { link: exhibitionLink, menu: exhibitionDropdown, name: 'exhibition' }
  ];

  const isMobileView = () => window.matchMedia('(max-width: 900px)').matches;

  function hideAllDropdowns() {
    dropdowns.forEach(({ link, menu }) => {
      if (menu) {
        menu.style.display = 'none';
      }
      if (link) {
        link.setAttribute('aria-expanded', 'false');
      }
    });
    navMenu?.classList.remove('show-film', 'show-exhibition');
  }

  function closeMenu() {
    navMenu?.classList.remove('is-open', 'show-film', 'show-exhibition');
    navToggle?.classList.remove('is-open');
    navToggle?.setAttribute('aria-expanded', 'false');
    navMenu?.setAttribute('aria-hidden', 'true');
    hideAllDropdowns();
  }

  function openMenu() {
    navMenu?.classList.add('is-open');
    navToggle?.classList.add('is-open');
    navToggle?.setAttribute('aria-expanded', 'true');
    navMenu?.setAttribute('aria-hidden', 'false');
  }

  function toggleMenu() {
    if (navMenu?.classList.contains('is-open')) {
      closeMenu();
      return;
    }
    openMenu();
  }

  function openDropdown(targetDropdown, targetLink) {
    if (!targetDropdown || !targetLink) return;
    const isOpen = targetDropdown.style.display === 'block';
    hideAllDropdowns();
    if (!isOpen) {
      targetDropdown.style.display = 'block';
      targetLink.setAttribute('aria-expanded', 'true');
    }
  }

  function showMobileMenu(name, dropdown, link) {
    if (!navMenu?.classList.contains('is-open')) {
      openMenu();
    }
    const isMenuOpen = navMenu?.classList.contains(`show-${name}`);
    
     // If switching between menus, we need to hide others but keep main nav open
    if (!isMenuOpen) {
       hideAllDropdowns();
       navMenu?.classList.add(`show-${name}`);
       if (dropdown) {
         dropdown.style.display = 'block';
       }
       link?.setAttribute('aria-expanded', 'true');
    } else {
      // If clicking already open menu, maybe close it? Or do nothing?
      // Current behavior for film seem to be: receive click -> showMobileFilmMenu -> return if open.
      // So if it is open, we do nothing.
    }
  }

  navToggle?.addEventListener('click', (event) => {
    event.stopPropagation();
    toggleMenu();
  });

  // Attach listeners to all dropdowns
  dropdowns.forEach(({ link, menu, name }) => {
    if (!link) return;

    link.addEventListener('click', (event) => {
      if (isMobileView()) {
        event.preventDefault();
        event.stopPropagation();
        showMobileMenu(name, menu, link);
        return;
      }

      const isOpen = menu && menu.style.display === 'block';
      if (!isOpen) {
        event.preventDefault();
        openDropdown(menu, link);
        return;
      }

      hideAllDropdowns();
    });
  });

  document.addEventListener('click', (event) => {
    const clickedInsideDropdown = dropdowns.some(({ menu }) => menu && menu.contains(event.target));
    const clickedLink = dropdowns.some(({ link }) => link && link.contains(event.target));

    if (isMobileView()) {
      const clickedInsideNav = nav && nav.contains(event.target);
      if (!clickedInsideNav) {
        closeMenu();
      }
      if (!clickedInsideDropdown && !clickedLink) {
         // Don't hide dropdowns in mobile immediately on outside click if nav is open?
         // Original code: if (!clickedInsideDropdown && !clickedFilm) hideAllDropdowns()
         hideAllDropdowns();
      }
      return;
    }

    if (!clickedInsideDropdown && !clickedLink) {
      hideAllDropdowns();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });

  navMenu?.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    if (!isMobileView()) return;

    if (target.tagName === 'A' && !target.classList.contains('dropdown-toggle')) {
      closeMenu();
    }
  });

  window.addEventListener('resize', () => {
    if (!isMobileView()) {
      closeMenu();
    }
  });

  hideAllDropdowns();
  navMenu?.setAttribute('aria-hidden', 'true');
});

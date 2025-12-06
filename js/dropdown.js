// JavaScript for click-based dropdown navigation

document.addEventListener('DOMContentLoaded', () => {
  const filmLink = document.querySelector('.dropdown-toggle.film');
  const filmDropdown = document.querySelector('.dropdown_film');
  const navMenu = document.querySelector('#nav-menu');
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');

  const dropdowns = [
    { link: filmLink, menu: filmDropdown }
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
    navMenu?.classList.remove('show-film');
  }

  function closeMenu() {
    navMenu?.classList.remove('is-open', 'show-film');
    navToggle?.classList.remove('is-open');
    navToggle?.setAttribute('aria-expanded', 'false');
    hideAllDropdowns();
  }

  function openMenu() {
    navMenu?.classList.add('is-open');
    navToggle?.classList.add('is-open');
    navToggle?.setAttribute('aria-expanded', 'true');
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

  function showMobileFilmMenu() {
    if (!navMenu?.classList.contains('is-open')) {
      openMenu();
    }
    const isFilmOpen = navMenu?.classList.contains('show-film');
    hideAllDropdowns();
    if (isFilmOpen) {
      return;
    }
    navMenu?.classList.add('show-film');
    if (filmDropdown) {
      filmDropdown.style.display = 'block';
    }
    filmLink?.setAttribute('aria-expanded', 'true');
  }

  navToggle?.addEventListener('click', (event) => {
    event.stopPropagation();
    toggleMenu();
  });

  filmLink?.addEventListener('click', (event) => {
    if (isMobileView()) {
      event.preventDefault();
      event.stopPropagation();
      showMobileFilmMenu();
      return;
    }

    const isOpen = filmDropdown && filmDropdown.style.display === 'block';
    if (!isOpen) {
      event.preventDefault();
      openDropdown(filmDropdown, filmLink);
      return;
    }

    hideAllDropdowns();
  });

  document.addEventListener('click', (event) => {
    const clickedInsideDropdown = dropdowns.some(({ menu }) => menu && menu.contains(event.target));
    const clickedFilm = filmLink && filmLink.contains(event.target);

    if (isMobileView()) {
      const clickedInsideNav = nav && nav.contains(event.target);
      if (!clickedInsideNav) {
        closeMenu();
      }
      if (!clickedInsideDropdown && !clickedFilm) {
        hideAllDropdowns();
      }
      return;
    }

    if (!clickedInsideDropdown && !clickedFilm) {
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
});

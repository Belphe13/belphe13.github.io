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

  const setDropdownOpenState = (isOpen) => {
    if (!navMenu) return;
    navMenu.classList.toggle('dropdown-open', Boolean(isOpen));
  };

  function hideAll() {
    dropdowns.forEach(({ link, menu }) => {
      if (menu) {
        menu.style.display = 'none';
      }
      if (link) {
        link.setAttribute('aria-expanded', 'false');
      }
    });
    setDropdownOpenState(false);
  }

  function closeMenu() {
    if (navMenu) {
      navMenu.classList.remove('is-open');
    }
    if (navToggle) {
      navToggle.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
    hideAll();
  }

  function openMenu() {
    if (navMenu) {
      navMenu.classList.add('is-open');
    }
    if (navToggle) {
      navToggle.classList.add('is-open');
      navToggle.setAttribute('aria-expanded', 'true');
    }
  }

  function toggleMenu() {
    if (navMenu && navMenu.classList.contains('is-open')) {
      closeMenu();
      return;
    }
    openMenu();
  }

  function toggleDropdown(targetDropdown, targetLink) {
    if (!targetDropdown || !targetLink) return;
    const isOpen = targetDropdown.style.display === 'block';
    hideAll();
    if (!isOpen) {
      targetDropdown.style.display = 'block';
      targetLink.setAttribute('aria-expanded', 'true');
      setDropdownOpenState(true);
    }
  }

  document.addEventListener('click', (event) => {
    if (isMobileView()) {
      return;
    }
    const clickedFilm = filmLink && filmLink.contains(event.target);

    if (clickedFilm) {
      const targetDropdown = filmDropdown;
      const targetLink = filmLink;
      const isOpen = targetDropdown && targetDropdown.style.display === 'block';

      if (!isOpen) {
        event.preventDefault(); // first click opens menu
        toggleDropdown(targetDropdown, targetLink);
        return;
      }

      // if already open, allow navigation to href
      hideAll();
      return;
    }

    const clickedInsideDropdown = dropdowns.some(({ menu }) => menu && menu.contains(event.target));

    if (!clickedInsideDropdown) {
      hideAll();
    }
  });

  navToggle?.addEventListener('click', (event) => {
    event.stopPropagation();
    toggleMenu();
  });

  filmLink?.addEventListener('click', (event) => {
    if (isMobileView()) {
      event.preventDefault();
      event.stopPropagation();
      if (!navMenu?.classList.contains('is-open')) {
        openMenu();
      }
      const isOpen = filmDropdown && filmDropdown.style.display === 'block';
      hideAll();
      if (!isOpen) {
        filmDropdown && (filmDropdown.style.display = 'block');
        filmLink.setAttribute('aria-expanded', 'true');
        setDropdownOpenState(true);
      }
      return;
    }
  });

  document.addEventListener('click', (event) => {
    const clickedInsideDropdown = dropdowns.some(({ menu }) => menu && menu.contains(event.target));

    if (isMobileView()) {
      const clickedInsideNav = nav && nav.contains(event.target);
      if (!clickedInsideNav) {
        closeMenu();
      }
      if (!clickedInsideDropdown) {
        hideAll();
      }
      return;
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

  hideAll();
});

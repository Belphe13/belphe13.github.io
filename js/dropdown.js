// JavaScript for click-based dropdown navigation

document.addEventListener('DOMContentLoaded', () => {
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  const filmLink = document.querySelector('.dropdown-toggle.film') || dropdownToggles[0];
  const digitalLink = document.querySelector('.dropdown-toggle.digital') || dropdownToggles[1];
  const filmDropdown = document.querySelector('.dropdown_film');
  const digitalDropdown = document.querySelector('.dropdown_digital');

  const dropdowns = [
    { link: filmLink, menu: filmDropdown },
    { link: digitalLink, menu: digitalDropdown }
  ];

  function hideAll() {
    dropdowns.forEach(({ link, menu }) => {
      if (menu) {
        menu.style.display = 'none';
      }
      if (link) {
        link.setAttribute('aria-expanded', 'false');
      }
    });
  }

  function toggleDropdown(targetDropdown, targetLink) {
    if (!targetDropdown || !targetLink) return;
    const isOpen = targetDropdown.style.display === 'block';
    hideAll();
    if (!isOpen) {
      targetDropdown.style.display = 'block';
      targetLink.setAttribute('aria-expanded', 'true');
    }
  }

  document.addEventListener('click', (event) => {
    const clickedFilm = filmLink && filmLink.contains(event.target);
    const clickedDigital = digitalLink && digitalLink.contains(event.target);

    if (clickedFilm || clickedDigital) {
      const targetDropdown = clickedFilm ? filmDropdown : digitalDropdown;
      const targetLink = clickedFilm ? filmLink : digitalLink;
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

    const clickedInsideDropdown = dropdowns.some(
      ({ menu }) => menu && menu.contains(event.target)
    );

    if (!clickedInsideDropdown) {
      hideAll();
    }
  });

  hideAll();
});

// JavaScript for hover-based dropdown navigation

document.addEventListener('DOMContentLoaded', () => {
  const filmLink = document.querySelector('.dropdown-toggle.film');
  const digitalLink = document.querySelector('.dropdown-toggle.digital');
  const filmDropdown = document.querySelector('.dropdown_film');
  const digitalDropdown = document.querySelector('.dropdown_digital');

  function show(dropdown) {
    dropdown.style.display = 'block';
  }

  function hide(dropdown) {
    dropdown.style.display = 'none';
  }

  if (filmLink && filmDropdown) {
    filmLink.addEventListener('mouseenter', () => {
      show(filmDropdown);
      hide(digitalDropdown);
    });

    filmLink.addEventListener('mouseleave', (e) => {
      if (!filmDropdown.contains(e.relatedTarget)) {
        hide(filmDropdown);
      }
    });

    filmDropdown.addEventListener('mouseleave', (e) => {
      if (!filmLink.contains(e.relatedTarget)) {
        hide(filmDropdown);
      }
    });
  }

  if (digitalLink && digitalDropdown) {
    digitalLink.addEventListener('mouseenter', () => {
      show(digitalDropdown);
      hide(filmDropdown);
    });

    digitalLink.addEventListener('mouseleave', (e) => {
      if (!digitalDropdown.contains(e.relatedTarget)) {
        hide(digitalDropdown);
      }
    });

    digitalDropdown.addEventListener('mouseleave', (e) => {
      if (!digitalLink.contains(e.relatedTarget)) {
        hide(digitalDropdown);
      }
    });
  }
});

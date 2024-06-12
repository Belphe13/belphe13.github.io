// JavaScript for Dropdown

document.addEventListener('DOMContentLoaded', () => {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    const dropdownFilm = document.querySelector('.dropdown_film');
    const dropdownDigital = document.querySelector('.dropdown_digital');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            const clickedDropdown = toggle.textContent.toLowerCase();

            if (clickedDropdown === 'film') {
                dropdownFilm.style.display = dropdownFilm.style.display === 'block' ? 'none' :
                    'block';
                dropdownDigital.style.display = 'none';
            } else if (clickedDropdown === 'digital') {
                dropdownDigital.style.display = dropdownDigital.style.display === 'block' ?
                    'none' : 'block';
                dropdownFilm.style.display = 'none';
            }
        });
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown') && !e.target.classList.contains('dropdown-toggle')) {
            dropdownFilm.style.display = 'none';
            dropdownDigital.style.display = 'none';
        }
    });
});
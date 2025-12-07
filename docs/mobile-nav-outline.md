# Mobile nav outline

1. **Add a hamburger trigger to the nav template**
   - Insert a button (e.g., `<button class="nav-toggle" aria-expanded="false">≡</button>`) inside `.nav`, before the existing links. Keep the text centered and no underline; hide it on desktop and show it only under 900 px using CSS.

2. **Wrap the existing links in a container that can be toggled**
   - Group `LILAN`, `FILM`, and `CV` plus `.dropdown_film` inside a wrapper (e.g., `.nav-menu`). This allows you to hide the menu on mobile until the hamburger is tapped.

3. **Mobile-first styling in `css/nav.css`**
   - Add base styles for `.nav-toggle`: 50×50 px box, no border/underline, center the ≡ text, left-align the nav bar, and keep it `display:none` by default.
   - In `@media (max-width: 900px)`, switch `.nav` to `display:flex` with `justify-content: space-between; align-items:center; padding` to position the toggle on the left. Show `.nav-toggle` (`display:flex`), hide `.nav-menu` by default (`display:none;`), and remove the underlines on links when inside the mobile dropdown.
   - Create a fullscreen dropdown style for the open state (e.g., `.nav-menu.is-open { position: fixed; inset: 0; background: rgba(0,0,0,0.95); display:flex; flex-direction:column; align-items:center; justify-content:center; gap: 32px; }`). Reuse the existing `.dropdown_film` links inside it; you can set `.dropdown_film` to `display:block; width:100%; text-align:center;` when the menu is open.

4. **JavaScript toggle behavior**
   - Attach a small script (inline or separate) to toggle a class like `.is-open` on the menu and update `aria-expanded` on the button when the hamburger is clicked. Also toggle `.dropdown_film` visibility on `FILM` clicks so the film list fills the screen; you can reuse the same overlay container to stack the main links and the film sublinks.

5. **Dropdown interaction**
   - On mobile, treat `FILM` as a trigger: clicking it can either navigate or toggle the film list. To keep behavior consistent, prevent default on mobile and set `.dropdown_film` to `display:block` while overlay is open. Ensure links remain center-aligned by applying `text-align:center` to the overlay’s anchor styling.

6. **Accessibility tips**
   - Use `aria-expanded` on the hamburger, `aria-controls` pointing to the menu container, and allow Esc key or overlay click to close the menu. Keep focus trapped in the overlay when open for better keyboard support.

7. **Animate the hamburger into an × when open**
   - Apply a class like `.is-open` to the toggle button and use CSS transitions (e.g., pseudo-elements turning the three lines into a rotated cross) or swap the character so the ≡ morphs into an “×” as the menu opens, then back to ≡ when closed.

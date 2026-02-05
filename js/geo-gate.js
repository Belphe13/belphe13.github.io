(function() {
    // Create a style element to hide the body immediately prevents flashing
    // We use a specific ID or class if possible to be less intrusive, but body is safest for full page hiding
    var style = document.createElement('style');
    style.id = 'geo-gate-style';
    style.innerHTML = 'body { display: none !important; }';
    document.head.appendChild(style);

    function showContent() {
        var styleEl = document.getElementById('geo-gate-style');
        if (styleEl) {
            styleEl.remove();
        }
    }

    // timeout to ensure we don't hide forever if API hangs
    var safetyTimeout = setTimeout(function() {
        console.warn('GeoIP check timed out, showing content.');
        showContent();
    }, 5000);

    fetch('https://ipapi.co/json/')
        .then(function(response) {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(function(data) {
            clearTimeout(safetyTimeout);
            // ipapi.co returns 'country_code' (2 letter, e.g. "CN")
            if (data.country_code === 'CN') {
                var password = prompt("Restricted Access. Please enter password:");
                if (password === 'bel') {
                    showContent();
                } else {
                    alert("Incorrect password.");
                    window.location.href = "/"; 
                }
            } else {
                // Not China
                showContent();
            }
        })
        .catch(function(error) {
            clearTimeout(safetyTimeout);
            console.error('GeoIP check failed:', error);
            // Default to allow access on error to avoid breaking the site for others
            showContent();
        });
})();

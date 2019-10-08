(function () {
    if (window && window.history && window.history.replaceState) {
        var canonical = document.querySelector("link[rel=canonical]"); // Get the canonical url
        if (canonical && canonical.getAttribute("href")) {
            try {
                // Rewrite the current url without redirection
                window.history.replaceState(null, document.title, canonical.getAttribute("href") + window.location.hash);
            } catch (e) {
                // Nothing to do here
            }
        }
    }
})();

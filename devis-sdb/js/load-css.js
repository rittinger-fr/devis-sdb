(function() {
    const link = document.getElementById('async-css');

    function enableStylesheet() {
        link.media = 'all';
    }

    link.addEventListener
        ? link.addEventListener('load', enableStylesheet, { once: true })
        : link.attachEvent('onload', enableStylesheet);

    if (link.sheet || link.styleSheet) {
        enableStylesheet();
    }
})();
/* LEQ Dynamics - Shared Header & Footer Components */
(function() {
    // Detect if we are in a subdirectory (e.g., team/)
    var depth = 0;
    var path = window.location.pathname;
    // Count directory depth relative to root
    var segments = path.split('/').filter(function(s) { return s.length > 0; });
    // If last segment looks like a file, remove it
    if (segments.length > 0 && segments[segments.length - 1].indexOf('.') !== -1) {
        segments.pop();
    }
    depth = segments.length;
    // For GitHub Pages with a repo subfolder, try to detect base
    var prefix = '';
    // Simple: if we have team/ pages, prefix is ../
    // We detect based on the page path
    if (path.indexOf('/team/') !== -1) {
        prefix = '../';
    } else {
        prefix = '';
    }

    // Determine active page
    var activePage = '';
    if (path.match(/\/index\.html$/) || path.match(/\/$/)) activePage = 'home';
    else if (path.indexOf('/team') !== -1) activePage = 'team';
    else if (path.indexOf('/services') !== -1) activePage = 'services';
    else if (path.indexOf('/about') !== -1) activePage = 'about';
    else if (path.indexOf('/news') !== -1) activePage = 'news';

    function activeClass(page) {
        return activePage === page ? ' class="active"' : '';
    }

    // Header
    var headerEl = document.getElementById('site-header');
    if (headerEl) {
        headerEl.innerHTML = '<nav class="nav">' +
            '<div class="container nav-inner">' +
                '<a href="' + prefix + 'index.html" class="logo">LEQ<span>.</span>Dynamics</a>' +
                '<ul class="nav-links">' +
                    '<li><a href="' + prefix + 'index.html"' + activeClass('home') + '>Home</a></li>' +
                    '<li><a href="' + prefix + 'team.html"' + activeClass('team') + '>Team</a></li>' +
                    '<li><a href="' + prefix + 'services.html"' + activeClass('services') + '>Services</a></li>' +
                    '<li><a href="' + prefix + 'about.html"' + activeClass('about') + '>About</a></li>' +
                    '<li><a href="' + prefix + 'news.html"' + activeClass('news') + '>News</a></li>' +
                '</ul>' +
                '<a href="mailto:contact@leq-dynamics.com" class="nav-cta">Contact Us</a>' +
                '<button class="mobile-menu" aria-label="Menu" onclick="toggleMobileNav()">' +
                    '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round">' +
                        '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>' +
                    '</svg>' +
                '</button>' +
            '</div>' +
        '</nav>' +
        '<div class="mobile-nav" id="mobile-nav">' +
            '<a href="' + prefix + 'index.html">Home</a>' +
            '<a href="' + prefix + 'team.html">Team</a>' +
            '<a href="' + prefix + 'services.html">Services</a>' +
            '<a href="' + prefix + 'about.html">About</a>' +
            '<a href="' + prefix + 'news.html">News</a>' +
            '<a href="mailto:contact@leq-dynamics.com" class="contact-btn">Contact Us</a>' +
        '</div>';
    }

    // Footer
    var footerEl = document.getElementById('site-footer');
    if (footerEl) {
        footerEl.innerHTML = '<footer class="footer">' +
            '<div class="container">' +
                '<div class="footer-grid">' +
                    '<div class="footer-brand">' +
                        '<div class="logo">LEQ<span style="color:var(--blue);">.</span>Dynamics</div>' +
                        '<p>Building AI systems where cooperation compounds. Engineered for trust, operated with transparency.</p>' +
                    '</div>' +
                    '<div class="footer-col">' +
                        '<h4>Services</h4>' +
                        '<ul>' +
                            '<li><a href="' + prefix + 'services.html">Research</a></li>' +
                            '<li><a href="' + prefix + 'services.html">Automation</a></li>' +
                            '<li><a href="' + prefix + 'services.html">Development</a></li>' +
                            '<li><a href="' + prefix + 'services.html">Verification</a></li>' +
                        '</ul>' +
                    '</div>' +
                    '<div class="footer-col">' +
                        '<h4>Company</h4>' +
                        '<ul>' +
                            '<li><a href="' + prefix + 'team.html">Executive Team</a></li>' +
                            '<li><a href="' + prefix + 'about.html">Our Thesis</a></li>' +
                            '<li><a href="' + prefix + 'about.html">Values</a></li>' +
                            '<li><a href="' + prefix + 'news.html">News</a></li>' +
                        '</ul>' +
                    '</div>' +
                    '<div class="footer-col">' +
                        '<h4>Connect</h4>' +
                        '<ul>' +
                            '<li><a href="mailto:contact@leq-dynamics.com">Email</a></li>' +
                            '<li><a href="https://github.com/LEQ-Dynamics-Labs">GitHub</a></li>' +
                        '</ul>' +
                    '</div>' +
                '</div>' +
                '<div class="footer-bottom">' +
                    '<span>2026 LEQ Dynamics. All rights reserved.</span>' +
                    '<span>Cooperation compounds eternally.</span>' +
                '</div>' +
            '</div>' +
        '</footer>';
    }

    // Mobile nav toggle
    window.toggleMobileNav = function() {
        var nav = document.getElementById('mobile-nav');
        if (nav) {
            nav.classList.toggle('open');
        }
    };
})();

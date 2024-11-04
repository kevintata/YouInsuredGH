window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// Language Switcher

function changeLanguage() {
    var selectedLanguage = document.getElementById("lang").value;

    // Define the URLs for each language
    var languageUrls = {
        'pt': 'index.html',
        'en': 'english.html',
        'es': 'spanish.html'
    };
    console.log(selectedLanguage);
}

// function removeHtmlExtension() {
//     let currentPath = window.location.pathname;
//     if (currentPath.endsWith('.html')) {
//         let newPath = currentPath.replace('.html', '');
//         history.replaceState(null, '', newPath);
//     }
// }

// // Execute the function when the window loads
// window.addEventListener('load', removeHtmlExtension);

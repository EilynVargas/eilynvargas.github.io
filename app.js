// Object with duration/delay values
const CONFIG = {
    TRANSITION_DELAY: 1000,
    COUNTER_DELAY: 3000,
    COUNTER_INTERVAL: 30
}

//Functions to enable/disable scrolling in the site
function enableScroll(){
    document.body.style.overflowY = "visible";
    document.body.style.touchAction = "auto";
}

function disableScroll(){
    document.body.style.overflowY = "hidden";
    document.body.style.touchAction = 'none';
}

// Counter function that starts after a specified delay and runs at a set interval.
function startCounter(){
    disableScroll();
    setTimeout(function timeoutCounter(){
        const counterNumber = document.getElementById('counter');
        const loaderContainer = document.getElementById('loader');
        let counter = 0;

        const myInterval = setInterval(progress, CONFIG.COUNTER_INTERVAL);
        function progress(){
            //Counter stops at 100%
            if(counter==100){
                clearInterval(myInterval);
                // When counter reach 100, the loader disappears from the screen and displays hero-banner
                setTimeout(function timeoutLoaderContainer(){
                    loaderContainer.style.transform = "translate(0,-100vh)";
                    enableScroll();
                }, CONFIG.TRANSITION_DELAY)
            }
            else{
                counter++;
                counterNumber.textContent = counter + "%";
            }
        }
    }, CONFIG.COUNTER_DELAY);
}

//Code for mobile navigation menu
    const toggle = document.querySelector('.nav-toggle');
    const flyout = document.querySelector('.navbar');
    const navLink = document.querySelectorAll('.nav-link');
    const closeButton = document.querySelector('.close-btn');

    function toggleMenu(){
        flyout.classList.toggle('active');
    }

    toggle.addEventListener('click', () => {
        toggleMenu();
        disableScroll();
    });

    closeButton.addEventListener('click', () => {
        toggleMenu();
        enableScroll();
    })

    navLink.forEach(link => {
        link.addEventListener('click', () => {
            enableScroll();
            setTimeout(() => {
                toggleMenu();
            }, CONFIG.TRANSITION_DELAY);

        });
    });

// Function that adds a class to the HTML element, where shows a translation of the logo when loader starts
function preloadLogo(){
    const preloadElement = document.getElementById('preload-logo');
    preloadElement.classList.add('logo-loaded');
}

// Code for loader
window.addEventListener('load', function() {
    setTimeout(preloadLogo, CONFIG.TRANSITION_DELAY);
    startCounter();
});


// Code for scroll animation
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const scrollPosition = window.scrollY;
    const svgLogo = document.getElementById('logoText');
    const menuIcon = document.getElementById('menuIcon');

    // Add 'scrolled' class when user scrolls down 350px
    if (scrollPosition > 350) {
        header.classList.add('scrolled');
        svgLogo.setAttribute('fill','#000');
        svgLogo.setAttribute('stroke','#000');
        menuIcon.setAttribute('fill','#000');
        menuIcon.setAttribute('stroke','#000');

    } 
    else {
        header.classList.remove('scrolled');
        svgLogo.setAttribute('fill','#fff');
        svgLogo.setAttribute('stroke','#fff');
        menuIcon.setAttribute('fill','#fff');
        menuIcon.setAttribute('stroke','#fff');
    }

    //Code for parallax effect to image 
    const image = document.getElementById('about-photo');
    const imageScrollPosition = -400 + (scrollPosition * 0.15);
    image.style.transform = "translate3d(0, "+imageScrollPosition+"px, 0) ";
});
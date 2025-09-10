// Code for loader
window.addEventListener('load', function() {
    const counterNumber = document.getElementById('counter');
    let counter = 0;
    const myInterval = setInterval(progress, 30);
    function progress(){
        if(counter==100){
            clearInterval(myInterval);
        }
        else{
            counter++;
            counterNumber.textContent = counter + "%";
        }
    }
});

// Code for scroll animation
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const scrollPosition = window.scrollY;
    const svgLogo = document.getElementById('logoText');

    // Add 'scrolled' class when user scrolls down 350px
    if (scrollPosition > 350) {
        header.classList.add('scrolled');
        svgLogo.setAttribute('fill','#000');
        svgLogo.setAttribute('stroke','#000');
    } 
    else {
        header.classList.remove('scrolled');
        svgLogo.setAttribute('fill','#fff');
        svgLogo.setAttribute('stroke','#fff');
    }

    //Code for parallax effect to image 
    const image = document.getElementById('about-photo');
    const imageScrollPosition = -400 + (scrollPosition * 0.15);
    image.style.transform = "translate3d(0, "+imageScrollPosition+"px, 0) ";
});
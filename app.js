 // JavaScript for navbar scroll animation
        window.addEventListener('scroll', function() {
            const header = document.getElementById('header');
            const scrollPosition = window.scrollY;
            
            const svgLogo = document.getElementById('logoText');
          

            // Add 'scrolled' class when user scrolls down 50px
            if (scrollPosition > 50) {
                header.classList.add('scrolled');
                svgLogo.setAttribute('fill','#000');
                svgLogo.setAttribute('stroke','#000');
            } 
            else {
                header.classList.remove('scrolled');
                svgLogo.setAttribute('fill','#fff');
                svgLogo.setAttribute('stroke','#fff');
            }
        });
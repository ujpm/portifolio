document.addEventListener('DOMContentLoaded', function() {
    try {
        // Initialize AOS
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100,
            easing: 'ease-in-out'
        });

        // Initialize Typed.js
        if (document.querySelector('.typed-text')) {
            new Typed('.typed-text', {
                strings: [
                    'Medical Scientist',
                    'Front-end Developer',
                    'Healthcare Innovator',
                    'AI Enthusiast'
                ],
                typeSpeed: 50,
                backSpeed: 30,
                backDelay: 2000,
                loop: true
            });
        }

        // Initialize particles.js
        if (document.getElementById('particles-js')) {
            particlesJS('particles-js', {
                particles: {
                    number: {
                        value: 80,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    color: {
                        value: '#ffffff'
                    },
                    shape: {
                        type: 'circle'
                    },
                    opacity: {
                        value: 0.5,
                        random: false
                    },
                    size: {
                        value: 3,
                        random: true
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: '#ffffff',
                        opacity: 0.4,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 6,
                        direction: 'none',
                        random: false,
                        straight: false,
                        out_mode: 'out',
                        bounce: false,
                    }
                },
                interactivity: {
                    detect_on: 'canvas',
                    events: {
                        onhover: {
                            enable: true,
                            mode: 'repulse'
                        },
                        onclick: {
                            enable: true,
                            mode: 'push'
                        },
                        resize: true
                    }
                },
                retina_detect: true
            });
        }

        // Project filtering
        const filterBtns = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');

                const filter = btn.getAttribute('data-filter');

                projectCards.forEach(card => {
                    if (filter === 'all' || card.classList.contains(filter)) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });

        // My Story Button
        document.getElementById('myStoryBtn').addEventListener('click', () => {
            window.location.href = 'story.html';
        });

        // Get in Touch Section Interactions
        const buttons = {
            connectBtn: document.getElementById('connectBtn'),
            contactBtn: document.getElementById('contactBtn'),
            hireBtn: document.getElementById('hireBtn'),
            collaborateBtn: document.getElementById('collaborateBtn'),
            slapBtn: document.getElementById('slapBtn'),
            otherBtn: document.getElementById('otherBtn')
        };

        const panels = {
            socialPanel: document.getElementById('socialPanel'),
            contactForm: document.getElementById('contactForm')
        };

        // Hide all panels
        function hideAllPanels() {
            Object.values(panels).forEach(panel => {
                panel.classList.remove('active');
            });
        }

        // Connect Button
        buttons.connectBtn.addEventListener('click', () => {
            hideAllPanels();
            panels.socialPanel.classList.add('active');
        });

        // Contact Button
        buttons.contactBtn.addEventListener('click', () => {
            hideAllPanels();
            panels.contactForm.classList.add('active');
            document.getElementById('message').value = '';  // Clear any previous message
        });

        // Hire Button
        buttons.hireBtn.addEventListener('click', () => {
            hideAllPanels();
            panels.contactForm.classList.add('active');
            document.getElementById('message').value = 'Hi! I\'m interested in hiring you for a project...';
        });

        // Collaborate Button
        buttons.collaborateBtn.addEventListener('click', () => {
            hideAllPanels();
            panels.contactForm.classList.add('active');
            document.getElementById('message').value = 'Hi! I have an interesting collaboration opportunity...';
        });

        // Hamburger Menu
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        const body = document.body;

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navLinks.contains(e.target) && navLinks.classList.contains('active')) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                body.style.overflow = '';
            }
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                body.style.overflow = '';
            });
        });

        // Close menu on resize if open
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                body.style.overflow = '';
            }
        });

        // Initialize slap sound
        const slapSound = new Audio('assets/slap-sound.mp3');
        slapSound.volume = 0.5; // Adjust volume to 50%

        // Slap Button with Sound
        buttons.slapBtn.addEventListener('click', () => {
            const responses = [
                "Ouch! 🤕 That was cold!",
                "Brr... 🥶 Ice cold slap!",
                "Freezing! ❄️ Need a warm-up!",
                "That's gonna leave a mark! 🧊",
                "Wow! 🌨️ Snow slap!",
                "Chilly vibes! 🥶"
            ];
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            
            // Play sound
            slapSound.currentTime = 0; // Reset sound to start
            slapSound.play().catch(e => console.log('Audio playback failed:', e));
            
            // Create and show notification
            const notification = document.createElement('div');
            notification.className = 'slap-notification';
            notification.textContent = randomResponse;
            document.body.appendChild(notification);
            
            // Remove notification after animation
            setTimeout(() => {
                notification.remove();
            }, 3000);
        });

        // Other Button
        buttons.otherBtn.addEventListener('click', () => {
            hideAllPanels();
            panels.contactForm.classList.add('active');
            document.getElementById('message').value = 'Hi! I wanted to reach out about...';
        });

        // Optional: Disable particle.js on mobile for better performance
        if (window.innerWidth <= 768) {
            const particlesContainer = document.getElementById('particles-js');
            if (particlesContainer) {
                particlesContainer.style.display = 'none';
            }
        }

        // Handle contact form submission
        const contactForm = document.querySelector('#contactForm form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Thank you for your message! I will get back to you soon.');
                contactForm.reset();
                hideAllPanels();
            });
        }

        // Handle contact form submission
        const contactForm2 = document.getElementById('contact-form');
        if (contactForm2) {
            contactForm2.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Thank you for your message! I will get back to you soon.');
                contactForm2.reset();
            });
        }

    } catch (error) {
        console.error('Error initializing portfolio:', error);
    }
});
// Web Vitals Performance Tracking
function reportWebVitals() {
    if ('performance' in window) {
        const vitals = {
            'First Contentful Paint': performance.getEntriesByType('paint')
                .find(entry => entry.name === 'first-contentful-paint')?.startTime,
            'Largest Contentful Paint': performance.getEntriesByType('largest-contentful-paint')[0]?.startTime,
            'First Input Delay': performance.getEntriesByType('first-input')[0]?.processingStart,
            'Cumulative Layout Shift': performance.getEntriesByType('layout-shift')[0]?.value
        };

        // You could send these to your analytics service
        console.log('Web Vitals:', vitals);
    }
}

// Run Web Vitals tracking when page loads
window.addEventListener('load', reportWebVitals);
// Navbar scroll behavior
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

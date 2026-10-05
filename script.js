console.log("Portfolio script loaded");

// Select all navigation links
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            // Remove active from all links
            navLinks.forEach(link => link.classList.remove('active'));

            // Add active to current section's link
            const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
});

// Select filter buttons and project cards
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

// Function to filter projects
function filterProjects(category) {
    projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');

        if (category === 'all' || cardCategory === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Add event listeners to filter buttons
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));

        // Add active class to clicked button
        button.classList.add('active');

        // Get filter value and filter projects
        const filterValue = button.getAttribute('data-filter');
        filterProjects(filterValue);
    });
});

const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
}

// Select all skill progress bars
const skillBars = document.querySelectorAll('.skill-progress');

skillBars.forEach((bar) => {
    const skillLevel = bar.style.getPropertyValue('--skill-level');
    if (skillLevel) {
        bar.dataset.skillLevel = skillLevel.trim();
        bar.style.width = '0%';
    }
});

// Animate skills on scroll
function animateSkills() {
    const skillsSection = document.querySelector('#skills');
    if (!skillsSection) return;

    const skillsPosition = skillsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (skillsPosition < screenPosition) {
        skillBars.forEach((bar) => {
            const skillLevel = bar.dataset.skillLevel || bar.style.getPropertyValue('--skill-level');
            if (skillLevel) {
                setTimeout(() => {
                    bar.style.width = skillLevel.trim();
                }, 50);
            }
        });

        window.removeEventListener('scroll', animateSkills);
    }
}

// Add scroll listener
window.addEventListener('scroll', animateSkills);

// Run once on load in case skills are already visible
animateSkills();
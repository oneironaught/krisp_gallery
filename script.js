// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href === 'index.html') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            window.location.href = href;
        }
    });
});

// Scroll-to-Top Button
const scrollToTopBtn = document.getElementById('scrollToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
        scrollToTopBtn.style.opacity = '1';
    } else {
        scrollToTopBtn.style.opacity = '0';
        setTimeout(() => scrollToTopBtn.style.display = 'none', 300);
    }
});
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Logo Animation on Load
window.addEventListener('load', () => {
    const logo = document.querySelector('.hero-logo');
    if (logo) {
        logo.style.opacity = '1';
        logo.style.transform = 'scale(1)';
    }
});

// Dynamic Navigation Highlight
function highlightNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}
window.addEventListener('load', highlightNav);

// Event Calendar Countdown
function updateEventCountdowns() {
    document.querySelectorAll('.event-list li').forEach((eventItem, index) => {
        const eventDate = new Date(eventItem.getAttribute('data-date')).getTime();
        const now = new Date().getTime();
        const distance = eventDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const countdownElement = document.getElementById(`event-countdown-${index + 1}`);
        if (countdownElement) {
            if (distance > 0) {
                countdownElement.innerHTML = `(${days}d ${hours}h ${minutes}m ${seconds}s until event)`;
            } else {
                countdownElement.innerHTML = '(Event has started or passed)';
            }
        }
    });
}
setInterval(updateEventCountdowns, 1000);

// Existing Functions
function filterMenu(category) {
    const items = document.querySelectorAll('.menu-item');
    items.forEach(item => {
        item.classList.remove('active');
        if (category === 'all' || item.classList.contains(category)) {
            item.classList.add('active');
        }
    });
}

function updateCountdown() {
    const eventDate = new Date('March 15, 2025 19:00:00').getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const countdown = document.getElementById('countdown');
    if (countdown) {
        countdown.innerHTML = `(${days}d ${hours}h ${minutes}m ${seconds}s)`;
    }

    if (distance < 0) {
        countdown.innerHTML = '(Event has started!)';
    }
}
setInterval(updateCountdown, 1000);

function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = src;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.\n\nEmail: ${email}\nMessage: ${message}`);
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill out all fields.');
    }
}
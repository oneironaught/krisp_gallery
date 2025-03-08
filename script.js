// Menu Filtering
function filterMenu(category) {
    const items = document.querySelectorAll('.menu-item');
    items.forEach(item => {
        item.classList.remove('active');
        if (category === 'all' || item.classList.contains(category)) {
            item.classList.add('active');
        }
    });
}

// Event Countdown
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

// Gallery Lightbox
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

// Contact Form Submission
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
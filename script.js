let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function moveSlider(direction) {
    if (direction === 'next') {
        currentSlide = (currentSlide + 1) % totalSlides;
    } else {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    }
    
    const offset = currentSlide * -100;
    document.querySelector('.dish-slider').style.transform = `translateX(${offset}%)`;
}

document.querySelector('.next').addEventListener('click', () => moveSlider('next'));
document.querySelector('.prev').addEventListener('click', () => moveSlider('prev'));

// Auto-slide every 5 seconds
setInterval(() => moveSlider('next'), 5000);

function openReservationModal() {
    document.getElementById('reservationModal').style.display = 'block';
}

function closeReservationModal() {
    document.getElementById('reservationModal').style.display = 'none';
}

function handleReservation(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(event.target);
    const reservationData = Object.fromEntries(formData);
    
    // Here you would typically send this data to a server
    console.log('Reservation Details:', reservationData);
    
    // Show success message
    alert('Reservation submitted successfully! We will contact you shortly to confirm your booking.');
    
    // Close modal and reset form
    closeReservationModal();
    event.target.reset();
}

// Close modal if clicked outside
window.onclick = function(event) {
    const modal = document.getElementById('reservationModal');
    if (event.target == modal) {
        closeReservationModal();
    }
}

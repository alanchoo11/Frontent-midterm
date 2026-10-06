// The same script is loaded on every page, so check that a form exists first.
const bookingForm = document.querySelector('#booking-form');

if (bookingForm) {
    const serviceSelect = document.querySelector('#service-type');
    const dateInput = document.querySelector('#date');
    const result = document.querySelector('#booking-result');

    // Read the service from links such as booking.html?service=oil-change.
    const parameters = new URLSearchParams(window.location.search);
    const requestedService = parameters.get('service');
    for (const option of serviceSelect.options) {
        if (option.value === requestedService) {
            serviceSelect.value = requestedService;
        }
    }

    // Use local calendar parts so the minimum date matches the user's day.
    function todayString() {
        const today = new Date();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${today.getFullYear()}-${month}-${day}`;
    }
    dateInput.min = todayString();

    function validateDate() {
        dateInput.min = todayString();
        dateInput.setCustomValidity('');
        const chosenDate = new Date(dateInput.value + 'T12:00:00');
        if (chosenDate.getDay() === 0) {
            dateInput.setCustomValidity('The workshop is closed on Sundays. Choose Monday to Saturday.');
        }
    }
    dateInput.addEventListener('input', validateDate);

    bookingForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Keep this static demo on the current page.
        validateDate();
        if (!bookingForm.reportValidity()) return;

        const serviceName = serviceSelect.selectedOptions[0].textContent;
        const vehicle = document.querySelector('#vehicle').value.trim();
        const time = document.querySelector('#time').value;
        // textContent displays entered text safely, without treating it as HTML.
        result.textContent = `Appointment preview: ${serviceName} for ${vehicle}, on ${dateInput.value} at ${time}. Nothing has been sent or booked.`;
        result.focus();
    });
    bookingForm.addEventListener('input', function () {
        result.textContent = ''; // Remove an old preview when details change.
    });
}

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    const result = document.querySelector('#contact-result');
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const topic = document.querySelector('#contact-topic').selectedOptions[0].textContent;
        const message = document.querySelector('#contact-message').value.trim();
        result.textContent = `Message preview (${topic}): ${message} — Demo only; your message has not been sent.`;
        result.focus();
    });
    contactForm.addEventListener('input', function () {
        result.textContent = '';
    });
}

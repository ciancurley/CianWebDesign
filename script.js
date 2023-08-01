// Get all thumbnail images
const thumbnailImages = document.querySelectorAll('.thumbnail-image');

// Loop through each thumbnail image
thumbnailImages.forEach((thumbnailImage) => {
    // Add a click event listener to each thumbnail image
    thumbnailImage.addEventListener('click', function () {
        // Get the corresponding enlarged image for the clicked thumbnail
        const enlargedImage = this.nextElementSibling;

        // Toggle the display property to show/hide the enlarged image
        if (enlargedImage.style.display === 'block') {
            enlargedImage.style.display = 'none';
        } else {
            enlargedImage.style.display = 'block';
        }
    });
});

const images = [
 "images/image1.jpg",
 "images/image2.jpg",
 "images/image3.jpg",
 "images/image4.jpg",
 // Add more image URLs here as needed
];

let currentIndex = 0;
const galleryImage = document.getElementById("gallery-image");

function changeImage(direction) {
 currentIndex += direction;

 if (currentIndex < 0) {
   currentIndex = images.length - 1;
 } else if (currentIndex >= images.length) {
   currentIndex = 0;
 }

 const imageURL = images[currentIndex];
 galleryImage.src = imageURL;
}

function validateForm(event) {
event.preventDefault(); // Prevent form submission if validation fails

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const countryInput = document.getElementById('country');
const messageInput = document.getElementById('message');

const name = nameInput.value.trim();
const email = emailInput.value.trim();
const phone = phoneInput.value.trim();
const country = countryInput.value;
const message = messageInput.value.trim();

if (name === '') {
alert('Please enter your name.');
nameInput.focus();
return;
}

if (email === '') {
alert('Please enter your email.');
emailInput.focus();
return;
} else if (!isValidEmail(email)) {
alert('Please enter a valid email address.');
emailInput.focus();
return;
}

if (phone === '') {
alert('Please enter your phone number.');
phoneInput.focus();
return;
} else if (!isValidPhone(phone)) {
alert('Please enter a valid phone number.');
phoneInput.focus();
return;
}

if (country === '') {
alert('Please select a country.');
countryInput.focus();
return;
}

if (message === '') {
alert('Please enter your message.');
messageInput.focus();
return;
}

// If all validation passes, you can handle the form submission here
console.log('Form data:');
console.log('Name:', name);
console.log('Email:', email);
console.log('Phone Number:', phone);
console.log('Country:', country);
console.log('Message:', message);

// Optionally, you can reset the form after submission
document.getElementById('contactForm').reset();
}

function isValidEmail(email) {
// Simple email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return emailRegex.test(email);
}

function isValidPhone(phone) {
// Simple phone number validation
const phoneRegex = /^\d{10,}$/; // At least 10 digits (adjust as per your requirements)
return phoneRegex.test(phone);
}

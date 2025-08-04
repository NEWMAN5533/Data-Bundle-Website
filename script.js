const more = document.querySelector('.more-icon');
const pageWhitcher = document.querySelector('#more');

const buyButtons = document.querySelectorAll('.buy-btn');
const templateContainer = document.querySelector('.template-container');

const bundleInput = document.getElementById('bundle');
const priceInput = document.getElementById('price');
const phoneInput = document.getElementById('phone');

// LOOP THROUGH ALL BUY BUTTONS
buyButtons.forEach(button => {
  button.addEventListener('click', () => {
    const bundle = button.getAttribute('data-bundle');
    const price = button.getAttribute('data-price');

    // Set input values automatically
    bundleInput.value = bundle;
    priceInput.value = `GH₵ ${price}`;
    phoneInput.value = ''; // Clear previous phone number

    // Show template popup
    templateContainer.classList.add('active');
  });
});


// CLOSE TEMPLATE WHEN CLICKING OUTSIDE
window.addEventListener('click', (event) => {
  if (event.target === templateContainer) {
    templateContainer.classList.remove('active');
  }
});

// FUNCTION: DATA SUBMIT
function dataSubmit() {
  const phone = phoneInput.value.trim();
  const price = priceInput.value.trim();
  const bundle = bundleInput.value.trim();
  const bite = document.getElementById('bite').value.trim();

  // Validation
  if (phone === '' || phone.length < 10) {
    alert('Please enter a valid phone number.');
    return;
  }
  if (!price || !bundle) {
    alert('Invalid bundle or price detected.');
    return;
  }

  // Update status
  const statusElement = document.getElementById("status");
  statusElement.textContent = `Order submitted for ${bundle} at ${price}.`;
  statusElement.style.color = "green";

  // Hide popup after 2 seconds
  setTimeout(() => {
    templateContainer.classList.remove('active');
  }, 2000);
}

// MORE ICON TOGGLE
pageWhitcher.addEventListener('click', () => {
  more.classList.toggle('active');
});

// SUBMITTING REQUEST THROUGH WHATSAPP
function submitRequest() {
  const phone = phoneInput.value.trim();
  const bundle = bundleInput.value.trim();
  const price = priceInput.value.trim();

  if (!phone || phone.length < 10) {
    alert('Please enter a valid phone number.');
    return;
  }

  const message = `Hello, I have paid for a bundle.\n\nMy Number: ${phone}\nBundle: ${bundle}\nCost: ${price}`;
  const whatsappNumber = "233535565637";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  document.getElementById('status').textContent = 'Redirecting to WhatsApp...';
  document.getElementById('status').style.color = 'green';

  setTimeout(() => {
    templateContainer.classList.remove('active'); // Close popup after redirect
    window.location.href = whatsappLink;
  }, 800);
}




















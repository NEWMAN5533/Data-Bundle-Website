// function & logic //
const toggler = document.getElementById("hamburgerToggler");
const sidebar = document.querySelector(".sidebar");
const closer = document.getElementById("close");

// function //
toggler.addEventListener("click", function () {
  if (sidebar.style.left === "-500px" || sidebar.style.left === "") {
    sidebar.style.left = "0px";
  } else {
    sidebar.style.left = "-500px";
  }
});

// close button //
closer.addEventListener("click", function () {
  sidebar.style.left = "-500px";
});

window.addEventListener("click", function(e) {
  if (!sidebar.contains(e.target) && (e.target !== toggler)) {
    sidebar.style.left = "-500px";
  } 
})


// bundle.js//
const buyButtons = document.querySelectorAll('.buy-btn');
const templateContainer = document.querySelector('.template-container');

const bundleInput = document.getElementById('bundle');
const priceInput = document.getElementById('price');
const phoneInput = document.getElementById('phone');



// WORKING HOURS TIMER //

const hourHand = document.querySelector('.hourHand');

const minuteHand = document.querySelector('.minuteHand');
const secondHand = document.querySelector('.secondHand');
const time = document.querySelector('.time');

const clock = document.querySelector('.clock');

function setDate() {
  const today = new Date();

  const second = today.getSeconds();

  const minute = today.getMinutes();

  const hour = today.getHours();

  const secondDeg = ((second /  60) * 360) + 360;


  const minuteDeg = ((minute / 60) * 360);

  const hourDeg = ((hour / 12) * 360);

  secondHand.style.transform = `rotate(${secondDeg}deg)`;

  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;

  hourHand.style.transform = `rotate(${hourDeg}deg)`;

  time.innerHTML = `<span></strong>${hour}</strong> : ${minute} : <small>${second}</small></span>`
}

setInterval(setDate, 1000);




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





// TO REGISTER THE SERVICE WORKER (service.js) //

if ("service_Worker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service_worker.js").then(reg =>
      console.log("Service Worker Registered:", reg)
    ).catch(err => console.log("Service Worker registration failed:", err));
  });
}








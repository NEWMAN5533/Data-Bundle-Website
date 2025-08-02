const more = document.querySelector('.more-icon');
const pageWhitcher = document.querySelector('#more');

// when click more icon to toggle other products sheets //
pageWhitcher.onclick = ()=>{
  more.classList.toggle('active');
}


//sumitting request ///
// This function runs when the user clicks "I Have Paid"
function submitRequest() {
  const phone = document.getElementById("phone").value.trim();
  const price = document.getElementById("price").value.trim();
  const bite = document.getElementById("bite").value;
  const bundle = document.getElementById("bundle").value;

  // Simple validation
  if (phone === "" || price === "" || bundle === "" || bite === "") {
    alert("Please fill in all fields before proceeding.");
    return;
  }

  // Create WhatsApp message link
  const message = `Hello, I have paid for a bundle.\n\nMy-Number: ${phone}\nCost-Price: ${price}\nBundle: ${bundle}\nGB: ${bite}`;
  const whatsappNumber = "233535565637"; // Replace with your WhatsApp number (e.g., 233551234567)
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  // Redirect to WhatsApp
  window.location.href = whatsappLink;
}
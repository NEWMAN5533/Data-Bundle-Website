const more = document.querySelector('.more-icon');
const moreProducts = document.querySelector('#more');

// when click more icon to toggle other products sheets //
moreProducts.onclick = ()=>{
  more.classList.toggle('active');
}

function orderViaWhatsApp(productName, price) {
  const phoneNumber = "233535565637"; // Replace with your number
  const message = `Hello,I want to order: ${productName} for GH₵: ${price}.
  PLEASE SEND THE FEES TO =>[ 0535565637 ] and,[ INSERT YOUR NUMBER HERE] before sending ` ;
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

const container = document.getElementById("product-list");
products.forEach(product => {
  const card = document.createElement("div");
  card.className = "product";
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h2>${product.name}</h2>
    <p>$${product.price}</p>
    <button onclick="orderViaWhatsApp('${product.name}', ${product.price})">Buy Now</button>
  `;
  container.appendChild(card);
});

// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input")
  
  let sub = price.innerText * quantity.value;
  
  let subtotal = product.querySelector(".subtotal span")
  
  subtotal.innerText = sub;
  console.log(sub)
  
  return sub;
}

function calculateAll() {
  
  // ITERATION 2
  
  const products = document.querySelectorAll(`.product`)
  products.forEach((elemento, index) => {
    updateSubtotal(elemento)
  } )
  // totalValue += updateSubtotal();
  
  
  // ITERATION 3
  let totalValue = 0;
  let total = document.querySelector("#total-value span")
  total.innerText = totalValue;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});

let aux = [];

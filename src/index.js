// ITERATION 1

function updateSubtotal(product) {
  const price = +product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value
  
  const subtotal = price * quantity
  product.querySelector('.subtotal span').innerText = subtotal
  return subtotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.querySelectorAll(".product")
  let total = [...products].reduce((total, product) => {
    return total + updateSubtotal(product)
  }, 0)

  document.querySelector("#total-value span").innerText = total

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  //... your code goes here
  const target = event.currentTarget;
  console.log('The target in remove is:', target, target.parentNode.parentNode);
  const row = target.parentNode.parentNode;
  const table = row.parentNode;
  table.removeChild(row);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here

  const productRemoveButtons = document.querySelectorAll(".product .btn-remove");
  productRemoveButtons.forEach((btn) => {
    btn.addEventListener("click", removeProduct)
  })
});

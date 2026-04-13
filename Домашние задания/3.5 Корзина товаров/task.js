const getValue = product => product.querySelector('.product__quantity-value'),
  getValueCount = product => parseInt(getValue(product).textContent),
  setValueCount = (product, str) => getValue(product).textContent = str,
  getCart = () => document.querySelector('.cart__products'),
  getCartProduct = dataId => getCart().querySelector(`[data-id="${dataId}"]`)
  getCartProductCount = dataId => parseInt(getCartProduct(dataId).querySelector('.cart__product-count').textContent),
  setCartProductCount = (dataId, str) => getCartProduct(dataId).querySelector('.cart__product-count').textContent = str;

let products = [...document.getElementsByClassName('product')];

products.forEach(product => {
  let dec = product.querySelector('.product__quantity-control_dec'),
    inc = product.querySelector('.product__quantity-control_inc'),
    add = product.querySelector('.product__add'),
    dataId = product.getAttribute('data-id'),
    image = product.querySelector('.product__image').getAttribute('src');
    
  dec.addEventListener('click', function() {
    if (getValueCount(product) > 1) {
      setValueCount(product, getValueCount(product) - 1);
    }
  })

  inc.addEventListener('click', function() {
    setValueCount(product, getValueCount(product) + 1);
  })

  add.addEventListener('click', function() {
    let cartProduct = getCartProduct(dataId);
    if(cartProduct === null) {
      getCart().innerHTML = getCart().innerHTML + `
      <div class="cart__product" data-id="${dataId}">
        <img class="cart__product-image" src="${image}">
        <div class="cart__product-count">${getValueCount(product)}</div>
      </div>
      `;
    } else {
      setCartProductCount(dataId, getCartProductCount(dataId) + getValueCount(product));
    }
  })
});
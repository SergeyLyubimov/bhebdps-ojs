(() => {
  let items = [...document.getElementsByClassName('menu__item')];

  items.forEach(item => {
    let link = item.querySelector('.menu__link');

    if (item.querySelector('.menu_sub') !== null) {
      let sub = item.querySelector('.menu_sub');
      
      link.removeAttribute("href");
      link.addEventListener('click', function() {
        if (sub.classList.contains('menu_active')){
          sub.className = 'menu menu_sub';
        } else {
          sub.className = 'menu menu_sub menu_active';
        }
      })
    }
  })
})();
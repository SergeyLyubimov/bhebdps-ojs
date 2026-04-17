async function getData() {
  const response = await fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses');
  const body = await response.json();

  document.getElementById('items').innerHTML = Object.values(body.response.Valute).map(item =>
    `<div class="item">
      <div class="item__code">
      ${item.CharCode}
      </div>
      <div class="item__value">
      ${item.Value}
      </div>
      <div class="item__currency">
      руб.
      </div>
    </div>`).join('');

  document.getElementById('loader').classList.remove('loader_active');
}

getData();
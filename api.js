<!DOCTYPE html>
<html>
<head>
  <title>Fake Products Store</title>
</head>
<body>
  <h1>Fake Store Products</h1>
  <button id="loadBtn">Load Products</button>
  <div id="products"></div>

  <script>
    const btn = document.getElementById('loadBtn');
    const container = document.getElementById('products');

    btn.addEventListener('click', () => {
      btn.disabled = true;
      btn.textContent = 'Loading...';

      fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(products => {
          container.innerHTML = ''; // clear
          products.forEach(p => {
            const card = document.createElement('div');
            card.style.border = '1px solid #ccc';
            card.style.padding = '10px';
            card.style.margin = '10px 0';

            card.innerHTML = `
              <h3>${p.title}</h3>
              <p>Price: $${p.price}</p>
              <p>Category: ${p.category}</p>
              <img src="${p.image}" alt="${p.title}" width="100">
            `;
            container.appendChild(card);
          });
          btn.textContent = 'Reload Products';
          btn.disabled = false;
        })
        .catch(err => {
          container.textContent = 'Failed to load products';
          console.error(err);
          btn.textContent = 'Try Again';
          btn.disabled = false;
        });
    });
  </script>
</body>
</html>

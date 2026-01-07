let data = [
  { id: 1, category: "Electronics", name: "Laptop" },
  { id: 2, category: "Clothing", name: "Shirt" },
  { id: 3, category: "Electronics", name: "Phone" },
  { id: 4, category: "Clothing", name: "Pant"},
  { id: 5, category: "Electronics", name: "Tablet"},
  { id: 6, category: "Stationary", name: "Pen"},
  { id: 7, category: "Food", name: "Bread"},
  { id: 8, category: "Electronics", name: "Mouse"},
  { id: 9, category: "Food", name: "Milk"}
  
];

let groupeddata = data.reduce((acc,product) => {
  let cat = product.category;
  if (!acc[cat]) {
    acc[cat] = [];
  }
  acc[cat].push(product);
  return acc;
}, {});

let electronicsOnly = groupeddata['Electronics'];
console.log(electronicsOnly);

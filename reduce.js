const data = [
  { id: 1, category: "Electronics", name: "Laptop" },
  { id: 2, category: "Clothing", name: "Shirt" },
  { id: 3, category: "Electronics", name: "Phone" }
];

const grouped = data.reduce((acc, item) => {
  const cat = item.category;
  if (!acc[cat]) {
    acc[cat] = [];
  }
  acc[cat].push(item);
  return acc;
}, {});

console.log(grouped);

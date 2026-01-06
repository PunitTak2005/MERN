const phones = [
  { name: "Samsung Galaxy A15", price: 8500, brand: "Samsung" },
  { name: "OnePlus Nord CE 3", price: 12500, brand: "OnePlus" },
  { name: "Realme 12 Pro", price: 14500, brand: "Realme" },
  { name: "iPhone SE (2022)", price: 32000, brand: "Apple" },
  { name: "Moto G85", price: 15999, brand: "Motorola" },
  { name: "Vivo T3", price: 13500, brand: "Vivo" },
  { name: "Iphone 15 Pro Max", price: 150000, brand: "Apple" },
  { name: "Nothing A2", price: 20000, brand: "Nothing" }
];

const minPrice = 10000;
const maxPrice = 15000;

const filteredPhones = phones.filter(phone=> 
  phone.price >= minPrice && phone.price <= maxPrice
);

console.log(filteredPhones);

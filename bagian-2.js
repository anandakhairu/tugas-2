const products = [
  { id: 1, title: "Laptop Asus ROG", price: 1200, category: "laptops", stock: 5 },
  { id: 2, title: "Smartphone Galaxy S23", price: 800, category: "phones", stock: 15 },
  { id: 3, title: "Headphones Sony WH", price: 100, category: "audio", stock: 3 },
  { id: 4, title: "MacBook Air M2", price: 1100, category: "laptops", stock: 8 },
  { id: 5, title: "iPhone 15 Pro", price: 999, category: "phones", stock: 12 },
  { id: 6, title: "iPad Air", price: 600, category: "tablets", stock: 4 },
  { id: 7, title: "Mechanical Keyboard", price: 80, category: "accessories", stock: 20 },
  { id: 8, title: "Wireless Mouse", price: 40, category: "accessories", stock: 25 },
  { id: 9, title: "Gaming Monitor 144Hz", price: 300, category: "electronics", stock: 2 },
  { id: 10, title: "Smartwatch Series 9", price: 400, category: "wearables", stock: 6 },
  { id: 11, title: "Bluetooth Speaker", price: 150, category: "audio", stock: 18 },
  { id: 12, title: "External SSD 1TB", price: 120, category: "storage", stock: 7 },
  { id: 13, title: "USB-C Flash Drive", price: 25, category: "storage", stock: 30 },
  { id: 14, title: "Wi-Fi 6 Router", price: 90, category: "electronics", stock: 9 },
  { id: 15, title: "Webcam Full HD", price: 70, category: "accessories", stock: 11 },
  { id: 16, title: "USB Condenser Mic", price: 110, category: "audio", stock: 5 },
  { id: 17, title: "Mini Projector", price: 450, category: "electronics", stock: 1 },
  { id: 18, title: "Power Bank 20000mAh", price: 35, category: "accessories", stock: 22 },
  { id: 19, title: "Laptop Lenovo ThinkPad", price: 1050, category: "laptops", stock: 3 },
  { id: 20, title: "Google Pixel 8", price: 700, category: "phones", stock: 14 },
  { id: 21, title: "VR Headset Quest 3", price: 500, category: "electronics", stock: 4 },
  { id: 22, title: "Graphics Card RTX 4060", price: 400, category: "electronics", stock: 2 },
  { id: 23, title: "RAM DDR5 16GB", price: 85, category: "electronics", stock: 16 },
  { id: 24, title: "AirPods Pro", price: 249, category: "audio", stock: 10 },
  { id: 25, title: "Laptop HP Pavilion", price: 750, category: "laptops", stock: 8 },
  { id: 26, title: "Galaxy Tab S9", price: 650, category: "tablets", stock: 13 },
  { id: 27, title: "Smart Door Lock", price: 180, category: "electronics", stock: 6 },
  { id: 28, title: "Fitness Band", price: 50, category: "wearables", stock: 19 },
  { id: 29, title: "Drawing Tablet Pen", price: 280, category: "accessories", stock: 5 },
  { id: 30, title: "HDMI 2.1 Cable", price: 15, category: "accessories", stock: 40 }
];

function findProductById(products, id) {
  return products.find(product => product.id === id);
}

console.log(findProductById(products, 3)); 

const lowStockProducts = products.filter(product => product.stock < 10);

console.log(lowStockProducts);

function updateStock(products, id, newStock) {
  return products.map(p => 
    p.id === id ? { ...p, stock: newStock } : p
  );
}

const updatedProducts = updateStock(products, 1, 20);
console.log("Stok Asli Produk 1:", products[0].stock); 
console.log("Stok Baru Produk 1:", updatedProducts[0].stock); 
// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
// ใช้loop for ปกติ
/* let minFruit = inventory[0].quantity;
let fruitName = "";
for (let i = 1; i < inventory.length; i++) {
  if (inventory[i].quantity < minFruit) {
    minFruit = inventory[i].quantity;
    fruitName = inventory[i].name;
  }
}
console.log(
  `สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${fruitName} ซึ่งมี ${minFruit} ชิ้น`
);
 */

//ใช้ for of

let minFruit = inventory[0].quantity;
let fruitName = "";
for (let item of inventory) {
  if (minFruit === 0) {
    minFruit = item["quantity"];
    fruitName = item["name"];
  } else if (minFruit > item["quantity"]) {
    minFruit = item["quantity"];
    fruitName = item["name"];
  }
}
console.log(
  `สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${fruitName} ซึ่งมี ${minFruit} ชิ้น`
);

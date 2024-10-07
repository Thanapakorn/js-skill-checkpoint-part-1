// Question #1
const myTodo = [
  { id: 1, todo: "Buy groceries" },
  { id: 2, todo: "Finish homework" },
  { id: 3, todo: "Call mom" },
  { id: 4, todo: "Wash dishes" },
];
// เริ่มเขียนโค้ดตรงนี้

// เพิ่ม obj
myTodo.push({ id: 5, todo: "Walk the dog" });

// แกไขชื่อ
myTodo[3]["todo"] = "Go to the gym";

// ลบ obj อันสุดท้ายออก
myTodo.pop();

console.log(myTodo);

//แสดง obj อันสุดท้าย
console.log(`To-do id: ${myTodo[3]["id"]}, ${myTodo[3]["todo"]}`);

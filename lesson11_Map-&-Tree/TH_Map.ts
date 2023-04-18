let employeeMap = new Map();
employeeMap.set("P D Nam", 26);
employeeMap.set("L Q Trung", 25);
employeeMap.set("N T Viet", 25);
employeeMap.set("T H Nam", 30);
employeeMap.set("D X Tin", 27);
console.log(employeeMap.size);
console.log(employeeMap.get("P D Nam"));
console.log(employeeMap.get("aaaaa"));

let name1 = Array.from(employeeMap.keys());
name1.forEach(element => console.log(`Employee name = ${element}`));

let age = Array.from(employeeMap.values());
age.forEach(element => console.log(`Employee age = ${element}`));
//
// console.log("The employeeMap Entries are: ");
//
// let employee = Array.from(employeeMap.entries());
// employee.forEach(element => console.log(element[0] + ": " + element[1]));

let employee = Array.from(employeeMap);
employee.forEach(element => console.log(`${element[0]}: ${element[1]}`));

employeeMap.delete("L Q Trung");
console.log(employeeMap);
employeeMap.clear();
console.log(employeeMap);
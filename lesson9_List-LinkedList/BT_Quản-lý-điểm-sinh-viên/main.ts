import {StudentScoreList} from "./StudentScoreList";

let StudentScoreList1 = new StudentScoreList();
StudentScoreList1.insertFirst("P D Nam", 9);
StudentScoreList1.insertLast("C T Manh", 5);
StudentScoreList1.insertLast("T H Nam", 4);
StudentScoreList1.insertLast("P D Nam", 4);
StudentScoreList1.insertLast("T V Linh", 7);
StudentScoreList1.insertLast("T S Minh", 9);
StudentScoreList1.insertLast("N Q Vu", 3);
console.table(StudentScoreList1.showList());
console.log("===============================");
console.table(StudentScoreList1.totalStudentsFail());
console.log("===============================");
console.table(StudentScoreList1.listStudentMaxScore());
console.log("===============================");
console.table(StudentScoreList1.findByName("P D Nam"));
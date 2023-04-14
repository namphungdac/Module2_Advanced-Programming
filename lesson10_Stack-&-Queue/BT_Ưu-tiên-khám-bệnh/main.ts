import {ListPatient} from "./ListPatient";
import {Patient} from "./Patient";

let patient1 = new Patient("Smith", 5);
let patient2 = new Patient("Jones", 4);
let patient3 = new Patient("Fehrenbach", 6);
let patient4 = new Patient("Brown", 1);
let patient5 = new Patient("Ingram", 1);
let listPatients1 = new ListPatient();
listPatients1.enqueue(patient1);
listPatients1.enqueue(patient2);
listPatients1.enqueue(patient3);
listPatients1.enqueue(patient4);
listPatients1.enqueue(patient5);
console.log("Danh sách bệnh nhân ban đầu:")
console.table(listPatients1.getListUnexaminedPatients());
listPatients1.sortListUnexaminedPatients();
console.log("Danh sách bệnh nhân nhập viện theo độ ưu tiên: ");
console.table(listPatients1.getListUnexaminedPatients());
console.log("===============================================");
console.log(listPatients1.examinedPatient());
console.table(listPatients1.examinedNextPatient());
console.log("===============================================");
console.log("Danh sách bệnh nhân chưa được khám: ");
console.table(listPatients1.getListUnexaminedPatients());
console.log("Danh sách bệnh nhân đã được khám: ");
console.table(listPatients1.getListExaminedPatients());


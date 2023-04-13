import {LinkedList} from "./LinkedList";

let LinkedList1 = new LinkedList<number>();
LinkedList1.insertFirstNode(1);
LinkedList1.insertFirstNode(2);
LinkedList1.insertFirstNode(3);
LinkedList1.insertFirstNode(30);
LinkedList1.insertLastNode(40);
console.log(LinkedList1.getSize());
console.log(LinkedList1.readLinkedList());
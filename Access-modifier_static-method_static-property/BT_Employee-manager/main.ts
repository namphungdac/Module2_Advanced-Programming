import {EmployeeManager} from "./EmployeeManager";
import {Employee} from "./Employee";

EmployeeManager.addEmployee(new Employee(["Phung", "Nam", new Date("1-20-1997"), "Ha Noi", "Engineer", "277129"]));
EmployeeManager.addEmployee(new Employee(["Le", "Trung", new Date("1998-08-23"), "Thai Binh", "Engineer", "277089"]));
EmployeeManager.addEmployee(new Employee(["Nguyen", "Viet", new Date("1998-12-05"), "Ha Noi", "Engineer", "277041"]));
EmployeeManager.addEmployee(new Employee(["Nguyen", "Ha", new Date("1999-01-10"), "Thanh Hoa", "Engineer", "277233"]));

// EmployeeManager.addEmployee(new Employee("Phung", "Nam", new Date("1-20-1997"), "Ha Noi", "Engineer", "277129"));
// EmployeeManager.addEmployee(new Employee("Le", "Trung", new Date("1998-08-23"), "Thai Binh", "Engineer", "277089"));
// EmployeeManager.addEmployee(new Employee("Nguyen", "Viet", new Date("1998-12-05"), "Ha Noi", "Engineer", "277041"));
// EmployeeManager.addEmployee(new Employee("Nguyen", "Ha", new Date("1999-01-10"), "Thanh Hoa", "Engineer", "277233"));

// EmployeeManager.showInfoEmployee("277129");
EmployeeManager.deleteEmployee("277129");
EmployeeManager.showInfoEmployeeList();
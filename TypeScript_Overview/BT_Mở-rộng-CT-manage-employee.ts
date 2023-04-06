enum Gender {
    male = "Male",
    female = "Female",
    orther = "Orther",
}

class Employee {
    name:string;
    gender:Gender;
    birthday:Date;
    email:string;
    phoneNumber:string;
    constructor(name:string,gender:Gender,birthday:Date,email:string,phoneNumber:string) {
        this.name = name;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
}

let EmployeeList:Employee[] = [];
let employee1 = new Employee("P D Nam", Gender.female, new Date("1997-10-01"), "phungdacnam1997@gmail.com", "0353608233");
let employee2 = new Employee("Tran Thi A", Gender.female, new Date("1991-10-12"), "btran@gmail.com", "0123456790");
let employee3 = new Employee("Huynh An Nhien", Gender.male, new Date("1990-09-19"), "nhienhuynh@gmail.com", "0123456791");
// EmployeeList.push(employee1,employee2,employee3);

// function showEmployee(value: Employee) {
//     console.log(value);
// }
//
// EmployeeList.forEach(showEmployee);

class managerEmloyee {
    employeesList:Employee[] = [];
    constructor() {
    }
    addEmployee(employee:Employee) {
        this.employeesList.push(employee);
    }
    deleteEmployee(index:number) {
        this.employeesList.splice(index,1);
    }
    showEmployee() {
        console.log(this.employeesList);
    }
}
let manager = new managerEmloyee();
manager.addEmployee(employee1);
manager.addEmployee(employee2);
manager.addEmployee(employee3);
manager.showEmployee();
manager.addEmployee(new Employee("N T Binh", Gender.male, new Date("1997-10-04"), "binhnt@gmail.com","012345678"));
manager.deleteEmployee(2);
manager.showEmployee();



enum Genders {
    male = "Male",
    female = "Female",
    orther = "Other",
}

class Employee {
    name:string;
    gender:Genders = Genders.orther;
    dateOfBirth:Date;
    email:string;
    phoneNumber?:string;
    constructor(name:string, gender:Genders,dateofbirth:Date,email:string,phonenumber:string) {
        this.name = name;
        this.gender = gender;
        this.dateOfBirth = dateofbirth;
        this.email = email;
        this.phoneNumber = phonenumber;
    }
}

let listEmployee:Employee[] = [];
listEmployee.push(new Employee("Phung Dac Nam",Genders.male, new Date("10-01-1997"),"phungdacnam1997@gmail.com", "0353608233"));
listEmployee.push(new Employee("Tran Thi A", Genders.female, new Date("1991-10-12"), "btran@gmail.com", "0123456790"));
listEmployee.push(new Employee("Huynh An Nhien", Genders.male, new Date("1990-09-19"), "nhienhuynh@gmail.com", "0123456791"));
function showEmployee(value: Employee) {
    console.log(value);
}
listEmployee.forEach(showEmployee);

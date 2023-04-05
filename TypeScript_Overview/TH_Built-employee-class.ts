class Staff {
    public name:string;
    public email:string
    public age:number;
    constructor(name:string, email:string, age:number) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    setName(value:string) {
        this.name = value;
    }
    setEmail(value:string) {
        this.email = value;
    }
    setAge(value:number) {
        this.age = value;
    }
}
let staff1 = new Staff("Nam", "nampd15@viettel.com.vn", 24);
console.log(staff1);
staff1.setName("Nampd15");
console.log(staff1.name);
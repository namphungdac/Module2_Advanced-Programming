enum Role {
    admin = 1,
    user
}

class User {
    protected name:string;
    protected email:string;
    role:Role;

    constructor(name: string, email: string, role: Role) {
        this.name = name;
        this.email = email;
        this.role = role;
    }
    getInfo():string {
        return `User: ${this.name}, email: ${this.email}, ${this.isAdmin()}`;
    }
    isAdmin():string {
        if (this.role === 1) {
            return `is Admin`;
        } else {
            return `is User`;
        }
    }
    setName(value:string) {
        this.name = value;
    }
    setEmail(value:string) {
        this.email = value;
    }
    setRole(value:Role) {
        this.role = value;
    }
}
let user1 = new User("P D nam", "phungdacnam1997@gmail.com", Role.admin);
console.log(user1.getInfo());
user1.setRole(Role.user);
user1.setEmail("nampd15@viettel.com.vn");
console.log(user1.getInfo());


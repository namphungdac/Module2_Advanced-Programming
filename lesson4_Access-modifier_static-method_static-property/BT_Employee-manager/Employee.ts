export class Employee {
    private firstName: string;
    private lastName: string;
    private birthDay: Date;
    private address: string;
    private position: string;
    private ID: string

    constructor(data: any[]) {
        this.firstName = data[0];
        this.lastName = data[1];
        this.birthDay = data[2];
        this.address = data[3];
        this.position = data[4];
        this.ID = data[5];
    }

    // constructor(firstName: string, lastName: string, birthDay: Date, address: string, position: string, ID: string) {
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    //     this.birthDay = birthDay;
    //     this.address = address;
    //     this.position = position;
    //     this.ID = ID;
    // }

    getFirstname(): string {
        return this.firstName;
    }

    getLastName(): string {
        return this.lastName;
    }

    getBirthday(): Date {
        return this.birthDay;
    }

    getAddress(): string {
        return this.address;
    }

    getPosition(): string {
        return this.position;
    }

    getID(): string {
        return this.ID;
    }

    setFirstname(firstName: string) {
        this.firstName = firstName;
    }

    setLastName(lastName: string) {
        this.lastName = lastName;
    }

    setBirthday(birthDay: Date) {
        this.birthDay = birthDay;
    }

    setAddress(address: string) {
        this.address = address;
    }

    setPosition(position: string) {
        this.position = position;
    }

    setID(ID: string) {
        this.ID = ID;
    }
}
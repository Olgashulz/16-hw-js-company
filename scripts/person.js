class Person {
    constructor(id, firstName, lastName, birthdate) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthDate = new Date(birthdate);
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get firstName() {
        return this.fullName();
    }

    set firstName(firstName) {
        this._firstName = firstName;
    }

    get age() {
        // const ageDiffMs = (new Date()) - this._birthDate;
        // const ageDate = new Date(ageDiffMs);
        // console.log(ageDate)
        // return (ageDate.getUTCFullYear() - 1970);
        let today = new Date();
        let age = today.getFullYear() - this._birthDate.getFullYear();
        let m = today.getMonth() - this._birthDate.getMonth();

        m = Math.abs(m);
        if (age === 0) {
            m === 0 ? m = 11 : m;
        }

        return age > 1 ? age - 1 : m / 12;
    }

    fullName() {
        return `${this._firstName} ${this._lastName}`;
    }
}

class Employee extends Person {
    constructor(id, firstName, lastName, birthdate, salary) {
        super(id, firstName, lastName, birthdate);
        this._salary = salary;
    }

    get salary() {
        return this._salary;
    }

    set salary(value) {
        if (value > this._salary) {
            this._salary = value;
        }
    }
}
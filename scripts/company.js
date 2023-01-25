class Company {
    constructor() {
        this._employees = [];
    }


    get employees() {
        return [...this._employees];
    }

    findById(id) {
        return this._employees.findIndex(e => e.id === id);
    }

    addEmployee(employee) {
        if (this.findById(employee.id) < 0) {
            this._employees.push(employee);
        }
        return !this.findById(employee.id) < 0;
    }

    removeEmployee(id) {
        const index = this.findById(id);
        if (index >= 0) {
            this._employees.splice(index, 1);
        }
        return index >= 0;
    }

    calculateTotalSalary() {
        return this.employees.reduce((res, e) => Number(e.salary) + res, 0);
    }

    getSize() {
        return this._employees.length;
    }

}
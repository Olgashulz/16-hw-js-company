btn.addEventListener('click', handleSubmit);
btn.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
        handleSubmit();
    }
})
statsBtn.addEventListener('click', printStats);

const data = ['id', 'first Name', 'last Name', 'age', 'salary', 'delete'];
const firm = new Company();
const names = Array.from(form.children);

function handleSubmit(event) {
    event.preventDefault();
    const employee = new Employee(personId.value, firstName.value.trim(), lastName.value.trim(), birthdate.value, salary.value);

    if (checkValidity(employee)) {
        firm.addEmployee(employee);

        if (document.querySelector('.blockTable') === null) {
            createTable(firm.employees);
        }

        if (firm.getSize()) {
            createFillTable(employee);
        }

        names.forEach(n => {
            if (n !== 'label' || n !== 'button' || n !== 'h3') {
                n.value = '';
            }
        })
    }
}

function checkValidity(employee) {
    for (let key in employee) {
        if (employee[key] === undefined || employee[key] === '') {
            alert("You did not enter all the data, please try again.");
            return false;
        }
    }
    if (firm.findById(employee.id) >= 0) {
        alert("A person with this id already exists, check and enter the correct data.");
        return false;
    }
    return true;
}




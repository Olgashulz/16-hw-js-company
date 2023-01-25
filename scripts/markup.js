function createTable(firm) {
    const blockTable = document.createElement('div');
    blockTable.classList.add('blockTable');

    const tableEl = document.createElement('table');
    tableEl.setAttribute('class', 'table table-secondary table-bordered');

    const theadEl = document.createElement('thead');
    tableEl.appendChild(theadEl);

    const trEl = document.createElement('tr');
    theadEl.appendChild(trEl);

    for (let i = 0; i < data.length; i++) {
        const thEl = createInfoElement(data[i].toString(), 'th')
        thEl.scope = 'col';
        trEl.appendChild(thEl);
    }

    const tbodyEl = document.createElement('tbody');
    tbodyEl.classList.add('body');
    tableEl.append(tbodyEl);

    blockTable.append(tableEl);
    personalData.append(blockTable);
}

function createFillTable(employee) {
    const bodyTrEl = document.createElement('tr');
    document.querySelector('.body').appendChild(bodyTrEl);

    for (let key in employee) {
        if (key === '_birthDate') {
            const age = firm.employees[firm.getSize() - 1].age;
            const tdBodyEl = createInfoElement(toMonthsOrYears(age), 'td');
            bodyTrEl.appendChild(tdBodyEl);
        } else {
            const tdBodyEl = createInfoElement(employee[key].toString(), 'td')
            bodyTrEl.appendChild(tdBodyEl);
        }
    }
    const tdBodyEl = document.createElement('td');
    const buttonDel = createButtonDelete(function () {
        firm.removeEmployee(employee.id);
        hideBlock('.containerStats')
    });
    tdBodyEl.append(buttonDel);
    buttonDel.setAttribute('class', 'del btn btn-three');
    bodyTrEl.appendChild(tdBodyEl);
    hideBlock('.containerStats')
}

function printStatsAge(event) {
    event.preventDefault();
    if (firm.getSize()) {
        const ages = firm.employees.map(item => item.age);
        const minAge = Math.min(...ages);
        const maxAge = Math.max(...ages);
        const avgAge = ages.reduce((res, a) => a + res, 0) / ages.length;
        const divStats = document.createElement('div');
        divStats.classList.add('containerStats');

        const pavg = createInfoElement(`Average age: ${avgAge >= 1 ? Math.round(avgAge) + ' years' : Math.round(avgAge * 12) + ' months'}`, 'p');
        const pmin = createInfoElement(`Min age: ${toMonthsOrYears(minAge)}`, 'p');
        const pmax = createInfoElement(`Max age: ${toMonthsOrYears(maxAge)}`, 'p');
        divStats.append(pavg, pmin, pmax);

        if (document.querySelector('.containerStats') !== null) {
            stats.replaceChild(divStats, stats.firstElementChild);
        } else {
            stats.appendChild(divStats);
        }
    } else {
        stats.appendChild(createInfoElement('No stats...', 'h4'));
    }
}

function printStats(event) {
    event.preventDefault();
    if (firm.getSize()) {
        const divStats = document.createElement('div');
        divStats.classList.add('containerStats');
        const totalSalary = createInfoElement(`Total salary: ${firm.calculateTotalSalary().toFixed(2)}₪`, 'p');
        const avgSalary = createInfoElement(`Average salary: ${(firm.calculateTotalSalary() / firm.getSize()).toFixed(2)}₪`, 'p');
        divStats.append(totalSalary, avgSalary);

        document.querySelector('.containerStats') !== null ? stats.replaceChild(divStats, stats.firstElementChild) : stats.appendChild(divStats);

    } else {
        stats.appendChild(createInfoElement('No stats...', 'h4'));
    }
}

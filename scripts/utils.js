function createButtonDelete(callBack) {
    const buttonDel = createInfoElement('x', 'button');
    buttonDel.addEventListener('click', function (e) {
        e.target.parentElement.parentElement.remove();
        callBack();
    });
    return buttonDel;
}

function createInfoElement(content, tag) {
    const element = document.createElement(tag);
    const text = document.createTextNode(content);
    element.appendChild(text);
    return element;
}

function hideBlock(selector) {
    const containerStatsEl = document.querySelector('.containerStats')
    if (containerStatsEl) {
        containerStatsEl.remove();
    }
}


function toMonthsOrYears(num) {
    return num >= 1 ? num + ' years' : num * 12 + ' months';
}
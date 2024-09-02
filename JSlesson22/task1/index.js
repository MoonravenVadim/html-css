function logTarget(text, color) {
    const list = document.querySelector('.events-list');

    list.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
}

const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

const logGrayDiv = logTarget.bind(null, 'DIV', 'grey');
const logGrayP = logTarget.bind(null, 'P', 'gray');
const logGraySpan = logTarget.bind(null, 'SPAN', 'gray');

const clearBtn = document.querySelector('.clear-btn');
function clearList() {
    const list = document.querySelector('.events-list');
    list.innerHTML = '';
}
clearBtn.addEventListener('click', clearList, true);

const RectDiv = document.querySelector('.rect_div');
const RectP = document.querySelector('.rect_p');
const RectSpan = document.querySelector('.rect_span');

const AttachHandlersBtn = document.querySelector('.attach-handlers-btn');
function AttachHandlers() {
    RectDiv.addEventListener('click', logGrayDiv, true);
    RectP.addEventListener('click', logGrayP, true);
    RectSpan.addEventListener('click', logGraySpan, true);

    RectDiv.addEventListener('click', logGreenDiv);
    RectP.addEventListener('click', logGreenP);
    RectSpan.addEventListener('click', logGreenSpan);
}


AttachHandlersBtn.addEventListener('click', AttachHandlers, true);

const removeEventsHandlerBtn = document.querySelector('.remove-handlers-btn');

function removeEventsHandler() {
    RectDiv.removeEventListener('click', logGrayDiv, true);
    RectP.removeEventListener('click', logGrayP, true);
    RectSpan.removeEventListener('click', logGraySpan, true);

    RectDiv.removeEventListener('click', logGreenDiv);
    RectP.removeEventListener('click', logGreenP);
    RectSpan.removeEventListener('click', logGreenSpan);
}

removeEventsHandlerBtn.addEventListener('click', removeEventsHandler);

clearList()
AttachHandlers()
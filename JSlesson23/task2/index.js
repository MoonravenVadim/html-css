const boardElem = document.querySelector('.arena');

const getRange = (from, to) => {
    let result = [];

    for (let i = from; i <= to; i += 1) {
        result.push(i);
    }

    return result;
}

const getSeats = () => getRange(1, 10)
    .map(seatNumber => `
    <div
        class="sector__seat"
        data-seat-number="${seatNumber}"
    ></div>
    `).join('');

const getLineSeats = () => {
    return getRange(1, 10)
    .map(lineSeatsNumber => `
    <div
        class="sector__line"
        data-line-number="${lineSeatsNumber}"
    >${getSeats()}</div>
    `).join('');
}

const drawSectors = () => {
    const board = [1, 2, 3]
    .map(sectorNumber => `
    <div
        class="sector"
        data-sector-number="${sectorNumber}"
        >${getLineSeats()}</div>
    `).join('');

    boardElem.innerHTML = board;
}

const onSeatSelect = event => {
    const isSeat = event.target.classList.contains('sector__seat');

    if (!isSeat) {
        return;
    }

    const seatNumber = event.target.dataset.seatNumber;
    const lineNumber = event.target.closest('.sector__line').dataset.lineNumber;
    const sector = event.target.closest('.sector').dataset.sectorNumber;

    document.querySelector('.board__selected-seat').textContent = `S ${seatNumber} - L ${lineNumber} - S ${sector}`
}

boardElem.addEventListener('click', onSeatSelect);

drawSectors();
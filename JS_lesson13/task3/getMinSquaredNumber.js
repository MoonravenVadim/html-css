export const getMinSquaredNumbers = arr => {
    if (!Array.isArray(arr) || arr.length === 0) {
        return null;
    }

    const absArray = arr.map(num => Math.abs(num));

    const minNumber = Math.min(...absArray);

    return minNumber * minNumber;
}
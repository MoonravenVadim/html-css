import { reverseArray, withdraw, getAdults } from './tasks';

// reverseArray

it('reverse array', () => {
    expect(reverseArray([1, 2, 3])).toEqual([3, 2, 1]);
});

it('if not array', () => {
    expect(reverseArray(5)).toEqual(null);
});

it('if empty array', () => {
    expect(reverseArray([])).toEqual([]);
});

// withdraw

it('new balance', () => {
    const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);

    expect(result).toEqual(37);
});

it('new balance', () => {
    const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);

    expect(result).toEqual(-1);
});

it('new balance', () => {
    const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'Ann', 1000);

    expect(result).toEqual(400);
});

// getAdults

it('get adults', () => {
    const result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });

    expect(result).toEqual({ 'John Doe': 19, Bob: 18 });
});

it('get adults', () => {
    const result = getAdults({ Ann: 56, Andrey: 7 });

    expect(result).toEqual({ Ann: 56 });
});

it('get adults', () => {
    const result = getAdults({ Bob: 76, Andrey: 7 });

    expect(result).toEqual({ Bob: 76 });
});
import { getMinSquaredNumbers } from './getMinSquaredNumber'

it('return null if not array', () => {
    expect('d').toEqual(null);
});

it('return null if empty array', () => {
    expect([]).toEqual(null);
});

it('return min squared number by module', () => {
    const result = getMinSquaredNumbers([-777, 3, -2, 6, 45, -20]);

    expect(result).toEqual(4);
})
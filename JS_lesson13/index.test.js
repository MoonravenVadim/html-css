it('17 is 17', () => {
    expect(17).toEqual(17);
});

it('17 is not 18', () => {
    expect(17).not.toEqual(18);
});

const getEvenNumbes = numbers =>
    numbers.filter(num => (num % 2 == 0));

it('should get even numbers from array', () => {
    const result = getEvenNumbes([1, 2, 3, 4]);
    expect(result).toEqual([2, 4]);
})
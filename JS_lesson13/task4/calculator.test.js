import { calc } from './calculator'

it('get sum', () => {
    expect(calc('4 + 4')).toEqual('4 + 4 = 8');
});

it('get minus', () => {
    expect(calc('5 - 2')).toEqual('5 - 2 = 3');
});

it('get divide', () => {
    expect(calc('6 / 3')).toEqual('6 / 3 = 2');
});

it('get multiplication', () => {
    expect(calc('2 * 4')).toEqual('2 * 4 = 8');
});

it('if not a string', () => {
    expect(calc(4)).toEqual(null);
});
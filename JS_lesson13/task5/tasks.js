'use strict';

// put your code here
export function reverseArray (arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  return arr.slice().reverse();
}

export const withdraw = (clients, balances, client, amount) => {
    let indexClient = clients.indexOf(client);
    return balances[indexClient] < amount ? -1 : balances[indexClient] -= amount;
  };
  
  // examples
  withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50); // ==> 37 (balances array should be [1400, 37, -6])
  withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10); // ==> -1 (balances array should be [1400, 87, -6])


/* eslint-disable no-restricted-syntax */

/* Для решения этой задачи используй for..in цикл. В реальных проектах это плохая практика,
 * лучше использовать методы класса Object - keys(), values(), entries(). Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 * */

export const getAdults = obj => {
    let result = {};
    for (let key in obj) {
      if (obj[key] >= 18) {
        result[key] = obj[key];
      }
    }
    return result;
  };
  
  // examples
  getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 }); // ==> { 'John Doe': 19, Bob: 18 }
  getAdults({ Ann: 56, Andrey: 7 }); // ==> { Ann: 56 }
  
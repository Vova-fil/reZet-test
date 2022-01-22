const arr1 = [
  [1, 2, 3, 2, 7],
  [4, 5, 6, 8, 1],
  [7, 8, 9, 4, 5],
];
const arr2 = arr1.flat();
const 

const didPlayerMove = (arr2, symbol) => {
  // Обходим поле. Каждый элемент — это строчка в игровом поле.
  for (const row of field) {
    // метод includes проверяет присутствует ли элемент в массиве,
    if (row.includes(symbol)) {
      // Если присутствует, значит мы нашли то, что искали.
      return true;
    }
  }

  // Если поле было просмотрено, но ничего не нашли,
  // значит ходов не было.
  return false;
};

/* eslint-disable-next-line */
export const sortByWeight = arr => {
  return arr.sort((first, second) => sumNums(first) > sumNums(second));
};

const sumNums = number => {
  return number.split('').reduce(
    (sum, curr) => parseInt(sum) + parseInt(curr)
  );
};

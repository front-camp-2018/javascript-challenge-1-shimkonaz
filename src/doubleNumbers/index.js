/* eslint-disable-next-line */
export const doubleNum = num => {
  const numbered = num.toString();
  const head = numbered.substring(0, numbered.length / 2);
  const tail = numbered.substring(numbered.length / 2);

  if (head === tail) {
    return num;
  } else {
    return num * 2;
  }
};

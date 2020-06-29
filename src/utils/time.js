export const prependZero = (num) => {
  return num < 10 ? "0" + num.toString() : num.toString();
};

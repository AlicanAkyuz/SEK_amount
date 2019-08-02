// slices a given number from beginning digit till the third digit after dot (.)
// returns the sliced number
const sliceNumber = (num) => {
  const str = num.toString();
  const rateDotIndx = str.split('').indexOf('.');
  return rateDotIndx === -1 ? Number(str) : Number(str.slice(0, rateDotIndx + 3));
};

export default sliceNumber;

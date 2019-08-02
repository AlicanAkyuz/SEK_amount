// adds a dot (.) after every third digit from right to left of provided number
// returns a dotted string version of the incoming number
const dotifyNumber = (num) => {
  const strArr = num.toString().split('');
  const newArr = [];
  for (let i = strArr.length - 1; i >= 0; i -= 1) {
    if ((strArr.length - i) % 3 === 0 && i !== 0) {
      newArr.unshift(`.${strArr[i]}`);
    } else {
      newArr.unshift(strArr[i]);
    }
  }
  return newArr.join('');
};

export default dotifyNumber;

/* eslint-disable array-callback-return */
export default function getUnicItems(arr) {
  let newArr = [];
  arr.map((item) => {
    if (newArr.includes(item)) {
    } else {
      newArr.push(item);
    }
  });
  return newArr;
}

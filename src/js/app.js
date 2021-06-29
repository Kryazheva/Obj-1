/* eslint-disable lines-around-directive */
/* eslint-disable guard-for-in */
'use srtict';

export default function orderByProps(objectSort, arrSort = []) {
  let arrAllKey = [];
  for (const key in objectSort) {
    // eslint-disable-next-line no-unused-expressions
    arrSort.indexOf(key) === -1 ? arrAllKey.push(key) : '';
  }
  arrAllKey = [...arrSort, ...arrAllKey.sort()];

  const result = [];
  for (const key of arrAllKey) {
    result.push({ key, value: objectSort[key] });
  }
  return result;
}

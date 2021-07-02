/* eslint-disable lines-around-directive */
/* eslint-disable guard-for-in */
'use srtict';

export default function orderByProps(objectSort, arrSort = []) {
  let arrAllKey = [];
  for (const key in objectSort) {
    // eslint-disable-next-line no-unused-expressions
    !arrSort.includes(key) ? arrAllKey.push(key) : '';
  }
  arrAllKey = [...arrSort, ...arrAllKey.sort()];

  const result = [];
  for (const key of arrAllKey) {
    result.push({ key, value: objectSort[key] });
  }
  return result;
}

// так было бы короче
// eslint-disable-next-line max-len
// Object.keys(obj).sort((a, b) =>  t.reverse().indexOf(b) - t.reverse().indexOf(a)).map(key => ({key, value: obj[key]}))

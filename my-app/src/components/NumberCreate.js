const getRandom = () => {
  // return Math.random() * (46 - 1) + 1;
  const min = Math.ceil(1);
  const max = Math.floor(46);
  return Math.floor(Math.random() * (max - min)) + min;
};

const NumberCreate = () => {
  const numberArray = [];

  while (numberArray.length < 6) {
    const temp = getRandom();
    if (!numberArray.includes(temp)) numberArray.push(temp);
    if (numberArray.length === 6) {
      numberArray.sort((a, b) => a - b);
      break;
    }
  }

  return numberArray.map((it, key) => <li key={key}>{it}</li>);
};

export default NumberCreate;

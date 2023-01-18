const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }

  const transpose = function(letters) {
    let newMatrix = [];
    const loopCount = letters[0].length;
    let x = 0;
    while (x < loopCount) {
      let innerArr = [];
      for (let i = 0; i < letters.length; i++) {
        innerArr.push(letters[i].shift());
      }
      x++;
      newMatrix.push(innerArr);
    }
    return newMatrix;
  };

  const verticalArr = transpose(letters);
  const verticalJoin = verticalArr.map(ls => ls.join(''));
  for (let l of verticalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  return false;
};

module.exports = wordSearch;

//const arr = [[2],[2],[2],[2]];

//[].concat.(...arry)



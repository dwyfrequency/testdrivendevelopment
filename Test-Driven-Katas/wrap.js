const wrap = (line, maxLen) => {
  if (!line) {
    return '';
  } else if (line[maxLen] === undefined) {
    return line;
  } else {
    let cnt = 0;
    while (line[maxLen - cnt] !== ' ') {
      cnt++;
    }
    return (
      line.slice(0, maxLen - cnt) +
      '\n' +
      wrap(line.slice(maxLen - cnt), maxLen)
    );
  }
};

// console.log(wrap('hello there', 6));

module.exports = wrap;

// if (line[maxLen] === ' ') {
//     newStr += `${line.slice(0, maxLen)}\n`;
//   } else {
//     newStr += `${line.slice(0, maxLen)}\n`;
//   }

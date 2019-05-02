const wrap = (line, maxLen) => {
  if (typeof line !== 'string') {
    return '';
  } else if (line[maxLen] === undefined) {
    return line;
  } else {
    let cnt = 0;
    while (line[maxLen - cnt] !== ' ') {
      cnt++;
    }
    return (
      // have to add 1 because slice 2nd param is up to - ie. not including
      line.slice(0, maxLen - cnt + 1) +
      '\n' +
      wrap(line.slice(maxLen - cnt + 1), maxLen)
    );
  }
};

// console.log(wrap('hello there', 6));

module.exports = wrap;

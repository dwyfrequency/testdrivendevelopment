const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap('', 10)).to.equal('');
  });
  it('Returns new line when it reaches maxlen', () => {
    expect(wrap('hello there', 6)).to.equal('hello \nthere');
  });

  it('Returns new without breaking word', () => {
    expect(wrap('multiple lines please', 10)).to.equal(
      'multiple \nlines \nplease'
    );
  });
});

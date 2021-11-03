const validateBrackets = require('./validateBrackets');

describe('Tests the functionality of the multi-bracket validator', () => {
  it('can handle square, curly, or round brackets', () => {
    let testStr1 = '(((())))';
    let testStr2 = '[[[[]]]]';
    let testStr3 = '{{{{}}}}';

    let testStr4 = '(((())';
    let testStr5 = '[[[[]]';
    let testStr6 = '{{{{}}';

    expect(validateBrackets(testStr1)).toBe(true);
    expect(validateBrackets(testStr2)).toBe(true);
    expect(validateBrackets(testStr3)).toBe(true);

    expect(validateBrackets(testStr4)).toBe(false);
    expect(validateBrackets(testStr5)).toBe(false);
    expect(validateBrackets(testStr6)).toBe(false);
  });
  it('can work with extra characters sprinkled into the mix', () => {
    let testStr1 = '[(asdfasdfa)][xcvbxcvbxvc]{{}}';
    let testStr2 = '[(asdfasdfa)[xcvbxcvbxvc{}}]';

    expect(validateBrackets(testStr1)).toBe(true);
    expect(validateBrackets(testStr2)).toBe(false);
  });
  it('can properly handle dangling left or right brackets', () => {
    let testStr1 = '[[[[(())]';
    let testStr2 = '[(())]]]]';

    expect(validateBrackets(testStr1)).toBe(false);
    expect(validateBrackets(testStr2)).toBe(false);
  });
});

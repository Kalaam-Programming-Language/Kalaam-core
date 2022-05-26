import { Compile } from '../../Compiler/main';
import { KalaamKeywords } from '../../Compiler/main';
import { primenumber } from '../../testCodes/primenumber';
import Data from '../../testCodes/kalaamData';

test('Testing prime number', () => {
  const expected = ['11 is a Prime Number'];
  var { linebylineOutput } = Compile(primenumber, KalaamKeywords.Hindi);
  expect(linebylineOutput).toStrictEqual(expected);
});

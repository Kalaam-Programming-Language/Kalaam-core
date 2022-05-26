import { Compile } from '../../Compiler/main';
import { KalaamKeywords } from '../../Compiler/main';
import { fibonacci } from '../../testCodes/fibonacci';
import Data from '../../testCodes/kalaamData';

test('Testing For loop', () => {
  const expected = ['[0,1,1,2,3,5,8,13,21,34,55]'];
  // const fibonaccidata = Data(fibonacci);
  var { linebylineOutput } = Compile(fibonacci, KalaamKeywords.Hindi);
  expect(linebylineOutput).toStrictEqual(expected);
});

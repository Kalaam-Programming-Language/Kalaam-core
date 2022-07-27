import { Compile } from '../../Compiler/main';
import { KalaamKeywords } from '../../Compiler/main';
import { function1 } from '../../testCodes/function1';
import Data from '../../testCodes/kalaamData';

test('function testing', () => {
  const expected = ['Sachin Tendulkar'];
  var { linebylineOutput } = Compile(function1, KalaamKeywords.Hindi);
  expect(linebylineOutput).toStrictEqual(expected);
});

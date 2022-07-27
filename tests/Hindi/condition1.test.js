import { Compile } from '../../Compiler/main';
import { KalaamKeywords } from '../../Compiler/main';
import { condition1 } from '../../testCodes/condition1';
import Data from '../../testCodes/kalaamData';

test('Testing For loop', () => {
  const expected = ['That works too.'];
  var { linebylineOutput } = Compile(condition1, KalaamKeywords.Hindi);
  expect(linebylineOutput).toStrictEqual(expected);
});

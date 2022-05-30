import { Compile } from '../../Compiler/main';
import { KalaamKeywords } from '../../Compiler/main';
import { multical } from '../../testCodes/multical';
import Data from '../../testCodes/kalaamData';

test('Testing multi calculation', () => {
  const expected = ['50'];
  var { linebylineOutput } = Compile(multical, KalaamKeywords.Hindi);
  expect(linebylineOutput).toStrictEqual(expected);
});

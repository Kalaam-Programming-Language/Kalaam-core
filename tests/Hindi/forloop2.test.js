import { Compile } from '../../Compiler/main';
import { KalaamKeywords } from '../../Compiler/main';
import { forloop2 } from '../../testCodes/forloop2';
import Data from '../../testCodes/kalaamData';

test('Testing For loop', () => {
  const expected = ['0 S', '1 W', '2 A', '3 N', '4 A', '5 N', '6 D'];
  var { linebylineOutput } = Compile(forloop2, KalaamKeywords.Hindi);
  expect(linebylineOutput).toStrictEqual(expected);
});

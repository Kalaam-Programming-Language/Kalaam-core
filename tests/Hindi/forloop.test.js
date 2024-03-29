import { Compile } from '../../Compiler/main';
import { KalaamKeywords } from '../../Compiler/main';
import { forloop } from '../../testCodes/forloop';
import Data from '../../testCodes/kalaamData';

test('Testing For loop', () => {
  const expected = ['0', '5', '10', '15', '20', '25', '30', '35', '40', '45', '50'];
  var { linebylineOutput } = Compile(forloop, KalaamKeywords.Hindi);
  expect(linebylineOutput).toStrictEqual(expected);
});

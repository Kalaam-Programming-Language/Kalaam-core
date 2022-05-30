import { Compile } from '../../Compiler/main';
import { KalaamKeywords } from '../../Compiler/main';
import { calculator } from '../../testCodes/calculatorEx1';
import Data from '../../testCodes/kalaamData';

test('compiles calculator sample code from examples', () => {
  const expected = ['FirstValue is 10', 'SecondValue is 20', 'Output is  30'];
  var { linebylineOutput } = Compile(calculator, KalaamKeywords.Hindi);
  expect(linebylineOutput).toStrictEqual(expected);
});

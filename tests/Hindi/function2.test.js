import { Compile } from '../../Compiler/main';
import { KalaamKeywords } from '../../Compiler/main';
import { function2 } from '../../testCodes/function2';

test('function testing', () => {
  const expected = ['11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
  var { linebylineOutput } = Compile(function2, KalaamKeywords.Hindi);
  expect(linebylineOutput).toStrictEqual(expected);
});

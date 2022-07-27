import { Compile } from '../../Compiler/main';
import { KalaamKeywords } from '../../Compiler/main'; /* import { undefined2 } from "../../testCodes/checkundefined2"; */
import { undefined2 } from '../../testCodes/checkUndefined2';
test('Checks Undefined error', () => {
  const expected = ['Cannot set c to undefined : b is undefined '];
  var { linebylineOutput } = Compile(undefined2, KalaamKeywords.Hindi);
  expect(linebylineOutput).toStrictEqual(expected);
});

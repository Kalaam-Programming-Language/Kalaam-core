import { Compile } from '../../Compiler/main';
import { KalaamKeywords } from '../../Compiler/main';
import { undefined1 } from '../../testCodes/checkUndefined1';

test('Checks Undefined error', () => {
  const expected = ['ReferenceError: b is not defined'];
  var { linebylineOutput } = Compile(undefined1, KalaamKeywords.Hindi);
  expect(linebylineOutput).toStrictEqual(expected);
});

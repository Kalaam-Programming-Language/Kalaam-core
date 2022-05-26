import { Compile } from '../../Compiler/main';
import { KalaamKeywords } from '../../Compiler/main';
import { Banglafunction1 } from '../../testCodes/Bangla.function';

test('function testing', () => {
  const expected = ['আমরা এখন বাংলায় কোড করতে পারি'];
  var { linebylineOutput } = Compile(Banglafunction1, KalaamKeywords.Bengali);
  expect(linebylineOutput).toStrictEqual(expected);
});

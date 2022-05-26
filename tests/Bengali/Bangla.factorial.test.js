import { Compile } from '../../Compiler/main';
import { KalaamKeywords } from '../../Compiler/main';
import { BanglafactorialOf } from '../../testCodes/Bangla.factorial';

/* import { factorialOf } from "../testCodes/factorialOf"; */
//import { factorialOf } from "../testCodes/factorialof";

test('Checks factorial', () => {
  const expected = ['Factorial of  5  is  120'];
  var { linebylineOutput } = Compile(BanglafactorialOf, KalaamKeywords.Bengali);
  expect(linebylineOutput).toStrictEqual(expected);
});

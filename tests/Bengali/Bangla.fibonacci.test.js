import { Compile } from '../../Compiler/main';
import { KalaamKeywords } from '../../Compiler/main';
import { Banglafibonacci } from '../../testCodes/Bengali/Bangla.fibonacci';

test('Testing For loop', () => {
  const expected = ['[0,1,1,2,3,5,8,13,21,34,55]'];
  // const fibonaccidata = Data(fibonacci);
  var { linebylineOutput } = Compile(Banglafibonacci, KalaamKeywords.Bengali);
  expect(linebylineOutput).toStrictEqual(expected);
});

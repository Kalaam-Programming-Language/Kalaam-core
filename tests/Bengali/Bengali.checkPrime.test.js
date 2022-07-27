import { Compile } from "../../Compiler/main";
import { KalaamKeywords } from "../../Compiler/main";
import { CheckPrime } from "../../testCodes/Bengali/checkPrime";

/* import { factorialOf } from "../testCodes/factorialOf"; */
//import { factorialOf } from "../testCodes/factorialof";

test("Checks factorial", () => {
  const expected = [" Prime"];
  var { linebylineOutput } = Compile(CheckPrime, KalaamKeywords.Bengali);
  expect(linebylineOutput).toStrictEqual(expected);
});

import { Compile } from "../../Compiler/main";
import { KalaamKeywords } from "../../Compiler/main";
import { OdiafactorialOf } from "../../testCodes/Odia/Odia.factorial";

/* import { factorialOf } from "../testCodes/factorialOf"; */
//import { factorialOf } from "../testCodes/factorialof";

test("Checks factorial", () => {
  const expected = ["Factorial of  5  is  120"];
  var { linebylineOutput } = Compile(OdiafactorialOf, KalaamKeywords.Odia);
  expect(linebylineOutput).toStrictEqual(expected);
});
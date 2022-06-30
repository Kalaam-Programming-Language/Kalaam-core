import { Compile } from "../../Compiler/main";
import { KalaamKeywords } from "../../Compiler/main";
import { BanglaReverseNumber } from "../../testCodes/Bengali/Bangla.reversenumber";

/* import { factorialOf } from "../testCodes/factorialOf"; */
//import { factorialOf } from "../testCodes/factorialof";

test("Checks factorial", () => {
  const expected = ["321"];
  var { linebylineOutput } = Compile(
    BanglaReverseNumber,
    KalaamKeywords.Bengali
  );
  expect(linebylineOutput).toStrictEqual(expected);
});

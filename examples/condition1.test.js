import Compile from "../Compiler/main";
import { condition1 } from "../exampleCodes/condition1";
import Data from "../exampleCodes/kalaamData";

test("Testing For loop", () => {
  const expected = ["That works too."];
  var { linebylineOutput } = Compile(condition1);
  expect(linebylineOutput).toStrictEqual(expected);
});

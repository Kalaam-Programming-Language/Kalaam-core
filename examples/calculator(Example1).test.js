import Compile from "../Compiler/main";
import { calculator } from "../exampleCodes/calculatorEx1";
import Data from "../exampleCodes/kalaamData";

test("compiles calculator sample code from examples", () => {
  const expected = ["FirstValue is 10", "SecondValue is 20", "Output is  30"];
  var { linebylineOutput } = Compile(calculator);
  expect(linebylineOutput).toStrictEqual(expected);
});

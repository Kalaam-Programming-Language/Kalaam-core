import Compile from "../Compiler/main";
import { function1 } from "../exampleCodes/function1";
import Data from "../exampleCodes/kalaamData";

test("function testing", () => {
  const expected = ["Sachin Tendulkar"];
  var { linebylineOutput } = Compile(function1);
  expect(linebylineOutput).toStrictEqual(expected);
});

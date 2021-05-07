import Compile from "../Compiler/main";
import { primenumber } from "../exampleCodes/primenumber";
import Data from "../exampleCodes/kalaamData";

test("Testing prime number", () => {
  const expected = ["11 is a Prime Number"];
  var { linebylineOutput } = Compile(primenumber);
  expect(linebylineOutput).toStrictEqual(expected);
});

import Compile from "../Compiler/main";
import { multical } from "../exampleCodes/multical";
import Data from "../exampleCodes/kalaamData";

test("Testing multi calculation", () => {
  const expected = ["50"];
  var { linebylineOutput } = Compile(multical);
  expect(linebylineOutput).toStrictEqual(expected);
});

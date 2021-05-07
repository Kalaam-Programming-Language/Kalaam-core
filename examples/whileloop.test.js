import Compile from "../Compiler/main";
import { whileloop } from "../exampleCodes/whileloop";
import Data from "../exampleCodes/kalaamData";

test("Testing while loop", () => {
  const expected = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var { linebylineOutput } = Compile(whileloop);
  expect(linebylineOutput).toStrictEqual(expected);
});

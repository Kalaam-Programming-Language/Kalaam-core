import Compile from "../Compiler/main";
import { reverse } from "../exampleCodes/reverseEx3";
import Data from "../exampleCodes/kalaamData";

test("compiles reverse sample code from examples", () => {
  const expected = ["Input String- TestString", "Reversed String- gnirtStseT"];
  var { linebylineOutput } = Compile(reverse);
  expect(linebylineOutput).toStrictEqual(expected);
});

import { Compile } from "../Compiler/main";
import { reverse } from "../testCodes/reverseEx3";
import Data from "../testCodes/kalaamData";

test("compiles reverse sample code from examples", () => {
  const expected = ["Input String- TestString", "Reversed String- gnirtStseT"];
  var { linebylineOutput } = Compile(reverse);
  expect(linebylineOutput).toStrictEqual(expected);
});

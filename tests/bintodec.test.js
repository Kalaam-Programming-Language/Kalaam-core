import Compile from "../Compiler/main";
import { bintodec } from "../testCodes/bintodec";

test("Checks Undefined error", () => {
  const expected = ["15"];
  var { linebylineOutput } = Compile(bintodec);
  expect(linebylineOutput).toStrictEqual(expected);
});

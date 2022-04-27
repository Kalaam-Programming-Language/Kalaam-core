import { Compile } from "../Compiler/main";
import { undefined2 } from "../testCodes/checkundefined2";

test("Checks Undefined error", () => {
  const expected = ["Cannot set c to undefined : b is undefined "];
  var { linebylineOutput } = Compile(undefined2);
  expect(linebylineOutput).toStrictEqual(expected);
});

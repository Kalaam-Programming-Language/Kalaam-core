import Compile from "../Compiler/main";
import { factorialOf } from "../testCodes/factorialOf";

test("Checks factorial", () => {
  const expected = ["Factorial of  5  is  120"];
  var { linebylineOutput } = Compile(factorialOf);
  expect(linebylineOutput).toStrictEqual(expected);
});

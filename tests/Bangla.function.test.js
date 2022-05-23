import { Compile } from "../Compiler/main";
import { Banglafunction1 } from "../testCodes/Bangla.function";

import Data from "../testCodes/kalaamData";

test("function testing", () => {
  const expected = ["আমরা এখন বাংলায় কোড করতে পারি"];
  var { linebylineOutput } = Compile(Banglafunction1);
  expect(linebylineOutput).toStrictEqual(expected);
});

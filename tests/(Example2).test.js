import Compile from "../Compiler/main";
import { example2 } from "../testCodes/example2";
import Data from "../testCodes/kalaamData";

test("compiles example2 sample code from examples", () => {
  const expected = [
    " |   Test Sign   | ",
    "  |      Test Sign      |  ",
    "   |         Test Sign         |   ",
    "    |            Test Sign            |    ",
    "     |               Test Sign               |     ",
    "      |                  Test Sign                  |      ",
    "       |                     Test Sign                     |       ",
    "        |                        Test Sign                        |        ",
    "         |                           Test Sign                           |         ",
    "          |                              Test Sign                              |          ",
    "           |                                 Test Sign                                 |           ",
    "            |                                    Test Sign                                    |            ",
    "             |                                       Test Sign                                       |             ",
    "              |                                          Test Sign                                          |              ",
    "               |                                             Test Sign                                             |               ",
  ];
  var { linebylineOutput } = Compile(example2);
  expect(linebylineOutput).toStrictEqual(expected);
});

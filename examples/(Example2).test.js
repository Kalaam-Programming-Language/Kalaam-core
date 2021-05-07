import Compile from "../Compiler/main";
import { example2 } from "../exampleCodes/example2";
import Data from "../exampleCodes/kalaamData";

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

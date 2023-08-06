import { validator } from "../validator";

const dataList = [
  ["4556614847515234", true],
  ["2720994218083136", true],
  ["6548121354789465", false],
];

const handler = test.each(dataList);
handler("Testing validator function", (value, expected) => {
  const result = validator(value);
  expect(result).toBe(expected);
});

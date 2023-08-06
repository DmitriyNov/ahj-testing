import { membership } from "../membership";

const dataList = [
  ["2", "mir"],
  ["4", "visa"],
  ["5", "mastercard"],
];

const handler = test.each(dataList);
handler('Testing membership function', (value, expected) => {
  const result = membership(value);
  expect(result).toBe(expected);
});
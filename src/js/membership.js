export function membership(value) {
  const number = value[0];
  if (number === "2") {
    return "mir";
  } else if (number === "4") {
    return "visa";
  } else if (number === "5") {
    return "mastercard";
  } else {
    return;
  }
}

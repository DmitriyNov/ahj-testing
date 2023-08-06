export function validator(value) {
  const payload = value.slice(0, value.length - 1);
  let digitsSum = 0;
  const length = value.length;

  if (length == 13 || length == 16 || length == 18 || length == 19) {
    for (let i = 0; i < payload.length; i++) {
      const number = Number(payload[i]);
      let multipliers;
      if (i % 2 == payload.length % 2) {
        multipliers = 1;
      } else {
        multipliers = 2;
      }
      let sum = number * multipliers;
      if (sum < 10) {
        digitsSum += sum;
      } else {
        sum = "" + sum;
        sum = Number(sum[0]) + Number(sum[1]);
        digitsSum += sum;
      }
    }
    const validateValue = payload + (10 - (digitsSum % 10));

    if (validateValue == value) {
      console.log("true");
      return true;
    } else {
      console.log("false");
      return false;
    }
  } else {
    console.log("false");
    return false;
  }
}

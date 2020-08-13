const unitsArr = ["hz", "khz", "mhz", "ghz", "thz"];

export function freqParser(freq, units) {
  const freqStrip = freq.replace(/\s/g, "").toLowerCase();
  const freqVal = parseFloat(freqStrip);
  const freqUnit = freqStrip.match(/[a-zA-Z]+/g).toString();
  const unitIndex = unitsArr.indexOf(freqUnit);
  if (freqStrip.match(/[a-zA-Z]+/g) === null) {
    throw new Error("Incomplete string");
  }
  if (unitIndex > -1) {
    const indexDiff = unitIndex - unitsArr.indexOf(units);
    return [indexDiff, freqVal];
  } else {
    throw new Error("String not valid");
  }
}
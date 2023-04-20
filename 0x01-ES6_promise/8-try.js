export default function divideFunction(numerator, denominator) {
  // Try...catch, but with if
  if (denominator === 0) {
    throw Error('cannot divide by 0');
  }
  return numerator / denominator;
}

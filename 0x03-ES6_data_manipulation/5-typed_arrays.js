/* eslint-disable no-param-reassign */
export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const uint8view = new Uint8Array(buffer);
  uint8view[position] = value;
  return new DataView(buffer, 0, length);
}

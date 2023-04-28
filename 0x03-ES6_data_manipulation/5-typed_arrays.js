/* eslint-disable no-param-reassign */
export default function createInt8TypedArray(length, position, value) {
  try {
    const buffer = new ArrayBuffer(length);
    const uint8view = new Uint8Array(buffer);
    uint8view[position] = value;
  } catch (err) {
    throw new Error('Position outside range');
  }
  return new DataView(buffer);
}

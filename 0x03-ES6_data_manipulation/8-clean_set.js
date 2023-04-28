export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  const text = [];
  for (const item of set) {
    if (item.startsWith(startString)) {
      text.push(item.slice(startString.length));
    }
  }
  return text.join('-');
}

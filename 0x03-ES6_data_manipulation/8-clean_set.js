export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  const text = [];
  for (const item of set.values()) {
    if (typeof item === 'string' && item.startsWith(startString)) {
      text.push(item.slice(startString.length));
    }
  }
  return text.join('-');
}

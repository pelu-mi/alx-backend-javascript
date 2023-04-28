export default function updateUniqueItems(map) {
  if (!map || !(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const entry of map.entries()) {
    if (entry[1] === 1) {
      map.set(entry[0], 100);
    }
  }
  return map;
}

export default function createIteratorObject(report) {
  const arr = [];
  for (const x of Object.values(report.allEmployees)) {
    arr.push(...x);
  }
  return arr;
}

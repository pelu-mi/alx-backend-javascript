export default function getListStudentIds(arr) {
  if (!(Array.isArray(arr))) {
    return [];
  }
  const findId = (item) => item.id;
  return arr.map(findId);
}

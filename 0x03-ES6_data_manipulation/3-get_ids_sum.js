export default function getStudentIdsSum(students) {
  const findSum = (total, item) => total + item.id;
  return students.reduce(findSum, 0);
}

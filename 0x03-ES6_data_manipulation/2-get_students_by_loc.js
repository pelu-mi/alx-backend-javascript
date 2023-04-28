export default function getStudentsByLocation(students, city) {
  const findLocation = (item) => item.location === city;
  return students.filter(findLocation);
}

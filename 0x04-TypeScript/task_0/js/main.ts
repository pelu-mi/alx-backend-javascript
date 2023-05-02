interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Human',
  lastName: 'Being',
  age: 33,
  location: 'Earth',
};
const student2: Student = {
  firstName: 'Homo',
  lastName: 'Sapien',
  age: 75,
  location: 'Land',
};

const studentsList: Array<Student> = [student1, student2];

// Create table using vanilla js
const table = document.getElementById('studentTable') as HtmlTableElement

studentsList.forEach((student) => {
  const row = table.insertRow();
  const firstCell = row.insertCell(0);
  const locationCell = row.insertCell(1);

  firstCell.innerHTML = student.firstName;
  locationCell.innerHTML = student.location;
});

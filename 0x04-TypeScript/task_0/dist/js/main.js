var student1 = {
    firstName: 'Human',
    lastName: 'Being',
    age: 33,
    location: 'Earth',
};
var student2 = {
    firstName: 'Homo',
    lastName: 'Sapien',
    age: 75,
    location: 'Land',
};
var studentsList = [student1, student2];
// Create table using vanilla js
var table = document.getElementById('studentTable');
studentsList.forEach(function (student) {
    var row = table.insertRow();
    var firstCell = row.insertCell(0);
    var locationCell = row.insertCell(1);
    firstCell.innerHTML = student.firstName;
    locationCell.innerHTML = student.location;
});
//# sourceMappingURL=main.js.map
// let  form = document.getElementById("signupform");
// let display = document.getElementById("formdata")


// form.addEventListener("submit" , function(event){

//     let name = document.getElementById('name').value;
//     let email = document.getElementById('email').value;
//     let password = document.getElementById('password').value;


//     form.innerHTML =    `<h2>Form Data:</h2>
//     <p><strong>Name:</strong> ${name}</p>
//     <p><strong>Email:</strong> ${email}</p>
//     <p><strong>Password:</strong> ${password}</p>`
// })


// var button = document.querySelector('.show-more-button');
// var hiddenContent = document.querySelector('.hidden-content');

// button.addEventListener('click', function() {
//     if (hiddenContent.style.display === 'none' || hiddenContent.style.display === '') {
//         hiddenContent.style.display = 'block'; 
//         button.textContent = 'Read less'; 
//     } else {
//         hiddenContent.style.display = 'none'; 
//         button.textContent = 'Read more'; 
//     }
// });


// var studentForm = document.getElementById('student-form');
// var studentTable = document.getElementById('student-table').getElementsByTagName('tbody')[0];
// var editForm = document.getElementById('edit-form');
// var editStudentForm = document.getElementById('edit-student-form');
// var editRowIndexInput = document.getElementById('edit-row-index');
// var cancelEditButton = document.getElementById('cancel-edit');

// studentForm.addEventListener('submit', function(event) {
//     event.preventDefault();

//     var name = document.getElementById('name').value;
//     var age = document.getElementById('age').value;
//     var grade = document.getElementById('grade').value;

//     var row = studentTable.insertRow();
//     row.innerHTML = `
//         <td>${name}</td>
//         <td>${age}</td>
//         <td>${grade}</td>
//         <td>
//             <button class="edit-button">Edit</button>
//             <button class="delete-button">Delete</button>
//         </td>
//     `;

//     row.querySelector('.delete-button').addEventListener('click', function() {
//         studentTable.deleteRow(row.rowIndex - 1);
//     });

//     row.querySelector('.edit-button').addEventListener('click', function() {
//         document.getElementById('edit-name').value = name;
//         document.getElementById('edit-age').value = age;
//         document.getElementById('edit-grade').value = grade;
//         editRowIndexInput.value = row.rowIndex - 1;
//         editForm.style.display = 'block';
//     });

//     studentForm.reset();
// });

// editStudentForm.addEventListener('submit', function(event) {
//     event.preventDefault();

//     var rowIndex = parseInt(editRowIndexInput.value);
//     var row = studentTable.rows[rowIndex];

//     row.cells[0].textContent = document.getElementById('edit-name').value;
//     row.cells[1].textContent = document.getElementById('edit-age').value;
//     row.cells[2].textContent = document.getElementById('edit-grade').value;

//     editForm.style.display = 'none';
// });

// cancelEditButton.addEventListener('click', function() {
//     editForm.style.display = 'none';
// });
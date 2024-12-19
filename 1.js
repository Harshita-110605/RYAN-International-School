// Get elements
const addNewButton = document.getElementById('addNewButton');
const addNewModal = document.getElementById('addNewModal');
const closeModal = document.getElementById('closeModal');
const addNewForm = document.getElementById('addNewForm');
const studentNameInput = document.getElementById('studentName');
const studentAgeInput = document.getElementById('studentAge');
const studentAmountInput = document.getElementById('studentAmount');
const recentPaymentsTable = document.getElementById('recentPaymentsTable');
const newStudentsTable = document.getElementById('newStudentsTable');

// Open the modal when "Add New" is clicked
addNewButton.addEventListener('click', function () {
    addNewModal.style.display = 'block';
});

// Close the modal when the close button is clicked
closeModal.addEventListener('click', function () {
    addNewModal.style.display = 'none';
});

// Close the modal if the user clicks outside of it
window.addEventListener('click', function (event) {
    if (event.target === addNewModal) {
        addNewModal.style.display = 'none';
    }
});

// Handle the form submission to add a new student
addNewForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Get the input values
    const studentName = studentNameInput.value;
    const studentAge = studentAgeInput.value;
    const studentAmount = studentAmountInput.value;

    // Add new student to the "New Students" table
    const newStudentRow = document.createElement('tr');
    newStudentRow.innerHTML = `
        <td><img src="user.png" alt=""></td>
        <td>${studentName}</td>
        <td><img src="info.png" alt=""></td>
    `;
    newStudentsTable.appendChild(newStudentRow);

    // Add new payment record to the "Recent Payments" table
    const paymentRow = document.createElement('tr');
    paymentRow.innerHTML = `
        <td>${studentName}</td>
        <td>${studentAge}</td>
        <td>$${studentAmount}</td>
        <td><a href="#" class="btn">View</a></td>
    `;
    recentPaymentsTable.appendChild(paymentRow);

    // Close the modal
    addNewModal.style.display = 'none';

    // Reset the form
    addNewForm.reset();
});

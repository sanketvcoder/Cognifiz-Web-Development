const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const phoneInput = document.getElementById('phone');
const first = document.querySelector('.first');
const last = document.querySelector('.last');
const phoneNum = document.querySelector('.phoneNum');

let firstName = '';
let lastName = '';
let phone = '';

const changeFirstName = () => {
    firstName = firstNameInput.value;
}

const changeLastName = () => {
    lastName = lastNameInput.value;
}

const changePhone = () => {
    phone = phoneInput.value;
}

const btnClick = () => {
    if (firstName !== '' && lastName !== '' && phone !== '') {
        alert(`First Name: ${firstName}\nLast Name: ${lastName}\nPhone Number: ${phone}`);

        // Clear the input fields
        firstNameInput.value = '';
        lastNameInput.value = '';
        phoneInput.value = '';

        // Reset the variables
        firstName = '';
        lastName = '';
        phone = '';

        // Clear any error messages
        first.textContent = '';
        last.textContent = '';
        phoneNum.textContent = '';
    } else {
        if (firstName === '') {
            first.textContent = 'First Name is required';
            first.style.color = 'red';
        } else {
            first.textContent = '';
        }

        if (lastName === '') {
            last.textContent = 'Last Name is required';
            last.style.color = 'red';
        } else {
            last.textContent = '';
        }

        if (phone === '') {
            phoneNum.textContent = 'Phone Number is required';
            phoneNum.style.color = 'red';
        } else {
            phoneNum.textContent = '';
        }
    }
}
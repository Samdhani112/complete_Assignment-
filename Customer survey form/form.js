function submitForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;

    const genderCheckboxes = document.querySelectorAll('input[name="gender"]:checked');
    const gender = Array.from(genderCheckboxes).map(checkbox => checkbox.value).join(', ');

    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile1 = document.getElementById('mobile1').value;
    const mobile2 = document.getElementById('mobile2').value;

    if (!validateEmail(email) || !validateMobile(mobile1) || !validateMobile(mobile2)) {
        alert('Please fill out all fields correctly.');
        return;
    }

    const results = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Profession:</strong> ${profession}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile Number (primary):</strong> ${mobile1}</p>
        <p><strong>Mobile Number (secondary):</strong> ${mobile2}</p>
    `;

    document.getElementById('popup-results').innerHTML = results;
    document.getElementById('popup').style.display = 'block';
}

function resetForm() {
    document.getElementById('surveyForm').reset();
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function validateEmail(email) {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(email);
}

function validateMobile(mobile) {
    return /^\d{10}$/.test(mobile);
}

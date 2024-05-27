document.getElementById('register-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        isDoctor: document.getElementById('isDoctor').checked,
    };

    const response = await registerUser(formData);

    if (response._id) {
        alert('Registration successful');
        window.location.href = 'login.html';
    } else {
        alert(response.message);
    }
});

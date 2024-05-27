document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
    };

    const response = await loginUser(formData);

    if (response.token) {
        alert('Login successful');
        // Save the token and redirect to the dashboard
        localStorage.setItem('token', response.token);
        window.location.href = 'dashboard.html';
    } else {
        alert(response.message);
    }
});

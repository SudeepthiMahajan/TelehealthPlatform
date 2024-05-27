const API_URL = 'http://localhost:5000/api';

async function registerUser(formData) {
    const response = await fetch(`${API_URL}/users/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });
    return response.json();
}

async function loginUser(formData) {
    const response = await fetch(`${API_URL}/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });
    return response.json();
}

document.addEventListener('DOMContentLoaded', function () {

    function openForm() {

        document.getElementById("loginForm").style.display = "block";
    }

    function closeForm() {
        document.getElementById("loginForm").style.display = "none";
    }

    function signUp() {
        const name = document.getElementById('name').value;
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('psw').value;

        const userData = {
            name: name,
            username: username,
            email: email,
            password: password
        };

        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(response => {
                if (response.ok) {
                    // Handle successful signup
                    console.log('User signed up successfully');
                } else {
                    // Handle signup failure
                    console.error('Failed to sign up');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    // Event listeners for buttons or elements triggering functions
    const openFormButton = document.querySelector('.open-button');
    const closeFormButton = document.querySelector('.cancel');
    const submitFormButton = document.querySelector('.signUpBtn');

    submitFormButton.addEventListener('click', signUp);
    openFormButton.addEventListener('click', openForm);
    closeFormButton.addEventListener('click', closeForm);
});

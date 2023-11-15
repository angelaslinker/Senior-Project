fetch('http://localhost:3000/users')
    .then(response => {
        if (response.ok) {
            return response.json(); //parse the response data as JSON
        } else {
            throw new Error('API request failed');
        }
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    })

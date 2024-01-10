function submitVent() {
    var userInput = document.getElementById('userInput').value;

    fetch('/vent', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'user_input=' + userInput,
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('output').innerText = 'Random Message: ' + data.message + '\nYour Vent: ' + data.user_input;
    });
}

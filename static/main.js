document.addEventListener('DOMContentLoaded', function () {
    // Trigger the typing animation
    document.querySelector('.typing-animation').classList.add('start-typing');

    // Function to submit vent
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

    // Attach the submitVent function to the button click event
    document.getElementById('ventButton').addEventListener('click', submitVent);
});

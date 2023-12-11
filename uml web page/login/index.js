let username = document.getElementById("name");
let password = document.getElementById("password");
let loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click",function(e){
    document.addEventListener('DOMContentLoaded', function () {
        const loginForm = document.getElementById('loginForm');
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
    
            const username = document.getElementById('rollNo').value;
            const password = document.getElementById('passWord').value;
    
            // Make an AJAX request to the se rver for authentication
            fetch('index.php', {
                method: 'POST',
                body: JSON.stringify({ username, password }),
                headers: { 'Content-Type': 'application/json' },
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    document.getElementById('message').innerText = 'Login successful. Redirecting...';
                } else {
                    document.getElementById('message').innerText = 'Login failed. Please check your credentials.';
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        });
    });
})
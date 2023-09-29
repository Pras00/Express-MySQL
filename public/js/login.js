const usernameInput = document.getElementById('usernameInput');
const passwordInput = document.getElementById('passwordInput');
const simpanDataButton = document.getElementById('login');


simpanDataButton.addEventListener('click', () => {
    fetch('http://localhost:4000/user')
    .then(response => response.json())
    .then(data => {

        const username = usernameInput.value;
        const password = passwordInput.value;

        const userData = data.data;
    
        const user = userData.find(user => user.username === username && user.password === password);
    
        if (user) {
            // Jika pengguna ditemukan, periksa peran (role)
            if (user.role === "admin") {
                // Redirect ke admin.html jika peran adalah admin
                window.location.href = "http://localhost:4000/admin"
            } else if (user.role === "user") {
                // Redirect ke user.html jika peran adalah user
                window.location.href = "http://localhost:4000/home"
            } else {
                console.log("Peran tidak valid");
            }
        } else {
            console.log("Username atau password salah");
        }
    })
    .catch(error => {
    console.error('Error:', error);
    });
})


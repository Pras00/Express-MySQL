fetch('http://localhost:4000/user')
.then(response => response.json())
.then(data => {
    
    const username = "root";
    const password = "root";

    const userData = data.data;

    const user = userData.find(user => user.username === username && user.password === password);

    if (user) {
        // Jika pengguna ditemukan, periksa peran (role)
        if (user.role === "admin") {
            // Redirect ke admin.html jika peran adalah admin
            console.log("Dashboard Admin");
        } else if (user.role === "user") {
            // Redirect ke user.html jika peran adalah user
            console.log('Home Page User');
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
const dataList = document.getElementById('dataList');
const dataTable = document.getElementsByClassName('dataTable');
const tBody = document.getElementsByClassName('user')

 
// READ - GET Method
const READ = () => {
    fetch('http://localhost:4000/user')
    .then(response => response.json())
    .then(data => {
        
        // console.log(data.data);
        for (let i = 0; i < data.data.length; i++) {
            const dataUser = document.getElementsByClassName('dataUser');
            dataUser[i].innerHTML = `
            <td>${[i + 1]}</td>
            <td>${data.data[i].username}</td>
            <td>${data.data[i].password}</td>
            <td>
                ${data.data[i].role}
                <button data-id="${data.data[i].id}">Delete</button>
            </td>
            `
        }
    })
    .catch(error => {
    console.error('Error:', error);
    });
}

READ()

  

// CREATE - POST Method
const popup = document.getElementById("myPopup");
const showButton = document.getElementById("showPopup");
const closeButton = document.getElementById("closePopup");

const simpanDataButton = document.getElementById('simpanData');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const roleInput = document.getElementById('role');

// menampilkan pop-up
function showPopup() {
  popup.style.display = "flex";
}
// menyembunyikan pop-up
function closePopup() {
  popup.style.display = "none";
}
// Event listener untuk tombol tampilkan pop-up
showButton.addEventListener("click", showPopup);
// Event listener untuk tombol penutup
closeButton.addEventListener("click", closePopup);
// Event listener menutup pop up setelah klik simpan
simpanDataButton.addEventListener("click", closePopup)

// Menambahkan data
simpanDataButton.addEventListener('click', () => {
    const data = {
      username: usernameInput.value,
      password: passwordInput.value,
      role: roleInput.value
    };

    console.log(data.username);
    console.log(data.password);
    console.log(data.role);

    fetch('http://localhost:4000/user', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        console.log(result);
        READ()
    })
    .catch(error => {
        console.error('Error:', error);
    });

});
function validate(){
    let user=document.getElementById("user").value
    let pass=document.getElementById("pass").value
    if(user.length>10 || user.length==0){
        alert("Invalid username")
    }
    if(pass.length>6 || pass.length==0){
        alert("Invalid password")
    }
}

function authenticateUser() {
    document.getElementById('login-panel').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
}

function showUsers() {
    const userList = document.getElementById('user-list');
    userList.innerHTML = '';
    const users = ['Alice', 'Bob', 'Charlie', 'Dave', 'Eve'];
    
    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = user;
        userList.appendChild(listItem);
    });
}

function logout() {
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('login-panel').style.display = 'block';
}

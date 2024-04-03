function LoginVerificaton() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username == "admin" && password == "admin") {
        window.alert("Login Berhasil");
        window.location="pages/menu.html";
    }
    else {
        window.alert("Login Gagal");

    }
}

function Clear(){
    document.getElementById("username").value="";
    document.getElementById("password").value="";
}

function Change(){
    document.getElementById("h1").value="";
    document.getElementById("h1").value="";
}
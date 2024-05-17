function login(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (email== "quanly" && password== "quanly123"){
        window.location.href="./pages/index2.html";
        alert("Đăng nhập thành công!");    
    }
    else{
        alert("Sai đăng nhập");
        return;
    }
}

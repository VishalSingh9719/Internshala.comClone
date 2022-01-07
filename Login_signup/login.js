function login(e){
    var mail = document.getElementById("mail").value;
    var security = document.getElementById("security").value;

    var email1=localStorage.getItem("email");
    var pass1=localStorage.getItem("password");

    if(mail==email1 && security==pass1){
        window.location.href="homepage.html";
    }else{
        alert("Email or Password is incorrect")
       event.preventDefault()
    }

}
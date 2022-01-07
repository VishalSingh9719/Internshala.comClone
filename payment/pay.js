function cancel(){
    alert("This will cancel your Purchase!")
}
  function enputt(){
    var val = document.getElementById('in1').value;
    if(val==""){
        alert("Enter Card Number")
    }else{
        window.location.href="otp.html";
    }
}
function submit(){
    var val = document.getElementById('btn').value;
    if(val==""){
        alert("Enter OTP")
    }else{
        window.location.href="success.html";
    }
}
function searchh(){
    var search = document.getElementById("in").value;
    if(search!=""){
        window.location.href=".//Homepage/homepage1.html"
    }else if(search==""){
        alert("Enter Something")
    }
}
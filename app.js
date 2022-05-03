function myEmail(){
    let x = document.getElementById("email").value;
    let text;
    if (x =="giorgos_tsakonas@outlook.com"){
        text = "Email is valid"
    } else {
        text = "Invalid email"
    }
    document.getElementById("val1").innerHTML = text;
}



function myCountry(){
    let x = document.getElementById("country").value;
    let text;
    if (x == "Greece"){
        text = "Correct Country"
    } else {
        text = "Wrong Country"
    }
    document.getElementById("val2").innerHTML = text;
}


function myZipCode(){
    let x = document.getElementById("zipCode").value;
    let text;
    if (x == "14232"){
        text = "Correct Zip Code"
    } else {
        text = "Wrong Zip Code"
    }
    document.getElementById("val3").innerHTML = text;
}


function myPassword(){
    let x = document.getElementById("password").value;
    let y = document.getElementById("passConf").value;
    let text;
    if (x === y){
        text = "Correct password"
    } else {
        text = "Wrong password"
    }
    document.getElementById("val4").innerHTML = text;
}
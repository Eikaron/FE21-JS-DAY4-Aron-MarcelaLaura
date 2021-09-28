function display(){

    let firstname = document.forms["form1"]["firstname"].value;
    let lastname = document.forms["form1"]["lastname"].value;
    let age = document.forms["form1"]["age"].value;

    result = document.getElementById("display"); 

    result.innerHTML = 'My name is '+firstname+' '+lastname+' and I am '+age+' years old.'
}


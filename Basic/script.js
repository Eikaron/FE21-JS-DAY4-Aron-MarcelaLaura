function display(){



    let firstname = document.forms["form1"]["firstname"].value;
    let lastname = document.forms["form1"]["lastname"].value;
    let age = document.forms["form1"]["age"].value;
    let job = document.forms["form1"]["job"].value;

    let len = firstname.length;
    let text = document.getElementById("disp");
    
    if (len > 5) {
        text.style.color = "red";
    }
    
    else {
        text.style.color = "green";
    }

   
    if (job =="IT"){
        text.style.background = "pink";
    }

    else {
        text.style.background = "yellow";
    }

    

    text.innerHTML = 'My name is '+firstname+' '+lastname+' and I am '+age+' years old. My job is in '+job;

}



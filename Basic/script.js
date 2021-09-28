function display(){

    var firstname = document.forms["form1"]["firstname"].value;
    var lastname = document.forms["form1"]["lastname"].value;
    var age = document.forms["form1"]["age"].value;

    document.write("My name is " + firstname+" "+lastname+" and I am "+age+" years old.");
}


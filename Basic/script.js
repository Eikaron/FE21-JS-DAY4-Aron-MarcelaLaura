function display(){

    var firstname = document.getElementsByName("firstname").values;
    var lastname = document.getElementsByName("lastname").values;
    var age = document.getElementsByName("age").values;

    document.write("My name is " + firstname+" "+lastname+" and I am "+age+" years old.")
}

document.getElementsById("display").innerHTML = display();
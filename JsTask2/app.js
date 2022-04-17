function Confirm(){
    var x = confirm("BACKGROUND COLOR WILL BE BLACK");

    if (x) {


        document.body.style.backgroundColor = 'black';
    }
     else{
             document.body.style.backgroundColor='white';
     }
     
}


let age=prompt("PLEASE ENTER YOUR AGE")
 if(age<18){
  alert("SORRY YOU CANNOT ACCESS IF YOU ARE UNDER 18");
}
else{
alert("WELCOME")
}
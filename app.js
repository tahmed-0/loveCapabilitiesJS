
function myFunction() {
   

    const yourName = document.getElementById("yourName").value;
    const theirName = document.getElementById("theirName").value;

    var myRandom = Math.floor(Math.random() * 101);

    if(yourName === '' && theirName === '') {
        document.getElementById("result").innerHTML = "Enter valid values";

    } else {


    switch (true) {
        case (myRandom < 70):
            document.getElementById("result").innerHTML = yourName + " and " + theirName +" love capabilities is " + myRandom + "%";
            document.body.style.backgroundColor = "red";
            break;
        case (myRandom > 70 && myRandom < 80):
            document.getElementById("result").innerHTML = yourName + " and " + theirName +" love capabilities is " + myRandom + "%";
            document.body.style.backgroundColor = "yellow";
            break;
        case (myRandom > 80):
            document.getElementById("result").innerHTML = yourName + " and " + theirName +" love capabilities is " + myRandom + "%";
            document.body.style.backgroundColor = "green";
            break;
        default:
            document.getElementById("result").innerHTML = "Enter valid values";
            break;
            

    }

}
   


}


function clearText() {

  document.getElementById("yourName").value = "";
   document.getElementById("theirName").value = "";
   document.getElementById("result").innerHTML = "";

}
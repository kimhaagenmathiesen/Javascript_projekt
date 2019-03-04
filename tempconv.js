function tem() {
    var checkbcel = document.getElementById("checkcel");
    var checkbfah = document.getElementById("checkfah");
    var input = document.getElementById("vaerdi").value;
    if(checkbcel.checked == true){
        window.alert("Du har valgt at omregne fra celcius til fahrenheit");
        var cel = (input *1.8) + 32;
        document.getElementById("panel").innerHTML = input + " grader celcius svarer til " + cel + " grader fahrenheit!";
    } else if(checkbfah.checked == true){
        window.alert("Du har valgt at omregne fra fahrenheit til celcius");
        var fah = (input - 32) / 1.8;
        document.getElementById("panel").innerHTML = input + " grader fahrenheit svarer til " + fah + " grader celcius!";
    } else {
        window.alert("Du mangler at vælge");
    }
}
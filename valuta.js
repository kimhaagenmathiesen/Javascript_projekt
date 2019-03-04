function klik(){
    var input = document.getElementById('kroner').value;
    if(isNaN(input)){
        window.alert("Værdien skal være et tal!")
    }
    var euro = input*7.45;
    document.getElementById('panel').innerHTML = input + " kroner er = " + euro + " Euro"; 
}
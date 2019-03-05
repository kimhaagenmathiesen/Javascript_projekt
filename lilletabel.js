function tabel() {
    for(i=1; i<11; i++){
        var et = 1*i
        var to = 2*i
        var tre = 3*i
        var fire = 4*i
        var fem = 5*i
        var seks = 6*i
        var syv = 7*i
        var otte = 8*i
        var ni = 9*i
        var ti = 10*i
        document.getElementById("ettabel").innerHTML += " " + et + " ";
        document.getElementById("totabel").innerHTML += " " + to + " ";
        document.getElementById("tretabel").innerHTML += " " + tre + " ";
        document.getElementById("firetabel").innerHTML += " " + fire + " ";
        document.getElementById("femtabel").innerHTML += " " + fem + " ";
        document.getElementById("sekstabel").innerHTML += " " + seks + " ";
        document.getElementById("syvtabel").innerHTML +=  " " + syv + " ";
        document.getElementById("ottetabel").innerHTML += " " + otte + " ";
        document.getElementById("nitabel").innerHTML += " " + ni + " ";
        document.getElementById("titabel").innerHTML += " " + ti + " ";

    }
}
function tiltyve() {
    for (var i = 1; i < 21; ++i) {
        var ligeu = i % 2;
        if(ligeu == 0){
            document.getElementById("lag").innerHTML  += "<br>" + i + " er et lige tal<br>"
        } else if(ligeu > 0){
            document.getElementById("lag").innerHTML += "<br>" + i + " er et ulige tal<br>"
        }
    }
   

}


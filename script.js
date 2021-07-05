
function sakrijSlike(stranica) {
    var divs = document.getElementsByTagName('a');
    for(var i = divs.length; i-- ;) {
        var div = divs[i];
        if(stranica===2){
            if(div.id === 'slika') {
                div.style.display = 'none';
                
            }
            if(div.id==='slika2'){
                div.style.display = 'block';
            }
        }
        if(stranica===1){
            if(div.id === 'slika') {
                div.style.display = 'block';
                
            }
            if(div.id==='slika2'){
                div.style.display = 'none';
            }
        }
    }
}




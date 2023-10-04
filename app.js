var x = 0 ;
function Decrementer(){
    x -= 1 ;
    var dcr = document.getElementById("zero");
    dcr.innerText = x ;
    if (x<0){
        dcr.style="color: rgb(41, 20, 82)";
    }
    if (x==0){
        dcr.style="color: black";
    }
}
function zero(){
    x=0;
    var res = document.getElementById("zero");
    res.innerText = x ;
    
        res.style="color: black";
    
}
function Incrémenter(){
    x += 1 ;
    var inc = document.getElementById("zero");
    inc.innerText = x ;
    if (x>0){
        inc.style="color: purple";
        
}
if (x==0){
    inc.style="black";
}
}
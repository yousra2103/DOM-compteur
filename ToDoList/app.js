var inp = document.getElementById("enteruser");
 var ul = document.querySelector("ul");



 function createList (){
    var li = createElement("li");
    li.appenChild(document.createTextNode(inp.value));
    ul.appendChild(li);
    inp.value = "";
 }


 function afterClick (){
    
 }
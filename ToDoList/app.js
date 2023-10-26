var inp = document.getElementById("enteruser");
 var ul = document.querySelector("ul");
var plus= document.getElementById("plus");


 function createList (){
    var li = document.createElement("li");
   //  li.classList.add("liStyle");
    li.appenChild(document.createTextNode(inp.value));
    ul.appendChild(li);
    inp.value = "";

   //  var dbtn = document.createElement("button");
   // //  dbtn.classList.add("modif");
   //  dbtn.appendChild(document.createTextNode("x"));
   //  li.appenChild(dbtn);
   //  dbtn.addEventListener("click", deleteListItem);




   //  function deleteListItem(){
   //    dbtn.classList.add("delete");
   //  }
 }


 function lilength (){
    return inp.value.length;
 }
 function addListAfterClick(){
   if (lilength()> 0 )
   {createList();}
 }

 function addListAfterKeypress(event){
   if (lilength()> 0 && event.which===13 )
      {createList();}
 }
plus.addEventListener("click",addListAfterClick);
inp.addEventListener("keypress",addListAfterKeypress);

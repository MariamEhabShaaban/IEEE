let add =document.querySelector("[class='add']");
let input=document.querySelector("[class = 'input']");
let tasks=document.querySelector("[class = 'tasks']");
let obj ={
    id:0,title:0
};
window.localStorage.clear();
add.addEventListener("click",function(){
    if(input.value!==""){
    obj.id=window.localStorage.length+1;
    obj.title=input.value;
   window.localStorage.setItem(`task${obj.id}`,obj.title);
   let div=document.createElement("div");
   div.id=obj.id;
   div.className="my-task";
   let task=document.createTextNode(input.value);
   div.appendChild(task);
   let del = document.createElement("input");
   del.type = "button"; // Changed submit to button
   del.value = "Delete";
   del.className = "del";
   
   div.appendChild(del);
   
   tasks.appendChild(div);
      
   del.addEventListener("click", function (e) {
       // Remove from localStorage
       localStorage.removeItem(`task${div.id}`);
       // Remove task div from DOM
       div.remove();
   });
   
      
    }
  
   

}) ;


// function add_item() { 
//     // Getting box and ul by selecting id; 
//     let item = document.getElementById("box"); 
//     let list_item = document.getElementById("list_item"); 
//     if(item.value != ""){ 
    
//         // Creating element and adding value to it 
//         let make_li = document.createElement("LI");
//         make_li.setAttribute('class', 'note');
//         make_li.appendChild(document.createTextNode(item.value)); 
    
//         // Adding li to ul 
//         list_item.appendChild(make_li); 
    
//         // Reset the value of box 
//         item.value=""
          
//         // Delete a li item on click  
//         make_li.onclick = function(){ 
//           this.parentNode.removeChild(this); 
//         } 
//     } 
//     else{ 
    
//       // Alert msg when value of box is "" empty. 
//       alert("plz add a value to item"); 
//     } 
    
//   } 

function add_item()
{
  const listitem = document.getElementById("box").value;
  const list = document.getElementById("list_item");
  if(listitem.length === 0)
  {
    alert("input missing");
  }
  else
  {
    const taskconatiner = list.appendChild(document.createElement("div"));
    const task = taskconatiner.appendChild(document.createElement("li"));
    const checkbtn = taskconatiner.appendChild(document.createElement("i"));
    const deletebtn = taskconatiner.appendChild(document.createElement("i"));
    taskconatiner.className = "taskconatiner";
    task.className = "task";
    deletebtn.className="fa fa-trash-o";
    checkbtn.className="fa fa-check";
    task.innerHTML = listitem;
    listitem.value="";
    deletebtn.addEventListener("click",deleteTask);
    checkbtn.addEventListener("click",checkTask);

    function deleteTask(e)
    {
      e.target.parentElement.remove();
    }
    function checkTask(c)
    {
      c.target.previousSibling.style.textDecoration = "line-through";
    }

  }
}
  
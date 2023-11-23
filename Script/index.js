let todoText = document.querySelector(".todo-text");
let save = document.querySelector(".save-btn");
let rows = document.querySelector("table");
let deleteBtn = document.querySelector(".delete-btn");
let finishBtn = document.querySelector(".delete-btn");

let todoArray = [];
let tdElement1;

function addTask() {
    if (todoText.value === "") {
        alert("This is Box Is Empty");
    } else {
        todoArray.push(todoText.value);
        todoArray.forEach((e)=>{
            let trElement = document.createElement("tr");
            trElement.classList.add("rows");
            tdElement1 = document.createElement("td");
            tdElement1.innerHTML = e;
            
            let tdElement2 = document.createElement("td");
            
            let btnDelete = document.createElement("button");
            btnDelete.innerHTML = "Delete";
            btnDelete.classList.add("delete-btn");
            
            let btnFinished = document.createElement("button");
            btnFinished.innerHTML = "Finish";
            btnFinished.classList.add("finish-btn");
            
            tdElement2.append(btnDelete,btnFinished);
            trElement.append(tdElement1,tdElement2);
            rows.append(trElement);
        })
    }

    todoText.value = "";
}

save.addEventListener("click", addTask);
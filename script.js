
console.log('hello');
const error_msg = document.querySelector(".error_msg");
const to_do_list = document.querySelector(".to_do_app");
const inputbox = document.querySelector('#input_box');
const listcontainer = document.querySelector('#list_container');
const add_btn = document.getElementById("add_btn");
add_btn.addEventListener('click', addTask);
function addTask() {
    const ifTask = inputbox.value.trim();
    
    error_msg.style.display = "block";
    if(! ifTask){
        
        setTimeout(() => {
            error_msg.display = "none";
            
        }, 200);
        return;
    }

    else {

        let li = document.createElement('li');
        li.classList.add("bgc")
        li.innerHTML = `<label><input class="chkbox" type="checkbox"><span class='task_Name'>${inputbox.value}</span></label>`;

        listcontainer.appendChild(li);
        let newspan = document.createElement("span");
        newspan.classList.add('newSpan');
        newspan.innerHTML = "<i class='icon fa-solid fa-3 fa-trash'></i>";

        li.appendChild(newspan);

    }

    inputbox.value = "";

    // DataSaveInLocalStorage()
}
// javascript for the Click on Checked Boxes


listcontainer.addEventListener('click', (e) => {


    if (e.target.tagName === "LI") {

        e.target.classList.toggle("cheaked");
        // DataSaveInLocalStorage()

    }
    else if (e.target.tagName === "I") {
        e.target.parentElement.parentElement.remove();
        // DataSaveInLocalStorage()
    }


}, false);

// function DataSaveInLocalStorage(){
//     localStorage.setItem("data", listcontainer.innerHTML)
// }
// function ListTask(){
//     listcontainer.innerHTML = localStorage.getItem("data");

// }
// ListTask();

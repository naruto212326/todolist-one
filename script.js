//獲取input和任務列表容器的引用
const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

//案件事件函數
function handleKeyPress(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // 阻止默认的 Enter 键行为，避免表单提交等
        addTask();
    }
}

function addTask(){
    if(inputBox.value === ''){
        alert("請輸入工作事項")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false)

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
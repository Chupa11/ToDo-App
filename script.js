const input=document.getElementById("myInput");
const output=document.getElementById("myOutput");

function addTask(){
    if(input.value==""){
        alert("Please type something :)")
    }else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        output.appendChild(li);
        let span=document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span);
    }
    input.value="";
    saveData();
}

output.addEventListener("click", function(e){
    if(e.target.tagName=="LI"){
        e.target.classList.toggle("checked");
    }else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
    }
    saveData();
}, false);

function saveData(){
    localStorage.setItem("data", output.innerHTML);
}
function showTask(){
    output.innerHTML=localStorage.getItem("data");
}
showTask();
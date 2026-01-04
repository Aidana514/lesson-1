let array = [];

const List = document.getElementById("List");
const btn = document.getElementById("btn");
const textInput = document.getElementById("text");
const dateInput = document.getElementById("date");

function getData(){
    return array.forEach(
        (item) => {
            const li = document.createElement("li");
            const textElement = document.createElement("p");
            const dateElement = document.createElement("p");
            const deleteBtn = document.createElement("button");
            
            deleteBtn.textContent = "Удалить";
            deleteBtn.className = "delete";
            deleteBtn.addEventListener("click", ()=>{
                array = array.filter((el) => el.id !== item.id)
                List.innerHTML = "";
                getData();
            })
            textElement.textContent = item.text;
            dateElement.textContent = item.date;
            li.append(textElement);
            li.append(dateElement);
            li.append(deleteBtn);
            List.append(li)
        }
    );
}
function addData(){
if(textInput.value.length > 0 && dateInput.value.length > 0){
    array.push({
        id: new Date(),
        text:textInput.value,
        date:dateInput.value,
    })
    List.innerHTML = "";
    textInput.value = "";
    dateInput.value = ""; 
getData();
} else{
    alert("Заполните form");
}}
getData();

btn.addEventListener("click", addData);
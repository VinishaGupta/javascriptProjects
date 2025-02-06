

let arr= JSON.parse(localStorage.getItem('itemTodo')) || [];

render();

function fun1(){
    let input1=document.querySelector(".inputTodo").value;

    let date1=document.querySelector(".inputDate").value;

    let obj={input:input1,date:date1};

    arr.push(obj);

    localStorage.setItem('itemTodo',JSON.stringify(arr));

    render(arr);

    document.querySelector(".inputTodo").value='';

    document.querySelector(".inputDate").value='';

}


function render(){
    
    let str='';

    for(let i=0;i<arr.length;i++){
        str+=`<div>${arr[i].input}</div>
        <div>${arr[i].date}</div>
        <div><button class="deleteButton" onclick="deleteTodo(${i});";>Delete</button></></div>`;
    }

    document.querySelector(".display").innerHTML=str;
}

function deleteTodo(index){
    arr.splice(index,1);
    localStorage.setItem('itemTodo',JSON.stringify(arr));
    render();
}

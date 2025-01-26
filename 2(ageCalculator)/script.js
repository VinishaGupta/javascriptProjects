function fun1(){
                
    let inputDateString=document.querySelector(".inputtedDate").value;
    let inputDate=new Date(inputDateString);
    let currentDate=new Date();

    let age=currentDate.getFullYear()-inputDate.getFullYear();

    if(currentDate.getMonth()<inputDate.getMonth() || currentDate.getMonth()===inputDate.getMonth() && currentDate.getDate()<inputDate.getDate()){
        age--;
    }

    document.querySelector(".result").innerHTML=`<p><h2>You are ${age} years old.</h2></p>`;
}
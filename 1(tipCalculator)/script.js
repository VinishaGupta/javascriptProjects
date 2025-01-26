function fun1(){
    let bill=document.querySelector(".b4").value;
    let tip=document.querySelector(".b6").value;
    let percentage=bill*(tip/100);
    let total=Number(bill)+Number(percentage);
    document.querySelector(".b8").innerHTML=`Total: $${total}`;
}
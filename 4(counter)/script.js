let a=0;

        function fun1(sign){
            if(sign==='-'){
                a--;
            }
            else if(sign==='+'){
                a++;
            }
            display(a);
        }

        function display(a){
            let dom=document.querySelector(".a2");
            dom.innerHTML=a;

            if(a===0){
                dom.style='color:black;';
            }
            else if(a<0){
                dom.style='color:red;';
            }
            else{
                dom.style='color:green';
            }
        }

        function reset(){
            a=0;
            document.querySelector(".a2").innerHTML=a;
            document.querySelector(".a2").style='color:black;';
        }
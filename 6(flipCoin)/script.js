let obj=JSON.parse(localStorage.getItem('result1'))||{Heads:0,Tails:0};

        document.querySelector(".result").innerHTML=`Heads: ${obj.Heads} Tails:${obj.Tails}`;
        function fun1(){
            let result="";
            let random=Math.random();

            if(random<0.5){
                result="Heads";
                obj.Heads++;
                document.querySelector(".coin").innerHTML="Heads";
            }
            else{
                result="Tails";
                obj.Tails++;
                document.querySelector(".coin").innerHTML="Tails";
            }

            document.querySelector(".result").innerHTML=`Heads: ${obj.Heads} Tails:${obj.Tails}`;

            localStorage.setItem('result1',JSON.stringify(obj));
        }

        function reset(){
            obj.Heads=0;
            obj.Tails=0;
            document.querySelector(".result").innerHTML=`Heads: ${obj.Heads} Tails:${obj.Tails}`;
            localStorage.setItem('result1',JSON.stringify(obj));
        }

        
        
        
let cal='';

        let total=JSON.parse(localStorage.getItem('total'));


        function updateCal(value)
        {
            cal=cal+value;
            document.querySelector('.resultt').innerHTML=cal;

        }

        function azx()
        {
            total=eval(cal);
            total=total.toFixed(2);
            document.querySelector('.resultt').innerHTML=total;
            localStorage.setItem('total',JSON.stringify(total));
        }

        function clearr()
        {
            cal=0;
            document.querySelector('.resultt').innerHTML=cal;
        }
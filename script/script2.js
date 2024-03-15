let toggle1 = document.querySelector(".toggle1");
    let text1 = document.querySelector(".text1");
     
    function Animatedtoggle1(){
        toggle1.classList.toggle("active");

        if(toggle1.classList.contains("active")){
            text1.innerHTML = "TEHTY";
        }
        else{
            text1.innerHTML = "";
        }
    }

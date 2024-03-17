let toggle5 = document.querySelector(".toggle5");
    let text5 = document.querySelector(".text5");
     
    function Animatedtoggle5(){
        toggle5.classList.toggle("active");

        if(toggle5.classList.contains("active")){
            text5.innerHTML = "TEHTY";
        }
        else{
            text5.innerHTML = "";
        }
    }
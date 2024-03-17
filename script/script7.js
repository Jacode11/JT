let toggle6 = document.querySelector(".toggle6");
    let text6 = document.querySelector(".text6");
     
    function Animatedtoggle6(){
        toggle6.classList.toggle("active");

        if(toggle6.classList.contains("active")){
            text6.innerHTML = "TEHTY";
        }
        else{
            text6.innerHTML = "";
        }
    }
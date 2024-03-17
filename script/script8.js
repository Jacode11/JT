
let toggle7 = document.querySelector(".toggle7");
    let text7 = document.querySelector(".text7");
     
    function Animatedtoggle7(){
        toggle7.classList.toggle("active");

        if(toggle7.classList.contains("active")){
            text7.innerHTML = "TEHTY";
        }
        else{
            text7.innerHTML = "";
        }
    }
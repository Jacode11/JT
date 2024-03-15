let toggle3 = document.querySelector(".toggle3");
    let text3 = document.querySelector(".text3");
     
    function Animatedtoggle3(){
        toggle3.classList.toggle("active");

        if(toggle3.classList.contains("active")){
            text3.innerHTML = "TEHTY";
        }
        else{
            text3.innerHTML = "";
        }
    }
let toggle4 = document.querySelector(".toggle4");
    let text4 = document.querySelector(".text4");
     
    function Animatedtoggle4(){
        toggle4.classList.toggle("active");

        if(toggle4.classList.contains("active")){
            text4.innerHTML = "TEHTY";
        }
        else{
            text4.innerHTML = "";
        }
    }
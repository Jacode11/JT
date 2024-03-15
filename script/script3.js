let toggle2 = document.querySelector(".toggle2");
    let text2 = document.querySelector(".text2");
     
    function Animatedtoggle2(){
        toggle2.classList.toggle("active");

        if(toggle2.classList.contains("active")){
            text2.innerHTML = "TEHTY";
        }
        else{
            text2.innerHTML = "";
        }
    }
document.querySelectorAll(".window").forEach(win=>{
    let title=win.querySelector(".title");

    title.onmousedown=function(e){

        let x=e.clientX-win.offsetLeft;
        let y=e.clientY-win.offsetTop;

        function move(e){
            win.style.left=e.clientX-x+"px";
            win.style.top=e.clientY-y+"px";
        }

        document.addEventListener("mousemove",move);

        document.onmouseup=function(){
            document.removeEventListener("mousemove",move);
        };
    };
});

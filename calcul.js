const buttons =document.querySelectorAll(".ope");
const screen= document.querySelector(".screen-content");
const Cbtn= document.querySelector(".c-btn");
const modBtn= document.querySelector(".mod");
const delBtn =document.querySelector(".del");
const egalBtn= document.querySelector(".equal");

for(let i=0; i<buttons.length;i++){
    buttons[i].addEventListener("click", ()=>{
        if( !(buttons[i].innerHTML==="/" && screen.innerHTML.split("").pop() ==="/") ){
            screen.innerHTML += buttons[i].innerHTML
        } 
            
    })
}

    Cbtn.addEventListener("click", ()=>{
        screen.innerHTML= "";
    })

    modBtn.addEventListener("click", ()=>{
        screen.innerHTML  += "%"
    })

    delBtn.addEventListener("click", ()=>{
        // sol1
        /*let content = screen.innerHTML.split("")
        content.pop()
        screen.innerHTML = content.join("");*/

        // sol2
        screen.innerHTML = screen.innerHTML.substring(0, screen.innerHTML.length-1)
    })

    egalBtn.addEventListener("click", ()=>{
        try{
        screen.innerHTML = eval(screen.innerHTML)
        } catch(err){
            screen.innerHTML = err.message;
        }
    })

    

    

    








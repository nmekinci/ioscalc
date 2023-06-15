const main = document.querySelector("main")
const screen = document.querySelector(".screen")


main.addEventListener("click", (e) => {
    let greys = ["0","1","2","3","4","5","6","7","8","9","."]
    let oranges = ["+","-","X","÷","%"]
    
    

    if (greys.includes(e.target.innerText)){
        console.log(e.target.innerText);
        if ((e.target.innerText == ".") && (screen.innerText == "")){
            screen.innerText = "0."
        } else {
            // if (screen.innerText.includes(".") && e.target.innerText =="." ){
            //     screen.innerText = screen.innerText
            // }else {
            //     screen.innerText += e.target.innerText
            // }
            if (!(screen.innerText.includes(".") && e.target.innerText ==".")){
                screen.innerText += e.target.innerText
            }
            
        }
    } else if (oranges.includes(e.target.innerText)){

    }

})
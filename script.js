const numbers = document.getElementsByClassName("num");
const specialCaracthers = document.getElementsByClassName("special");

const historyUse = document.querySelector(".history-use");
const result = document.querySelector(".result")

const allKeys = document.querySelector(".grid-section");
const MAX_LENGTH = 10;


allKeys.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        if (e.target.classList.contains("num")) {
            
            console.log(`Number clicked: ${e.target.innerText}`);

            if ( result.innerText.length >= MAX_LENGTH) {
                return;
            }

            result.innerText === "0" ? result.innerHTML = e.target.innerText : result.innerHTML += e.target.innerText;

        } else if (e.target.classList.contains("special")) {
            console.log(`Special key clicked: ${e.target.innerText}`);
        }

        if ( e.target.classList.contains("dot")){
           if (result.length <= 0) {
            return;
           } else {
            result.innerHTML += ".";
           }
          
        }

    
    }
    //  Clean Button **************************

    if ( e.target.innerText === "Ac") {
        result.innerHTML = 0;
        historyUse.innerHTML = "";
    }

     // Erase Button **************************
    if (e.target.innerText === "") { 
        let currentResult = result.innerText;

        
       
        if (currentResult.length > 1) {
            result.innerText = currentResult.slice(0, -1); // Remove last character
        } else {
            result.innerText = "0"; 
            historyUse.innerHTML = "";// If only one character, reset to 0
        };


        //Dot button /***************** */

      

    
};
});

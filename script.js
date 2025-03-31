const numbers = document.getElementsByClassName("number");
const specialCaracthers = document.getElementsByClassName("special");

const calculatorScreen = document.querySelector(".history-use");
const result = document.querySelector(".result")

const allKeys = document.querySelector(".grid-section");
const MAX_LENGTH = 10;

const rightButton = document.querySelector(".right-button");
const leftButton = document.querySelector(".left-button");

rightButton.addEventListener("click", () => {
    document.querySelector(".main-div").classList.toggle("main-div-secondColor");
    document.querySelectorAll(".number").forEach(element => {
        element.classList.toggle("number-secondColor");
    });
    document.querySelectorAll(".special").forEach(element => {
        element.classList.toggle("special-secondColor");
    }); 
    document.querySelector(".dot").classList.toggle("dot-secondColor");

    document.querySelectorAll(".left").forEach(element => {
        element.classList.toggle("left-secondColor");
    });

});

allKeys.addEventListener("click", (e) => {
    
    if (e.target.tagName === "BUTTON") {
        if (e.target.classList.contains("number")) {
            
            console.log(`Number clicked: ${e.target.innerText}`);

            if ( result.innerText.length >= MAX_LENGTH) {
                return;
            }

            calculatorScreen.innerText === "0" ? calculatorScreen.innerHTML = e.target.innerText : calculatorScreen.innerHTML += e.target.innerText;

        } else if (e.target.classList.contains("special")) {
            console.log(`Special key clicked: ${e.target.innerText}`);
        
        }

         //Dot button /***************** */
        if ( e.target.classList.contains("dot")){
           if (calculatorScreen.length <= 0) {
            return;
           } else {
            calculatorScreen.innerHTML += ".";
           }}

        //Plus button ***************************

        if ( e.target.classList.contains("plus")){
         
            
            if (calculatorScreen.innerHTML.length <= 0) {
                return;
               } else {
                calculatorScreen.innerHTML += `<span class="operator-highlight">+</span>`;
             }
        }
   
        // Minus button *****************
        if ( e.target.classList.contains("minus")){
            if (calculatorScreen.length <= 0) {
                return;
               } else {
                calculatorScreen.innerHTML += `<span class="operator-highlight">-</span>`;
               }
        }

        // Divide button *************
        if ( e.target.classList.contains("divide")){
            if (calculatorScreen.length <= 0) {
                return;
               } else {
                calculatorScreen.innerHTML += `<span class="operator-highlight">/</span>`;
               }
        }


        // Multiply button *********

        if ( e.target.classList.contains("multiply")){
            if (calculatorScreen.length <= 0) {
                return;
               } else {
                calculatorScreen.innerHTML += `<span class="operator-highlight">*</span>`;
               }
        }

        // Equal button ******************

        if (e.target.classList.contains("equal")) {
            let screenText = calculatorScreen.innerText;
        
            try {
                let resultValue = eval(screenText); // Calculate the result
                result.innerText = resultValue; // Display result
            } catch (error) {
                result.innerText = "Error"; // Handle invalid expressions
            }
        }

    }
    //  Clean All Button **************************

    if ( e.target.innerText === "Ac") {
        result.innerHTML = "";
        calculatorScreen.innerHTML = 0;
    }

     // Erase Button **************************
    if (e.target.innerText === "") { 
        let currentResult = calculatorScreen.innerText;

        
       
        if (currentResult.length > 1) {
            calculatorScreen.innerText = currentResult.slice(0, -1); // Remove last character
        } else {
            result.innerText = "0"; 
            calculatorScreen.innerHTML = 0;// If only one character, reset to 0
        };
};
});

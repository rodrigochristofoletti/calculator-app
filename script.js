const numbers = document.getElementsByClassName("number");
const specialCaracthers = document.getElementsByClassName("special");

const calculatorScreen = document.querySelector(".history-use");
const result = document.querySelector(".result")

const allKeys = document.querySelector(".grid-section");
const MAX_LENGTH = 12;

const rightButton = document.querySelector(".right-button");
const leftButton = document.querySelector(".left-button");

// TOGGLE BUTTON **********************
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

    document.querySelector(".equal").classList.toggle("equal-secondColor");

    document.querySelector(".result").classList.toggle("result-secondColor");

});

leftButton.addEventListener("click", () => {
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

    document.querySelector(".result").classList.toggle("result-secondColor");

});

// CALCULATOR FUNCTION *********************
allKeys.addEventListener("click", (e) => {
    
    if (e.target.tagName === "BUTTON") {
        if (e.target.classList.contains("number")) {
            
            console.log(`Number clicked: ${e.target.innerText}`);

            if ( calculatorScreen.innerText.length >= MAX_LENGTH) {
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
                let resultValue = eval(screenText); 
                result.innerText = resultValue.toLocaleString("en-US"); 
            } catch (error) {
                result.innerText = "Error";
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
            calculatorScreen.innerText = currentResult.slice(0, -1); 
        } else {
            result.innerText = "0"; 
            calculatorScreen.innerHTML = 0;
        };
};
});

document.addEventListener("keydown", (e) => {
    const key = e.key; 
    
    
    if (!isNaN(key)) {
        if (calculatorScreen.innerText.length >= MAX_LENGTH) {
            return;
        }
        calculatorScreen.innerText === "0"
            ? (calculatorScreen.innerHTML = key)
            : (calculatorScreen.innerHTML += key);
    }

   
    if (key === "+" || key === "-" || key === "*" || key === "/") {
        if (calculatorScreen.innerHTML.length <= 0) {
            return;
        }
        calculatorScreen.innerHTML += `<span class="operator-highlight">${key}</span>`;
    }

    
    if (key === ".") {
        if (calculatorScreen.innerText.includes(".")) {
            return;
        }
        calculatorScreen.innerHTML += ".";
    }

    
    if (key === "Enter") {
        let screenText = calculatorScreen.innerText;
        try {
            let resultValue = eval(screenText);
            result.innerText = resultValue.toLocaleString("en-US");
        } catch (error) {
            result.innerText = "Error";
        }
    }

   
    if (key === "Backspace") {
        let currentResult = calculatorScreen.innerText;
        if (currentResult.length > 1) {
            calculatorScreen.innerText = currentResult.slice(0, -1);
        } else {
            result.innerText = "0";
            calculatorScreen.innerHTML = 0;   
        }
    }

   
    if (key === "c") {
        result.innerHTML = "";
        calculatorScreen.innerHTML = 0;
    }

    if (key === "ArrowRight") {
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
        
            document.querySelector(".equal").classList.toggle("equal-secondColor");
        
            document.querySelector(".result").classList.toggle("result-secondColor");
    }

    if( key === "ArrowLeft") {
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
        
            document.querySelector(".equal").classList.toggle("equal-secondColor");
        
            document.querySelector(".result").classList.toggle("result-secondColor");
    }
});
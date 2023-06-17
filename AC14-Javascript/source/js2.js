
const transBtn = document.querySelector(".btn1");
const resetBtn = document.querySelector(".btn2");
const fahV = document.querySelector("#fahbox");
const celV = document.querySelector("#celbox");

fahV.addEventListener("focus", () => {
    celV.value = ""
})

celV.addEventListener("focus", () => {
    fahV.value = ""
})

transBtn.addEventListener("click", () => {
    if(fahV.value == "" && celV.value == ""){
        alert("請輸入至少一組數字！");
    } else if(fahV.value && celV.value == false){
        let fv = Number(fahV.value);
        celV.value = ((fv - 32) * 5 / 9).toFixed(1);    
    } else if(celV.value && fahV.value == false){
        let cv = Number(celV.value);
        fahV.value = (cv * 9 / 5 + 32).toFixed(1);
    }  
}) 

resetBtn.addEventListener("click", () => {
    fahV.value = "";
    celV.value = "";
})

    


    


// header區
const inputbox = document.querySelector(".inputbox"); 
const addlist = document.querySelector(".addbtn");

// main區
const checklist = document.querySelector("#starthere"); //整格塞入的位置
const boxhome = document.querySelector("#boxs"); //div box區
const texthome = document.querySelector("#wording"); //div word區 
const edithome = document.querySelector(".editbtn"); // div editbtn區
const delhome = document.querySelector(".delbtn"); // div delbtn區


let nbox = 1;
inputbox.addEventListener("keyup", (e) => {
    if (e.code === "Enter"){
        run();
    } 
})
addlist.addEventListener("click", (e) => {
    run();
    
})

function run() {
    const idname = `listbox-${nbox}`
    const lSKey = localStorage.getItem(idname);
    const lSValue = [{checked: false, text: inputbox.value}];
    console.log(lSKey);

    if(inputbox.value == ""){
        alert("請輸入代辦事項內容！");
    } else {
        //create checkbox
        const checkDom = document.createElement("input");
        checkDom.setAttribute("type", "checkbox");
        checkDom.setAttribute("id", idname);
        checkDom.checked = lSValue[0].checked
        checkDom.addEventListener("click", (e) => {
            lSValue[0].checked = checkDom.checked;
            localStorage.setItem(idname, JSON.stringify(lSValue))
        });

        //create textbox
        const textDom = document.createElement("input");
        textDom.setAttribute("type", "text");
        textDom.setAttribute("id", idname);
        textDom.setAttribute("readOnly","readOnly");
        textDom.setAttribute("value",inputbox.value);
        

        //create btns
        const editbtn = document.createElement("i");
        editbtn.setAttribute("class", "fa-solid fa-pen-to-square fa-lg ");
        editbtn.addEventListener("click", (e) => {
            if (textDom.readOnly){
                textDom.removeAttribute("readOnly", "readOnly");
                editbtn.setAttribute("class", "fa-solid fa-check fa-lg");
                textDom.focus();
            } else {
                textDom.setAttribute("readOnly", "readOnly");
                editbtn.setAttribute("class", "fa-solid fa-pen-to-square fa-lg"); 
            }
        })

        const delbtn = document.createElement("i");
        delbtn.setAttribute("class", "fa-solid fa-trash fa-lg");
        delbtn.addEventListener("click", (e) => {
            checkDom.remove();
            textDom.remove();
            editbtn.remove();
            delbtn.remove();

        })

        //insert
        boxhome.appendChild(checkDom);
        texthome.appendChild(textDom);
        edithome.appendChild(editbtn);
        delhome.appendChild(delbtn);
          
    }


    if (lSKey === null){
        localStorage.setItem(idname, JSON.stringify(lSValue));
    } else if (lSKey){
        console.log(lSKey);
        const newobj = {checked: false, text: inputbox.value};
        lSValue.push(newobj);
        localStorage.setItem(idname, JSON.stringify(lSValue))
    }
    inputbox.value = "";
    nbox = nbox + 1; 
}
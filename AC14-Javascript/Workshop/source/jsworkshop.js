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


window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
    
    
    const keys = Object.keys(localStorage)
    if (localStorage.length > 0){
        for(let i = 0; i < keys.length; i++){
            const storedData = localStorage.getItem(keys[i]);
            const parsedData = JSON.parse(storedData);
            // console.log(storedData);
            console.log(parsedData);
            console.log(keys);

            run(keys[i], parsedData[0].checked, parsedData[0].text, parsedData[0].nbox)
            
        }
    }
    console.log(nbox);
  });

inputbox.addEventListener("keyup", (e) => {
    if (e.code === "Enter"){
        if(inputbox.value == ""){
            alert("請輸入代辦事項內容！");
        } else {
            run()
        run(`listbox-${nbox}`, false, inputbox.value, nbox);
        console.log(nbox);
        }
    } 
})
addlist.addEventListener("click", () => {
    if(inputbox.value == ""){
        alert("請輸入代辦事項內容！");
    } else {
    run(`listbox-${nbox}`, false, inputbox.value, nbox);
    console.log(nbox);
    }
})

function run(id, boxstatus, todo, count) {
    const idname = id;
    const lSKey = localStorage.getItem(idname);
    const lSValue = [{checked: boxstatus, text: todo, nbox: count}];
    console.log(lSKey);

   
        //create checkbox
        const checkDom = document.createElement("input");
        checkDom.setAttribute("type", "checkbox");
        // checkDom.setAttribute("id", idname);
        checkDom.checked = lSValue[0].checked
        checkDom.addEventListener("click", (e) => {
            if (checkDom.ch){
                textDom.setAttribute("style", "text-decoration: line-through")
                textDom.style.opacity = 0.5;
            } else {
                textDom.removeAttribute("style", "text-decoration: line-through")
            }
            lSValue[0].checked = checkDom.checked;
            localStorage.setItem(idname, JSON.stringify(lSValue))
        });

        //create textbox
        const textDom = document.createElement("input");
        textDom.setAttribute("type", "text");
        // textDom.setAttribute("id", idname);
        textDom.setAttribute("readOnly","readOnly");
        textDom.setAttribute("value", todo);
        

        //create btns
        //editbtn
        const editbtn = document.createElement("i");
        editbtn.setAttribute("class", "fa-solid fa-pen-to-square fa-lg ");
        editbtn.addEventListener("click", (e) => {
            if (textDom.readOnly){
                textDom.removeAttribute("readOnly", "readOnly");
                editbtn.setAttribute("class", "fa-solid fa-check fa-lg");
                textDom.focus();
                textDom.addEventListener("keyup", (e) => {
                    if (e.code === "Enter"){
                        textDom.setAttribute("readOnly", "readOnly");
                        editbtn.setAttribute("class", "fa-solid fa-pen-to-square fa-lg"); 
                        lSValue[0].text = textDom.value;
                        localStorage.setItem(idname, JSON.stringify(lSValue));        
                    }
                })
            } else {
                textDom.setAttribute("readOnly", "readOnly");
                editbtn.setAttribute("class", "fa-solid fa-pen-to-square fa-lg");
                lSValue[0].text = textDom.value;
                localStorage.setItem(idname, JSON.stringify(lSValue));   
            }
        })

        //del btn
        const delbtn = document.createElement("i");
        delbtn.setAttribute("class", "fa-solid fa-trash fa-lg");
        delbtn.addEventListener("click", (e) => {
            checkDom.remove();
            textDom.remove();
            editbtn.remove();
            delbtn.remove();
            localStorage.removeItem(idname);

        })

        //insert
        boxhome.appendChild(checkDom);
        texthome.appendChild(textDom);
        edithome.appendChild(editbtn);
        delhome.appendChild(delbtn);

    // if (lSKey === null){
        localStorage.setItem(idname, JSON.stringify(lSValue));
    // } else if (lSKey){
    //     console.log(lSKey);
        const newobj = {checked: false, text: inputbox.value};
    //     lSValue.push(newobj);
    //     localStorage.setItem(idname, JSON.stringify(lSValue))
    // }
    inputbox.value = "";
    nbox = nbox + 1; 
}
const checklist = document.querySelector("#checklist")

function createCheckbox(n) {
    for (let i = 0; i < n; i++) {
            const inputDom = document.createElement("input")
            inputDom.setAttribute("type", "checkbox")
            inputDom.setAttribute("id", `box-${i}`)

            inputDom.addEventListener("click", (e) => {
                const { id } = e.currentTarget

                const lSKey = localStorage.getItem("Key")
                console.log(lSKey)  //觀察用
                

                if (lSKey === null) {
                    const lSValue = [{ id, completed: true }]
                    localStorage.setItem("Key", JSON.stringify(lSValue))
                } else {
                    const lSValue = JSON.parse(lSKey)
                    const obj = lSValue.find((d) => {   
                    return d.id === id
                    
                    })

                    if (obj) {
                        console.log(obj)  //觀察用
                        obj.completed = !obj.completed
                        const idx = lSValue.indexOf(obj)
                        lSValue[idx] = obj
                    } else {
                        console.log(obj)  //觀察用
                        const newobj = { id, completed: true }
                        lSValue.push(newobj)
                    }

                    localStorage.setItem("Key", JSON.stringify(lSValue))
                }

                console.log(localStorage)
            })

            checklist.appendChild(inputDom)
    }
}
createCheckbox(8)
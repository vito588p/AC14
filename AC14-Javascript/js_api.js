const gallary = document.querySelector("#gallary");
const check = document.querySelector(".checkbox");
const API = "https://jsonplaceholder.typicode.com/photos?_limit=20";

const buildbox = (n) => {
    for(let i = 0; i < n; i++){
        const box = document.createElement("input");
        box.setAttribute("type", "checkbox");
        box.setAttribute("id", `todo-${i}`);
        box.addEventListener("click", () => {
            console.log(checked);
        });
        check.appendChild(box);
    }
}

buildbox(5);
// fetch(API)
//     .then((res) => {
//         return res.json();
//     })
//     .then((photos) => {
//         photos.forEach((photo) => {
//             const pic = document.createElement("img");
//             const url = photo.thumbnailUrl;
//             pic.setAttribute("src", url);
//             console.log(url);
//             gallary.appendChild(pic);
//         });
//     });

// const ul = body.createElement("ul");
// ul.appendchild
// document.querySelector
//what is promise, 不知道何時解完
//create element
//insertAdjacentHTML()
//JSON = Javascript Object Notation
// callback function


// fetch(API)
//     .then((res) => {
//         return res.json()
//     })
//     .then ((photos) => {
//         photos.forEach((photo) => {
//             const el = `<img src="${photo.thumbnailUrl}" />`
//             gallary.insertAdjacentHTML("beforeend", el);
//         }); 
//     })



    
// let str = "";
// str = str + `<img src="${photos.thumbnailUrl}" />`
//innerHTML
// 換掉 HTML 程式碼
//insertAdjacentHTML


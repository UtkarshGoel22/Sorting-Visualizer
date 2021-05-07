let arraySize = document.querySelector("#arr_sz");

console.log(arraySize);

let array = [];

function createNewArray(noOfBars = 60) {
    array = [];
    for(let i = 0; i < noOfBars; i++) {
        array.push(Math.floor(Math.random() * 250) + 1);
    }
    console.log(array);
}

const newArray = document.querySelector(".newArray");
newArray.addEventListener("click", ()=> {
    createNewArray();
});
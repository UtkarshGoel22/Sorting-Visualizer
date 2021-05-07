// Select array size (slider input) from DOM
let arraySize = document.querySelector("#arr_sz");

// Event listener to update the array size
arraySize.addEventListener("input", ()=> {
    // console.log(arraySize.value, typeof(arraySize.value));
    createNewArray(parseInt(arraySize.value));
})

// Array to store randomly generated numbers
let array = [];

// Function to delete previous array  
function deletePrevArr() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}

// Function to create new array
function createNewArray(noOfBars = 60) {
    deletePrevArr();
    array = [];
    for(let i = 0; i < noOfBars; i++) {
        array.push(Math.floor(Math.random() * 250) + 1);
    }
    // console.log(array);
    const bars = document.querySelector("#bars");
    for(let i = 0; i < noOfBars; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i] * 2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}

// Call to display initial array size when you visit website
createNewArray();

// Select button having class = "newArray" from DOM
const newArray = document.querySelector(".newArray");
newArray.addEventListener("click", ()=> {
    // console.log("From newArray " + arraySize.value);
    createNewArray(arraySize.value);
});
// swap function util for sorting algorithms takes input of 2 DOM elements with .style.height feature
function swap(a, b) {
    // console.log('In swap()');
    let temp = a.style.height;
    a.style.height = b.style.height;
    b.style.height = temp;  
}

// Select array size (slider input) from DOM
let arraySize = document.querySelector("#arr_sz");

// Event listener to update the array size
arraySize.addEventListener("input", ()=> {
    // console.log(arraySize.value, typeof(arraySize.value));
    createNewArray(parseInt(arraySize.value));
})

// Used in asyn function so that we can do animations of sorting, takes input time in ms (1000 = 1s)
function waitForMe(millisec) {
    return new Promise(resolve => setTimeout(resolve, millisec));
}

// Default input for waitForMe() 260ms
let delay = 60;

// Select sorting speed (slider input) from DOM
let sortSpeed = document.querySelector("#sort_speed");

// Event listener to update delay time.
sortSpeed.addEventListener("input", ()=> {
    // console.log(sortSpeed.value, typeof(sortSpeed.value));
    delay = 320 - parseInt(sortSpeed.value); 
    // console.log(delay);
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
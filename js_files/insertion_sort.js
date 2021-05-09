async function insertionSort() {
    // console.log("Inside insertionSort()");
    const arr = document.querySelectorAll(".bar");
    for(let i = 1; i < arr.length; i++) {
        // change color of ith element to blue
        arr[i].style.background = "blue";
        let key = arr[i].style.height;
        let j = i-1;
        while(j >= 0 && parseInt(arr[j].style.height) > parseInt(key)) {
            // change color of jth bar to blue
            arr[j].style.background = "blue";
            arr[j+1].style.height = arr[j].style.height;
            j--; 
            await waitForMe(delay);
            // change color of all the bars upto i (inclusive) to green
            for(let k = i; k >= 0; k--) {
                arr[k].style.background = "green";
            }
        }
        arr[j+1].style.height = key;
    }
}

const insertionSortBtn = document.querySelector(".insertionSort");

insertionSortBtn.addEventListener("click", async ()=> {
    await insertionSort();
})
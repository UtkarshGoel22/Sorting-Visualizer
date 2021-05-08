async function insertionSort() {
    // console.log("Inside insertionSort()");
    const arr = document.querySelectorAll(".bar");
    for(let i = 1; i < arr.length; i++) {
        arr[i].style.background = "blue";
        let key = arr[i].style.height;
        let j = i-1;
        while(j >= 0 && parseInt(arr[j].style.height) > parseInt(key)) {
            arr[j].style.background = "blue";
            arr[j+1].style.height = arr[j].style.height;
            j--; 
            await waitForMe(delay);
            for(let k = i; k >= 0; k--) {
                arr[k].style.background = "green";
            }
        }
        arr[j+1].style.height = key;
        arr[i].style.background = "green";
    }
}

const insertionSortBtn = document.querySelector(".insertionSort");

insertionSortBtn.addEventListener("click", async ()=> {
    await insertionSort();
})
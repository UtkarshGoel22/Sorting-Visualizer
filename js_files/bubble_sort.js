async function bubbleSort() {
    // console.log("Inside bubbleSort()");
    const arr = document.querySelectorAll(".bar");
    for(let i = 0; i < arr.length-1; i++) {
        for(let j = 0; j < arr.length-i-1; j++) {
            arr[j].style.background = "blue";
            arr[j+1].style.background = "blue";
            if(parseInt(arr[j].style.height) > parseInt(arr[j+1].style.height)) {
                await waitForMe(delay);
                swap(arr[j], arr[j+1]);
            }
            arr[j].style.background = "cyan";
            arr[j+1].style.background = "cyan";
        }
        arr[arr.length-i-1].style.background = "green";
    }
    arr[0].style.background = "green";
}

const bubbleSortBtn = document.querySelector(".bubbleSort");

bubbleSortBtn.addEventListener("click", async ()=> {
    await bubbleSort();
})
async function selectionSort() {
    // console.log("Inside selectionSort()");
    const arr = document.querySelectorAll(".bar");
    for(let i = 0; i < arr.length; i++) {
        let cur_min_pos = i;
        arr[i].style.background = "blue";
        for(let j = i+1; j < arr.length; j++) {
            arr[j].style.background = "red";
            await waitForMe(delay);
            if(parseInt(arr[j].style.height) < parseInt(arr[cur_min_pos].style.height)) {
                if(cur_min_pos !== i) {
                    arr[cur_min_pos].style.background = "cyan";
                }
                cur_min_pos = j;
            }
            else {
                arr[j].style.background = "cyan";
            }
        }
        await waitForMe(delay);
        swap(arr[i], arr[cur_min_pos]);
        arr[cur_min_pos].style.background = "cyan";
        arr[i].style.background = "green";
    }
}

const selectionSortBtn = document.querySelector(".selectionSort");

selectionSortBtn.addEventListener("click", async ()=> {
    await selectionSort();
}) 
async function selectionSort() {
    // console.log("Inside selectionSort()");
    const arr = document.querySelectorAll(".bar");
    for(let i = 0; i < arr.length; i++) {
        // to store index of next min position in array
        let cur_min_pos = i;
        // change color of the ith bar to blue
        arr[i].style.background = "blue";
        for(let j = i+1; j < arr.length; j++) {
            // change color of the jth bar to red
            arr[j].style.background = "red";
            await waitForMe(delay);
            if(parseInt(arr[j].style.height) < parseInt(arr[cur_min_pos].style.height)) {
                if(cur_min_pos !== i) {
                    // new min is found so change the previous min back to original color
                    arr[cur_min_pos].style.background = "cyan";
                }
                cur_min_pos = j;
            }
            else {
                // change color of jth bar back to original color 
                arr[j].style.background = "cyan";
            }
        }
        await waitForMe(delay);
        swap(arr[i], arr[cur_min_pos]);
        // change the cur_min_pos bar back to original color as it was swapped
        arr[cur_min_pos].style.background = "cyan";
        // change the color of sorted element to green
        arr[i].style.background = "green";
    }
}

const selectionSortBtn = document.querySelector(".selectionSort");

selectionSortBtn.addEventListener("click", async ()=> {
    await selectionSort();
}) 
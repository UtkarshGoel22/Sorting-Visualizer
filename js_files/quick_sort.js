async function partition(arr, l, r) {
    // console.log("Inside partition()");
    let pivot_item = arr[r];
    arr[r].style.background = "red";
    let i = l - 1;
    for(let j = l; j < r; j++) {
        arr[j].style.background = "yellow";
        await waitForMe(delay);
        if(parseInt(arr[j].style.height) < parseInt(pivot_item.style.height)) {
            i++;
            swap(arr[i], arr[j]);
            arr[i].style.background = "orange";
            if(i != j) {
                arr[j].style.background = "orange"; 
            }
            await waitForMe(delay);
        }
        else {
            arr[j].style.background = "pink";
        }
    }
    i++;
    await waitForMe(delay);
    swap(arr[i], arr[r]);
    arr[r].style.background = "pink";
    arr[i].style.background = "green";
    await waitForMe(delay);
    for(let k = 0; k < arr.length; k++){
        if(arr[k].style.background != 'green') {
            arr[k].style.background = 'cyan';
        }
    }
    return i;
}

async function quickSort(arr, l, r) {
    // console.log("Inside quickSort()");
    if(l < r) {
        let pivot = await partition(arr, l, r);
        await quickSort(arr, l, pivot-1);
        await quickSort(arr, pivot+1, r);
    }
    else {
        if(l >= 0 && r >= 0 && l < arr.length && r < arr.length){
            arr[l].style.background = 'green';
            arr[r].style.background = 'green';
        }
    }
}

const quickSortBtn = document.querySelector(".quickSort");

quickSortBtn.addEventListener("click", async ()=> {
    let arr = document.querySelectorAll(".bar");
    let l = 0;
    let r = arr.length - 1;
    await quickSort(arr, l, r);
})
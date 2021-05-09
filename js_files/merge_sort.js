async function merge(arr, l, mid, r) {
    // console.log("Inside merge()");
    let n1 = mid - l + 1;
    let n2 = r - mid;
    // create new arrays left and right of size of n1 & n2 respectively
    let left = new Array(n1);
    let right = new Array(n2);
    // change color of [l,l+n1) or [l,mid] bars to orange
    // and add values in left array
    for(let i = 0; i < n1; i++) {
        await waitForMe(delay);
        arr[l+i].style.background = "orange";
        left[i] = arr[l+i].style.height;
    }
    // change color of [mid+1,r] bars to orange
    // and add values in right array
    for(let j = 0; j < n2; j++) {
        await waitForMe(delay);
        arr[mid+j+1].style.background = "yellow";
        right[j] = arr[mid+j+1].style.height; 
    }
    await waitForMe(delay);
    let i = 0, j = 0, k = l;
    while(i < n1 && j < n2) {
        await waitForMe(delay);
        if(parseInt(left[i]) < parseInt(right[j])) {
            if((n1 + n2) === arr.length) {
                // change the color of kth element to green as the array has become sorted
                arr[k].style.background = "green";
            }
            else {
                // change the color of kth element to lightgreen
                arr[k].style.background = "lightgreen";
            }
            arr[k].style.height = left[i];
            k++;
            i++;
        }
        else {
            if((n1 + n2) === arr.length) {
                // change the color of kth element to green as the array has become sorted
                arr[k].style.background = "green";
            }
            else {
                // change the color of kth element to lightgreen
                arr[k].style.background = "lightgreen";
            }
            arr[k].style.height = right[j];
            k++;
            j++;
        }
    }
    while(i < n1) {
        await waitForMe(delay);
        if((n1 + n2) === arr.length) {
            // change the color of kth element to green as the array has become sorted
            arr[k].style.background = 'green';
        }
        else {
            // change the color of kth element to lightgreen
            arr[k].style.background = 'lightgreen';
        }
        arr[k].style.height = left[i];
        k++;
        i++;
    }
    while(j < n2) {
        await waitForMe(delay);
        if((n1 + n2) === arr.length) {
            // change the color of kth element to green as the array has become sorted
            arr[k].style.background = 'green';
        }
        else {
            // change the color of kth element to lightgreen
            arr[k].style.background = 'lightgreen';
        }
        arr[k].style.height = right[j];
        k++;
        j++;
    }
}

async function mergeSort(arr, l, r) {
    // console.log("Inside mergeSort()");
    if(l < r) {
        let mid = Math.floor((l + r) / 2);
        await mergeSort(arr, l, mid);
        await mergeSort(arr, mid+1, r);
        await merge(arr, l, mid, r);
    }
}

const mergeSortBtn = document.querySelector(".mergeSort");

mergeSortBtn.addEventListener("click", async ()=> {
    let arr = document.querySelectorAll(".bar");
    let l = 0;
    let r = parseInt(arr.length)-1;
    await mergeSort(arr, l, r);
})
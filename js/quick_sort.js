async function quickSort() {
    await quickSortUtil(div_size, 0, array_size - 1)
}
async function quickSortUtil(div_size, low, high) {
    console.log(low + " q " + high);
    if (low < high) {
        var p = await partition(div_size, low, high)
        console.log("sorted at "+p)
        console.log(div_size)
        await quickSortUtil(div_size, low, p - 1)
        await quickSortUtil(div_size, p + 1, high)
    }else if(low==high){
        await update_div(div_array[high], div_size[high], "green")
    }
}
async function partition(div_size, low, high) {

    console.log(low + " " + high);
    if(low == high)
        return
    var pivot = div_size[high]
    await update_div(div_array[high], div_size[high], "red")
    var i = low - 1
    for (j = low; j < high; j++) {
        if (div_size[j] < pivot) {
            i++
            await update_div(div_array[i], div_size[i], "yellow")
            await update_div(div_array[j], div_size[j], "yellow")
            if(i!=j){
                div_size[j] = div_size[j] ^ div_size[i]
                div_size[i] = div_size[j] ^ div_size[i]
                div_size[j] = div_size[j] ^ div_size[i]
            }

            await update_div(div_array[j], div_size[j], "blue")
            await update_div(div_array[i], div_size[i], "blue")
        }
    }
    await update_div(div_array[i + 1], div_size[i + 1], "yellow")
    await update_div(div_array[high], div_size[high], "yellow")
    if(i+1!=high){
        div_size[high] = div_size[high] ^ div_size[i + 1]
        div_size[i + 1] = div_size[high] ^ div_size[i + 1]
        div_size[high] = div_size[high] ^ div_size[i + 1]
    }

    await update_div(div_array[high], div_size[high], "blue")
    await update_div(div_array[i + 1], div_size[i + 1], "green")
    return (++i);

}

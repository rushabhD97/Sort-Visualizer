async function stableSelectionSort() {
    for (i = 0; i < array_size - 1; i++) {
        var min_index = i
        await update_div(div_array[i], div_size[i], "red")

        for (j = i + 1; j < array_size; j++) {
            var updated=false
            await update_div(div_array[j], div_size[j], "yellow")
            if (div_size[j] < div_size[min_index]) {
                updated=true
                await update_div(div_array[min_index], div_size[min_index],"blue")
                min_index = j
                await update_div(div_array[min_index], div_size[min_index], "red")

            }
            await update_div(div_array[j], div_size[j],updated?"red":"blue")
        }
        var temp = div_size[min_index];
        for(j=min_index;j>=i+1;j--){
            div_size[j]=div_size[j-1]
            div_size[j-1]=temp
            await update_div(div_array[j], div_size[j], "blue",10)
            await update_div(div_array[j-1], div_size[j-1], "red",10)
        }
        // await update_div(div_array[min_index], div_size[min_index], "yellow")
        // await update_div(div_array[i], div_size[i], "yellow")
        // if(min_index!=i){
        //     div_size[min_index] = div_size[min_index] ^ div_size[i]
        //     div_size[i] = div_size[min_index] ^ div_size[i]
        //     div_size[min_index] = div_size[min_index] ^ div_size[i]
        // }

        // await update_div(div_array[min_index], div_size[min_index], "blue")
        // await update_div(div_array[i], div_size[i], "blue")
        await update_div(div_array[i], div_size[i], "green")
        console.log(div_size)
    }
    await update_div(div_array[array_size-1], div_size[array_size-1], "green")
    // await update_div(div_array[0],div_size[0],"green")
}

async function insertionSort(){
    await update_div(div_array[0],div_size[0],"yellow")
    await update_div(div_array[0],div_size[0],"green")
    for(i=1;i<array_size;i++){
        var key = div_size[i]
        let j=i-1
        for(;j>=0 && div_size[j] > key;j--){
            await update_div(div_array[j+1],div_size[j+1],"yellow")
            div_size[j+1]=div_size[j]
            await update_div(div_array[j+1],div_size[j+1],"green")
        }
        await update_div(div_array[j+1],div_size[j+1],"yellow")
        div_size[j+1]=key
        await update_div(div_array[j+1],div_size[j+1],"green")
        console.log(div_size)
    }
    // await update_div(div_array[0],div_size[0],"green")
}

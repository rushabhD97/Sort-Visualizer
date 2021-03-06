async function bubbleSort(){
    c_delay=0
    for(i=0;i<array_size-1;i++){
        let j=0
        for(;j<array_size-i-1;j++){
            await update_div(div_array[j+1],div_size[j+1],"yellow")
            await update_div(div_array[j],div_size[j],"yellow")
            console.log("comparing "+j+" and "+(j+1))
            if(div_size[j] > div_size[j+1]){
                console.log("need swapping "+j+" and "+(j+1))
                await update_div(div_array[j+1],div_size[j+1],"red")
                await update_div(div_array[j],div_size[j],"red")
                console.log("swapping "+j+" and "+(j+1))
                div_size[j+1]=div_size[j+1]^div_size[j]
                div_size[j]=div_size[j+1]^div_size[j]
                div_size[j+1]=div_size[j+1]^div_size[j]
                console.log("swapped "+j+" and "+(j+1))
                await update_div(div_array[j+1],div_size[j+1],"red")
                await update_div(div_array[j],div_size[j],"red")
                console.log("swapped height"+j+" and "+(j+1))
            }
            await update_div(div_array[j+1],div_size[j+1],"blue")
            await update_div(div_array[j],div_size[j],"blue")
        }
        await update_div(div_array[j],div_size[j],"green")
        console.log(div_size)
    }
    await update_div(div_array[0],div_size[0],"green")
}

async function mergerSort(){
    await mergerSortUtil(div_size,0,array_size-1)
}

async function mergerSortUtil(div_size,low,high){
    if(low<high){
        var mid = low + parseInt((high-low)/2)
        console.log("For "+low+" "+mid+" "+high)

        await mergerSortUtil(div_size,low,mid)
        console.log("done "+low+" "+mid)
        await mergerSortUtil(div_size,mid+1,high)
        console.log("done "+(mid+1)+" "+high)

        await merge(div_size,low,mid,high)
    }

}

async function merge(div_size,low,mid,high){
    console.log("merge "+low+" "+mid+" "+high)
    var s1 = low, s2 = mid+1
    var arr = [], k = 0

    for(i=low;i<=high;i++){
        if(s1>mid){
            arr[k] = div_size[s2]
            await update_div(div_array[s2],div_size[s2],"red")
            k++
            s2++
        }else if(s2>high){
            arr[k] = div_size[s1]
            await update_div(div_array[s1],div_size[s1],"red")
            k++
            s1++

        }else if(div_size[s1]<div_size[s2]){
            arr[k] = div_size[s1]
            await update_div(div_array[s1],div_size[s1],"red")
            k++
            s1++

        }else{
           arr[k] = div_size[s2]
            await update_div(div_array[s2],div_size[s2],"red")
            k++
            s2++
        }
    }
    for(i=0,j=low;i<k;i++,j++){
        div_size[j]=arr[i];
        await update_div(div_array[j],div_size[j],"green")
    }

}
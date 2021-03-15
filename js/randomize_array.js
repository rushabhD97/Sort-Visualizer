var root=document.getElementById("arr-elements")
var div_array=[]
var div_size=[]
var array_size=8
var margin_size=0.2
function randomize() {
    console.log(array_size)
    root.innerHTML=""
    div_array=[]
    div_size=[]
    for(i=0;i<array_size;i++){
        var height =  Math.random()*100
        var bar = document.createElement("div")
        root.appendChild(bar)
        div_array.push(bar);
        div_size.push(height)
        bar.style="margin: 0% "+margin_size+"%; "+
        "background-color: blue; "+
        "width: "+(100/array_size)+"%; "+
        "height: "+height+"%; "
    }
    console.log(div_size)
        
}

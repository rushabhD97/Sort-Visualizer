var delay 
function  update_div(element,height,color,speed=(10000/array_size)){
    delay = delay??speed
    return new Promise(resolve => setTimeout(()=> {        
        element.style="margin: 0% "+margin_size+"%; "+
        "background-color: "+color+"; "+
        "width: "+(100/array_size)+"%; "+
        "height: "+height+"%; "
        console.log(delay)
        resolve("success")
    },delay))
  /*  window.setTimeout(function(){
        element.style="margin: 0% "+margin_size+"%; "+
        "background-color: "+color+"; "+
        "width: "+(100/array_size)+"%; "+
        "height: "+height+"%; "
    },c_delay+=delay_time)*/
}

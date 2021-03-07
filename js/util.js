speed=1
var delay_time=100/(Math.floor(array_size/10)*speed);        //Decrease numerator to increase speed.
var c_delay=0;//This is updated ov every div change so that visualization is visible.
function  update_div(element,height,color,speed=(10000/array_size)){

    return new Promise(resolve => setTimeout(()=> {        
        element.style="margin: 0% "+margin_size+"%; "+
        "background-color: "+color+"; "+
        "width: "+(100/array_size)+"%; "+
        "height: "+height+"%; "
        resolve("success")
    },speed))
  /*  window.setTimeout(function(){
        element.style="margin: 0% "+margin_size+"%; "+
        "background-color: "+color+"; "+
        "width: "+(100/array_size)+"%; "+
        "height: "+height+"%; "
    },c_delay+=delay_time)*/
}
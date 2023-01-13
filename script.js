//display
function display(value){
    document.getElementById("display-area").value +=value;   
}
//reset display
function reset(){
 document.getElementById("display-area").value ="";
}
//cut
function cut(){
  var c=  document.getElementById("display-area").value;
  var d=c.slice(0,-1);
  document.getElementById("display-area").value=d;
}
  


//calculation
function  calculation(){
  var a=  document.getElementById("display-area").value ;
  var b=eval(a);
  document.getElementById("display-area").value=b;
  
}

//hiding list items underneath ingredients,equipment and directions and toggling them

// toggle the ingredient box
window.onload = function() {
  document.querySelector("#box1").onclick = function (){
    document.querySelector("#box1 ul").classList.toggle("showMe");
  }
  
  //toggling equipment
   document.querySelector("#box2").onclick = function (){
     document.querySelector("#box2 ul").classList.toggle("showMe");
   }
   
   //toggling directions
    document.querySelector("#box3").onclick = function (){
     document.querySelector("#box3 ol").classList.toggle("showMe");
   }
    
    // changing font size
    document.querySelector("#browniepic h1").classList.add("title");
  
  //title changes color when hovering over it
  document.querySelector("#browniepic h1").onclick = function(){
    this.classList.toggle("title");
  }
 
  document.querySelector("#footer").innerHTML += "<p>This is just a test webpage</p>";
    
    
}// end of window onload

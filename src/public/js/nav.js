function menuFunction() {
    var x = document.getElementById("navbarsMenu");
    var y = document.getElementById("navbarsSearch");

    if (x.style.visibility === "visible") {
    
     
      
       x.style.visibility = "hidden";
       x.style.transform = "translateX(100%)";
      
    } else {
    y.style.visibility = "hidden";
    y.style.transform = "translateX(100%)";
      x.style.visibility = "visible";
      x.style.transform = "translateX(-100%)";
    }
  }

  function searchFunction() {
    var x = document.getElementById("navbarsMenu");
    var y = document.getElementById("navbarsSearch");

    if (y.style.visibility === "visible") {
    
     
      
       y.style.visibility = "hidden";
       y.style.transform = "translateX(100%)";
      
    } else {
    x.style.visibility = "hidden";
    x.style.transform = "translateX(100%)";
      y.style.visibility = "visible";
      y.style.transform = "translateX(-100%)";
    }
  }
  
  
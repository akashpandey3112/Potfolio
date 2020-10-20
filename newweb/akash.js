function butto() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("button_div").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "index.html", true);
  xhttp.send();
}


  function login() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("main").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", "login.html", true);
    xhttp.send();
  }
 
  function profile() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("main").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", "web.html", true);
    xhttp.send();
  }
  

  function signup() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("main").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", "signup.html", true);
    xhttp.send();
  }
 
   
   
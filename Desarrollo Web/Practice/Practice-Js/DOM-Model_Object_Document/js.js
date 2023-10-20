let Button1 = false;
let Button2 = false;
let Button3 = false;

document.getElementById("buton1").addEventListener("click", function() {
  let div = document.getElementById("caja1");
  if (Button1) {
    div.style.background = "";
    div.style.width = "";
    div.style.height = "";
    Button1 = false;
  } else {
    div.style.background = "red";
    div.style.width = "1000px";
    div.style.height = "200px";
    Button1 = true;
  }
});

document.getElementById("buton2").addEventListener("click", function() {
  let div = document.getElementById("caja2");
  if (Button2) {
    div.style.background = "";
    div.style.width = "";
    div.style.height = "";
    Button2 = false;
  } else {
    div.style.background = "green";
    div.style.width = "800px";
    div.style.height = "150px";
    Button2 = true;
  }
});

document.getElementById("buton3").addEventListener("click", function() {
  let div = document.getElementById("caja3");
  if (Button3) {
    div.style.background = "";
    div.style.width = "";
    div.style.height = "";
    Button3 = false;
  } else {
    div.style.background = "black";
    div.style.width = "900px";
    div.style.height = "300px";
    Button3 = true;
  }
});

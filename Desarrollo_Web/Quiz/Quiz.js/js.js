var band = true
var cont = 1
var texto = "<ul>"
var nom
var edad

while(band){
    nom = prompt("ingrese su nombre")
    edad = prompt("ingrese su edad")
    texto = texto + "<li>" + cont + ".  nombre: " + nom + " edad: " + edad + "</li>"
    cont++
    band = confirm("¿desea ingresar otra persona?")
}
texto = texto + "</ul>"
document.getElementById("miDiv").innerHTML = texto
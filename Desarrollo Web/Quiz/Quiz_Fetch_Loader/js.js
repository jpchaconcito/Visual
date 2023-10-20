'use stric'
const DivLoader = document.querySelector("#caja")
const DivTabla = document.querySelector("#divTabla")
const boton = document.querySelector("#boton")
const imagen = document.querySelector("#imagen")

function mostrarImagen() {
    boton.style.display = "none";
    imagen.style.display = "block";
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(json => imprimirTabla(json))
        .catch(() => console.log("error"))
    setTimeout(function() {
        imagen.style.display = "none";
        DivLoader.style.display = "none"
        DivTabla.style.display = "block"     
    }, 3000);
    
}

const tabla = document.querySelector("#tablon")
const imprimirTabla = (data) => {
    data.map((elemento) => {
        let fila = tabla.insertRow()
        let celdaPostId = fila.insertCell(0)
        let celdaId = fila.insertCell(1) 
        let celdaNom = fila.insertCell(2) 
        let celdaMail = fila.insertCell(3)
        celdaPostId.innerHTML = elemento.postId 
        celdaId.innerHTML = elemento.id 
        celdaNom.innerHTML = elemento.name 
        celdaMail.innerHTML = elemento.email
    });
}
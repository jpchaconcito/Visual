'use strict'
const pp = () => fetching(() => console.log())

const fetching = (llamado) => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(json => imprimir(imprimir(json)))
    .catch(() => llamado())
}

const tabla = document.querySelector("#tablon")
const imprimir = (data) => {
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

pp(()=>{})
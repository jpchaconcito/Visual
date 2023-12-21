function traerDatos(){
    var respuesta = fetch('https://reqres.in/api/users?page=2')
    .then(datos =>{
        datos.json();
    })
    .then()
}
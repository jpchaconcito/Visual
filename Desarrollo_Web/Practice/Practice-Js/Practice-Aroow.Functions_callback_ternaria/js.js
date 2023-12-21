var nombreMujer= 'paola'
var nombreHombre= 'juan pablo'

function quitarPetalos(numeroPetalos, callbak){
    numeroPetalos %2 == 0 ? callbak(true,`dense un beso ${nombreMujer} y ${nombreHombre}`):
                            callbak(false,`mala esa ${nombreMujer} y ${nombreHombre} no van a ser novios`)
}

let dimension = nombreHombre.length + nombreMujer.length

quitarPetalos(dimension,(valor,texto) => {
    if (valor == true){
        console.log("Felicitaciones "+texto)
    }else{
        console.log("triste "+texto)
    }
})

//Tirar un dado
var dado = Math.floor(Math.random()*6)+1

tirarDado = (valor,callback) =>{
    valor == 6 ? callback("felicitaciones ganaste",valor) : callback("suerte la proxima perdiste ",valor)   
}

tirarDado(dado,(t,n) => console.log(`${t} con ${n}`) )
//si tenemos codigo que se repite, se debe volver una funcion

function limpiar(tipoDeLimpieza){
    if(tipoDeLimpieza === 'contenedor'){
        $("#amigo").empty()
        $("#lista").empty()
    }
    else if(tipoDeLimpieza === 'input'){
        $("#imput").val("") //con esto limpiamos la barra de busqueda
        $("#inputDelete").val("")
    }
}


function mostrarAmigo(){
    $.ajax({
        url: `http://localhost:5000/amigos`,
        type: 'get',
        success: (info) => {
            info.forEach(function(amigo){
                let ul = document.getElementById('lista')
                let nuevoLi = document.createElement('li')
                nuevoLi.innerHTML = `ID: ${amigo.id} Nombre: ${amigo.name}`    //amigo.id + amigo.name
                nuevoLi.id = amigo.id
                ul.appendChild(nuevoLi)
            })
        }
    })
}


function buscarAmigo(id){
    $.ajax({
        url:`http://localhost:5000/amigos/${id}`,
        type: 'get',
        success: (data) =>{
            $("#amigo").append(`<p>${data.name}</p>`)
            $("#amigo").append(`<p>${data.email}</p>`)
            limpiar('input')
            mostrarAmigo()
        },
        error: (error) =>{
            if(error){ 
            alert('El id del amigo no existe')
            limpiar('input')
            }
        }
    })
}


function borrarAmigo(id){
    $.ajax({
        url:`http://localhost:5000/amigos/${id}`,
        type: 'delete', // Existen 9 tipos de metodos que puede tener un endpoint (url) --- los metodos mas comunes son GET, POST, PUT y DELETE --- a una url (endpoint) solo se le puede asignar 4 metodos --- a un enpoint(url) no se le puede asignar 2 get o 2 post o 2 delete o 2 put, solo un tipo de metodo
        success: (data) =>{
            alert("amigo elmininado con exito")
            limpiar()
            mostrarAmigo()
        }
    }) 
}



$("#boton").click( () => {
    limpiar('contenedor')
    mostrarAmigo()
})


$("#search").click(()=>{
    let id = $("#input").val()
    if(!id) return alert("El campo de busqueda esta vacio")
    limpiar('contenedor')
    buscarAmigo(id)
})



$("#delete").click(()=>{
    let id = $("#inputDelete").val()
    if(!id) return alert("El campo de busqueda esta vacio")
    borrarAmigo()

})

/* $("#enviarForm").click(()=>{
    let name = $("#name").val()
    let age = $("#age").val()
    let email = $("email").val()
    let dataAEnviar = {
        name,
        age,
        email
    }
    $.ajax({
        url: `http://localhost:5000/amigos`,
        type: 'post',
        data: JSON.stringify(dataAEnviar),
        success: (data) => {

        }
    })
}) */
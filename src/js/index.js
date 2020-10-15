const contactanos = document.querySelector("#contactar") 

let Consultas = JSON.parse(localStorage.getItem('Consultas'))

if (Consultas === null) {
    Consultas = []
}

//funciones

const crearConsulta = (nombre, apellido, email, telefono, consulta) => {
    let nuevaConsulta = {
        Nombre: nombre,
        Apellido: apellido,
        Email: email,
        Telefono: telefono,
        Consultanueva: consulta
    }
    guardarConsulta(nuevaConsulta)
}

const guardarConsulta = (dat) => {
    Consultas.push(dat)
    localStorage.setItem('Consultas', JSON.stringify(Consultas))
    mensajeOk("Tu consulta fue enviada...")
    //mostrarMensajeOk("Tu consulta fue enviada")
}

const borraarLogueado = () =>{
    localStorage.removeItem('usuarioLoggeado')
}

//evento
contactanos.addEventListener('submit', (e) =>{
    e.preventDefault()

    let nombre = contactanos.querySelector('[name=Nombre]').value
    let apellido = contactanos.querySelector('[name=Apellido]').value
    let email = contactanos.querySelector('[name=Email]').value
    let telefono = contactanos.querySelector('[name=Telefono]').value
    let consulta = contactanos.querySelector('[name=Consulta]').value

    crearConsulta(nombre,apellido,email,telefono,consulta)
    contactanos.reset()
})

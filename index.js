function enviar(){
    let nom = document.getElementById('nombre').value;
    let ape = document.getElementById('apellido').value;
    let nac = document.getElementById('fecha').value;

fetch('https://jsonplaceholder.typicode.com/users', {
    headers:{"Content-Type": "application/json"},
    method: 'POST' ,
    body: JSON.stringify({
        "nombre": nom,
        "apellido": ape,
        "fechaNacimiento": nac,
    })
})

.then(response => response.json())
.then(data => alert('datos enviados correctamente'))
}

document.addEventListener('DOMContentLoaded' ,() => {

    document.getElementById('enviar').addEventListener("click" , () => {
        enviar();
    })
})
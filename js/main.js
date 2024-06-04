const btn = document.querySelector('#basura')

function mostrar() {
    var form = document.getElementsByClassName("form-text")[0];

    if (form.style.visibility == "hidden") {
        form.style.visibility = "visible";
    } else {
        form.style.visibility = "hidden"
    }
}

async function enviarAuto(id){
const eliminar = await fetch("http://localhost:3000/autos/1", {
    method: "DELETE",
    headers: { "Content-type": "application/json" },
})
basura.addEventListener('click',(event) =>{
    event.preventDefault();
    autos.id

    return eliminar
})
}
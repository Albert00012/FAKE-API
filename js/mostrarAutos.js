import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]")

function crearCard(titulo, year, kms, ciudad, precio, imagen, basura) {
    const auto = document.createElement("div")

    auto.className = "lista-autos";
    auto.innerHTML = `<div class="img-auto">
    <img src="${imagen}"
        height="182px" width="320px">
</div>
<div class="info-auto">
    <div class="titulo-auto">
    <h3 class="modelo-auto">${titulo}</h3>
    </div>
    <span class="span-info">
        <span class="year">${year}</span>
        ${kms} Kms · ${ciudad}
    </span>
    <div class="precio">
        $ ${precio}
    </div>
    <div class="basura" id="basura">
        <img src="./img/bote-de-basura.png">
        
    </div>
</div>`;

    return auto;
}

async function listarAutos() {
    const listaAPI = await conexionAPI.listarAutos()

    listaAPI.forEach(auto => lista.appendChild(crearCard(auto.titulo, auto.year,
        auto.kms, auto.ciudad, auto.precio, auto.imagen, auto.basura
    )))
}

listarAutos()
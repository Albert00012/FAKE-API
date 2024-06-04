import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function crearAuto(evento){

    evento.preventDefault();
   
    const titulo= document.querySelector("[data-titulo]").value;
    const year= document.querySelector("[data-year]").value;
    const kms= document.querySelector("[data-kms]").value;
    const ciudad= document.querySelector("[data-ciudad]").value;
    const precio= document.querySelector("[data-precio]").value;
    const imagen= document.querySelector("[data-imagen]").value;
    
    await conexionAPI.enviarAuto(titulo, year, kms, ciudad, precio, imagen);
    
}

formulario.addEventListener("submit",evento => crearAuto(evento));

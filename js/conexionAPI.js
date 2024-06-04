//ACTIVAR JSON-SEVER
//json-server —watch db.json —port 3000
//json-server --watch db.json

async function listarAutos(){
    const conexion = await fetch("http://localhost:3000/autos");

    const conexionConvertida = conexion.json();

    // console.log(conexionConvertida)
    return conexionConvertida
}

async function enviarAuto(titulo, year, kms, ciudad, precio, imagen){
    const conexion = await fetch("http://localhost:3000/autos", {
        method: "POST",
        headers: {"Content-type":"application/json"},
        body: JSON.stringify({
            titulo:titulo,
            year:year, 
            kms:kms, 
            ciudad:ciudad, 
            precio:precio, 
            imagen:imagen,
        })
    });
    const conexionConvertida = conexion.json();
    return conexionConvertida;
}



export const conexionAPI={
    listarAutos, enviarAuto
}

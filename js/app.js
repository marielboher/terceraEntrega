const busqueda = document.querySelector("#busqueda");
const URL = "bbdd/productos.json";
let productos = [];

async function traerDatos() {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    if (data.length > 0 ) {
      productos.push(...data);
      generarCards(productos);
      activarBtn();
    }
  } catch (error) {
    console.error(error);
  }
}
traerDatos();

// generar cards shop

const cardTienda = document.getElementById("cardTienda");

function generarCards() {
  productos.forEach((producto) => {
    cardTienda.innerHTML += `
    <div class="prod">
    <div class="cont-img">
    <img src=${producto.imagen}>
    </div>
    <div class="des">
        <span>${producto.marca}</span>
        <h5>${producto.nombre}</h5>
        <p>${producto.color}</p>
        <div class="estrellas">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i> 
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
        </div>
        <h4>$${producto.precio.toFixed(2)}</h4>
    </div>
    <button class="btn-add" id="${producto.id}" title="Clic para agregar '${
      producto.nombre
    }' al carrito"><i class="fa-solid fa-bag-shopping carro"></i></button>
</div>
    `;
  });
}

// function aumentarCant(){
//   const existe = carrito.some(prod => prod.id === id)
//   if(existe){
//     const prodExist = carrito.map(prod => {
//       if(prod.id === id){
//         prodExist.cantidad++
//       }
//     })
//   }
// }

const formulario = document.querySelector("#busqueda");
const boton = document.querySelector(".btnBusqueda");
resultado = document.querySelector(".resultado");

formulario.addEventListener("input", (e) => {
  console.log("productos", productos);
  resultados = e.target.value;
  resultadoBusqueda = productos.filter((producto) => {
    return producto.nombre.toLowerCase().includes(e.target.value.toLowerCase());
  });
  
  generarCards(productos);
  console.log("resultado buqeuda", resultadoBusqueda);
});



function activarBtn() {
  const botonesAdd = document.querySelectorAll(".btn-add");
  botonesAdd.forEach((btn) => {
    btn.addEventListener("click", () => {
      let resultado = productos.find((prod) => prod.id === parseInt(btn.id));
      carrito.push(resultado);
      localStorage.setItem("prodCarrito", JSON.stringify(carrito));
      alerta(`'${resultado.nombre}' se agregó al carrito`, "#088170");
    });
  });
}


// const input = document.querySelector("#busqueda")
// const btnBusqueda = document.querySelector(".btnBusqueda")
// const resultadoBusqueda = document.querySelector(".resultado")
// const selectorFilter = document.querySelector("#datalistOptions");


// const valorObtenido = e => {
//   let valor = e.target.value.toLowerCase();
//   (valor)?generarCards(filtrar(productos, valor)):generarCards(productos);
//   activarBtn();
// }

// const filtrar = (array, valor) => {
//   let resultado = [];
//   array.forEach(producto => {
//       if(JSON.stringify(producto).includes(valor)){
//           resultado.push(producto);
//       }
//   });
//   return (resultado)?resultado:catalogo;
// }

// const cargarTienda = array => {
//   let shopHTML ="";
//   let filtroHTML="";
//   if(array.length > 0){
//       array.forEach(producto =>{
//           shopHTML += generarCards(producto);
//           filtroHTML += `<option value="${producto.nombre}"></option>`;
//       });
//   }else{
//       shopHTML = `<h2 class="btn p-4 text-center">No se encuentran productos</h2>`;
//   }
//   resultadoBusqueda.innerHTML = shopHTML;
//   selectorFilter.innerHTML = filtroHTML;
// }



// buscarProducto

// const filtrar = () => {
//     let resultado = productos.filter(producto => producto.nombre.toUpperCase().includes(formulario.value.toUpperCase().trim()))
//     if(resultado.length > 0){
//        generarCards(resultado)
//        console.log(resultado)
//     }else{
//       console.log("producto no encontrado")
//     }
//   }

// boton.addEventListener('search', filtrar)

const alerta = (text, bgcolor) => {
  Toastify({
    text: text,
    duration: 3000,
    close: true,
    gravity: "top",
    position: "left",
    stopOnFocus: true,
    style: { background: bgcolor || "CornFlowerBlue", fontSize: "14px" },
  }).showToast();
};

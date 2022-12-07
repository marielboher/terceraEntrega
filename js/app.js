const busqueda = document.querySelector('#busqueda')
const URL = 'bbdd/productos.json'
const productos = []


async function traerDatos(){
  try{
    const response = await fetch(URL)
    const data = await response.json()
      if (data.length > 0){
        productos.push(...data)
        generarCards(productos)
        activarBtn()
      }

  } catch (error) {
    console.error(error)
  }
}
traerDatos()

// generar cards shop

const cardTienda = document.getElementById("cardTienda");

function generarCards (){
  productos.forEach(producto =>{
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
    <button class="btn-add" id="${producto.id}" title="Clic para agregar '${producto.nombre}' al carrito"><i class="fa-solid fa-bag-shopping carro"></i></button>
</div>
    `
  })
}

// activar botones carrito

function activarBtn() {
  const botonesAdd = document.querySelectorAll(".btn-add");
  botonesAdd.forEach((btn) => {
    btn.addEventListener("click", () => {
      let resultado = productos.find((prod) => prod.id === parseInt(btn.id));
      carrito.push(resultado);
      localStorage.setItem("prodCarrito", JSON.stringify(carrito));
      alerta(`'${resultado.nombre}' se agregó al carrito`, '#088170')
    });

  });
}


// buscarProducto

function filtrarProductos() {
  let resultado = productos.filter(producto =>  producto.nombre.toUpperCase().includes(busqueda.value.toUpperCase().trim()))
  resultado.length > 0 ? generarCards(resultado) : console.warn("No se han encontrado coincidencias.")
}

busqueda.addEventListener("search", ()=> {
busqueda.value.trim() !== "" ?  filtrarProductos() : generarCards(productos)
})

const alerta = (text, bgcolor)=> {
  Toastify({
      text: text,
      duration: 3000,
      close: true,
      gravity: "top", 
      position: "left",
      stopOnFocus: true, 
      style: { background: bgcolor || 'CornFlowerBlue', fontSize: '14px'}
    }).showToast();
}


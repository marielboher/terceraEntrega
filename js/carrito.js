const vaciarCarrito = document.querySelector("#vaciarCarrito")


const mostrarCarrito = () => {
  const tbody = document.querySelector("#tabla");

  tbody.innerHTML = ''
  carrito.forEach((prod)=> {
    const {id, nombre, imagen, precio} = prod
    tbody.innerHTML += `<tr>
    <td><button class="btn-add" onclick="eliminarDelCarrito(${id})"><i class="far fa-times-circle"></i></button></td>
    <td><img src="${imagen}" class="imgtable"/></td>
    <td>${nombre}</td>
    <td>$${precio}</td>
  </tr>`;
  })

}
mostrarCarrito()


const eliminarDelCarrito = (prodId) => {
  const item = carrito.find((prod) => prod.id === prodId)
  const indice = carrito.indexOf(item)
  carrito.splice(indice, 1)
  localStorage.setItem('prodCarrito', JSON.stringify(carrito))
  mostrarCarrito()
}

vaciarCarrito.addEventListener('click', () => {
  carrito.length = []
  localStorage.clear()
  mostrarCarrito()
})
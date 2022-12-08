const carrito = JSON.parse(localStorage.getItem("prodCarrito")) || [];

function armarCarrito(producto) {
  return `<tr>
    <td><button class="btn-delete-cart btn-add" id="${producto.nombre}"><i class="far fa-times-circle"></i></button></td>
    <td><img src="${producto.imagen}" class="imgtable"/></td>
    <td>${producto.nombre}</td>
    <td>$${producto.precio}</td>
  </tr>`;
}

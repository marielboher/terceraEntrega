class Compra {
  constructor(carrito) {
    this.carrito = carrito;
  }

  totalCompra() {
    let precioTotal = document.querySelector("#total");
    precioTotal.innerText = carrito
      .reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0)
      .toFixed(2);
  }

  finalizarCompra() {
    let totalModalCarrito = document.querySelector("#mostrarTotalCompra");
    totalModalCarrito.innerText = carrito
      .reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0)
      .toFixed(2);
  }
}

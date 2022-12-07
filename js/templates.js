const carrito = JSON.parse(localStorage.getItem("prodCarrito")) || [];

// const cards = (producto) => {
//   return ` 
//     <div class="prod">
//     <div class="cont-img">
//     <img src=${producto.imagen}>
//     </div>
//     <div class="des">
//         <span>${producto.marca}</span>
//         <h5>${producto.nombre}</h5>
//         <p>${producto.color}</p>
//         <div class="estrellas">
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star"></i> 
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star"></i>
//         </div>
//         <h4>$${producto.precio}</h4>
//     </div>
//     <button class="btn-add" id="${producto.id}" title="Clic para agregar '${producto.nombre}' al carrito"><i class="fa-solid fa-bag-shopping carro"></i></button>
// </div>
// `;
// };

function armarCarrito(producto) {
  return `<tr>
    <td><button class="btn-delete-cart btn-add" id="${producto.nombre}"><i class="far fa-times-circle"></i></button></td>
    <td><img src="${producto.imagen}" class="imgtable"/></td>
    <td>${producto.nombre}</td>
    <td>$${producto.precio}</td>
  </tr>`;
}

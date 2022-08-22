window.addEventListener('scroll',() =>{
    let header = document.querySelector('.header');
    header.classList.toggle('abajo',window.scrollY>0)
})
/*CARRITO*/
const flotante = document.querySelector('.flotante')
const cerrarCarrito = document.querySelector('.clouse')

const abrirCarrito = document.querySelector('.box-compras')

cerrarCarrito.addEventListener('click',()=>{
flotante.style.width =('0rem')
})

abrirCarrito.addEventListener('click',()=>{
    flotante.style.width =('50rem')
})

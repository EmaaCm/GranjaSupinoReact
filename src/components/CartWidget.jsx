import carrito from "../assets/carrito.svg"
const CartWidget = () =>{

    return(
       <div>
       <img src={carrito}alt="Carrito" className="carritoLogo"/>
       </div> 
    )
}

export default CartWidget
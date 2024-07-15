import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

export const Card = ({product}) => {
  const {addToCart, removeFromCart, cartList} = useCart();
  const {id, item, image, price} = product;
  const [isInCart, setIsInCart] = useState(false);


  const inCartClass = 'bg-blue-600 text-slate-100 py-2 px-3 rounded font-semibold';
  const notInCartClass = 'bg-red-700 text-slate-100 py-2 px-3 rounded font-semibold'

  useEffect(() => {
    const cartItem = cartList.find((current) => current.id === id);
    if (cartItem) {
      setIsInCart(true);
    }else{
      setIsInCart(false)
    }
  }, [ cartList, id])

  return (
    <div className='max-w-96 py-4 px-3 border border-1 shadow-md rounded-md mb-5'>
      <img src={image} alt="Product1" className='rounded' />
      <h1 className='my-5 text-xl font-medium'>{item}</h1>
      <div className='flex justify-between'>
        <p className='font-bold text-xl'>${price}</p>
        {isInCart ? (<span className={notInCartClass} onClick={() => removeFromCart(product)}>Remove</span>) : (<span className={inCartClass} onClick={() => addToCart(product)}>Add To Cart</span>)}
      
      </div>
    </div>
  )
}

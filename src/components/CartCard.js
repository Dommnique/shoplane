import { useCart } from "../context/CartContext";

export const CartCard = ({product}) => {
  const { removeFromCart } = useCart();
  const { image, item, price } = product;

  return (
    <div>
      <div className='flex items-center justify-between max-h-40 border shadow-md rounded p-3 mb-6'>
            <img className='max-h-28 max-w-24 rounded hidden sm:block' src={image} alt="Item" />
            <p>{item}</p>
            <p>${price}</p>
            <span className='bg-red-700 text-white py-1 px-2 rounded' onClick={() => removeFromCart(product)}>Remove</span>
          </div>
    </div>
  )
}

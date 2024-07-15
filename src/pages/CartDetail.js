import { useTitle } from '../hooks/useTitle';

import { CartCard } from '../components';
import { useCart } from '../context/CartContext';


export const CartDetail = () => {
  useTitle('Cart');

  const { cartList, total} = useCart();


  return (
    <main className='h-screen m-auto'>
      <section>
        <div className='py-9'>
          <h1 className='text-center font-extrabold text-2xl'>Cart Items: {cartList.length}/ ${total} </h1>
        </div>

        <div>
          {cartList.map((product) => (
            < CartCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  )
}

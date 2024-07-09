import Image1 from '../asset/images/sample1.jpg';
import Image2 from "../asset/images/sample2.jpg";
import Image3 from "../asset/images/sample3.jpg";

import { CartCard } from '../components';


export const CartDetail = () => {
  return (
    <main className='h-screen m-auto'>
      <section>
        <div className='py-9'>
          <h1 className='text-center font-extrabold text-2xl'>Cart Items: 2</h1>
        </div>

        <div>
          <CartCard image={Image1} item="Sneakers 2019" price="$150" />
          <CartCard image={Image2} item="Sneakers 2020" price="$350" />
        </div>
      </section>
    </main>
  )
}

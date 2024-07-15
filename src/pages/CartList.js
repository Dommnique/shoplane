import Image1 from '../asset/images/sample1.jpg';
import Image2 from '../asset/images/sample2.jpg';
import Image3 from '../asset/images/sample3.jpg';
import Image4 from '../asset/images/sample4.jpg';
import Image5 from '../asset/images/sample5.jpg';
import Image6 from '../asset/images/sample6.jpg';
import { Card } from '../components';
import { useTitle } from '../hooks/useTitle';

export const CartList = () => {
  useTitle('Home');

  const Products = [
    {id: 1, item: "Sneakers 2019", price: 150, image: `${Image1}`},
    {id: 2, item: "Sneakers 2020", price: 350, image: `${Image2}`},
    {id: 3, item: "Sneakers 2021", price: 150, image: `${Image3}`},
    {id: 4, item: "Sneakers 2022", price: 130, image: `${Image4}`},
    {id: 5, item: "Sneakers 2023", price: 450, image: `${Image5}`},
    {id: 6, item: "Sneakers 2024", price: 50, image: `${Image6}`}
  ]

  return (
    <main>
      <section className="py-4">
        <div className='flex justify-between max-xm:justify-center flex-wrap pt-9'>
          {Products.map((product) => (
            <Card key={product.id} product={product}/>
          ))}
        </div>
      </section>
    </main>
  )
}

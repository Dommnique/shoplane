import Image1 from '../asset/images/sample1.jpg';
import Image2 from '../asset/images/sample2.jpg';
import Image3 from '../asset/images/sample3.jpg';
import Image4 from '../asset/images/sample4.jpg';
import Image5 from '../asset/images/sample5.jpg';
import Image6 from '../asset/images/sample6.jpg';
import { Card } from '../components'

export const CartList = () => {
  return (
    <main>
      <section className="py-4">
        <div className='flex justify-between max-xm:justify-center flex-wrap pt-9'>
          <Card image={Image1} item="Sneakers 2019" price="$150"/>
          <Card image={Image2} item="Sneakers 2020" price="$350"/>
          <Card image={Image3} item="Sneakers 2021" price="$100"/>
          <Card image={Image4} item="Sneakers 2022" price="$130"/>
          <Card image={Image5} item="Sneakers 2023" price="$450"/>
          <Card image={Image6} item="Sneakers 2024" price="$50"/>
        </div>
      </section>
    </main>
  )
}

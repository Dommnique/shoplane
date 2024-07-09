export const Card = ({image, item, price}) => {
  return (
    <div className='max-w-96 py-4 px-3 border border-1 shadow-md rounded-md mb-5'>
      <img src={image} alt="Product1 image" className='rounded' />
      <h1 className='my-5 text-xl font-medium'>{item}</h1>
      <div className='flex justify-between'>
        <p className='font-bold text-xl'>{price}</p>
        <span className='bg-blue-600 text-slate-100 py-2 px-3 rounded font-semibold'>Add To Cart</span>
      </div>
    </div>
  )
}

import { Routes, Route } from 'react-router-dom';
import { CartDetail, CartList } from '../pages';

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={< CartList/>} ></Route>
        <Route path='/cart' element={< CartDetail/>} ></Route>
      </Routes>
    </div>
  )
}

import Home from '../Pages/Home'
import Contact from '../Pages/Contact'
import Register from '../Pages/Register'
import { Route,Routes } from 'react-router-dom'
import PageNotFound from '../Pages/PageNotFound'

function AllRoutes() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='*' element={<PageNotFound />}/>
      </Routes>
    </>
  )
}

export default AllRoutes;
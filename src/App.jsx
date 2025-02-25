import {BrowserRouter,Route,Routes} from 'react-router'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Study from './Pages/Study'
import Task from './Pages/Task'
import Inputsvalues from './Pages/Inputsvalues'
import Templates from './Pages/Templates'
function App(){

  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/cart/:name' element={<Cart />}/>
      <Route path='/study' element={<Study />}/>
      <Route path='/task' element={<Task />}/>
      <Route path='/input' element={<Inputsvalues />}/>
      <Route path='/signup' element={<Templates />}/>
    </Routes>

    </BrowserRouter>
  )
}

export default App
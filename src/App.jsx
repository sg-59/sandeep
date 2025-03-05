import {BrowserRouter,Route,Routes} from 'react-router'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Study from './Pages/Study'
import Task from './Pages/Task'
import Inputsvalues from './Pages/Inputsvalues'
import Templates from './Pages/Templates'
import First from './Pages/First'
import Second from './Pages/Second'
import Third from './Pages/Third'
import Fourth from './Pages/Fourth'
import Ref from './Pages/Ref'
import Parent from './Pages/Parent'
import Reduxdemo from './Pages/Reduxdemo'
import Reactquery from './Pages/Reactquery'

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
      <Route path='/first' element={<First/>}/>
      <Route path='/second' element={<Second/>}/>
      <Route path='/third' element={<Third/>}/>
      <Route path='/fourth' element={<Fourth/>}/>
      <Route path='/ref' element={<Ref/>}/>
      <Route path='/parent' element={<Parent/>}/>
      <Route path='/reduxdemo' element={<Reduxdemo/>}/>
      <Route path='/query' element={<Reactquery/>}/>
    </Routes>

    </BrowserRouter>

  
  )
}

export default App
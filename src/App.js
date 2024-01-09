import logo from './logo.svg';
import './App.css';
import './test.scss';
import Home from './Home.jsx';
import Css from './Css.jsx';
import Image from './Image.jsx';
import Routar from './Routar.jsx';
import Props from './Props.jsx';
import Deploy from './Deploy.jsx';

import {BrowserRouter,Route,Routes,Link} from 'react-router-dom';

let a = 1000;


function App() {
  return (
    <BrowserRouter basename='//reactTest'>

      <header>
        <nav>
          <Link to="/">home</Link>
          <Link to="/css">Css 활용</Link>
          <Link to="/image">Image 활용</Link>
          <Link to="router?num=4000" state={{num:100}}>Routar</Link>
          <Link to="props">Stata&Props</Link>
          <Link to="deploy">Github Deploy</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/css' element={<Css/>}/>
          <Route path='/Image' element={<Image/>}/>
          <Route path='/router' element={<Routar/>}/>
          <Route path='/props' element={<Props/>}/>
          <Route path='/deploy' element={<Deploy/>}/>
          
          {/* <Route path='/*' element={<Not/>}/> */}
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

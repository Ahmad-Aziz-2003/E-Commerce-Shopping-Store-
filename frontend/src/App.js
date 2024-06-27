import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import LoginSignup from './pages/LoginSignup';
import Success from './pages/Success.jsx';
import Cancel from './pages/Cancel';
import Cart from './pages/Cart';
import Footer from './components/Footer/Footer';
import men_banner from './components/Assets/bannermens.png'
import women_banner from './components/Assets/bannerwomens.png'
import kid_banner from './components/Assets/bannerkids.png'
import shoe from './components/Assets/banneroffer.png'
import frag from './components/Assets/1896.jpg'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab);
function App() {
  return (
    <div>
     <BrowserRouter> 
     <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory  banner={men_banner} category="men"/>}/>
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
        <Route path='/foot wear' element={<ShopCategory banner={shoe} category="foot wear"/>}/>
        <Route path='/Fragrence' element={<ShopCategory banner={frag} category="Fragrence"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        <Route path='/Success' element={<Success/>}/>
        <Route path='/Cancel' element={<Cancel/>}/>
      </Routes>

      <div className='backgr'><Footer/> </div>
     </BrowserRouter>
    </div>
    
  );
}

export default App;

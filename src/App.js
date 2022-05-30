import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from "./components/Home"
import Bollywood from './components/Bollywood';
import Hollywood from './components/Hollywood';
import Fitness from './components/Fitness';
import Cricket from './components/Cricket';
import Technology from './components/Technology';
import Api from './APIs/Api';
import './components/Style.css'
import ApiHolly from './APIs/ApiHolly';
import ApiTech from './APIs/ApiTech';
import ApiFit from './APIs/ApiFit';
import ApiHome from './APIs/ApiHome';
import ApiCric from './APIs/Apicric';
import {Link} from 'react-router-dom'
function App() {
  return (
    <ApiCric>
    <ApiHome>
    <ApiFit>
    <ApiTech>
    <ApiHolly>
    <Api>
    <div className="App">
      <BrowserRouter>
      <div className='homePage'>
      <div className="logo">
        <b className="the">THE</b>
        <b className="siren">SIREN</b>
      </div> 
      <div class="navbar navbar-expand-lg bg-white" id='navBar'>
          <div><Link to="/"><button className='btn btn-outline-success'>Home </button></Link></div>
          <div><Link to={'/bollywood'}><button className='btn btn-outline-success'>Bollywood </button></Link></div>
          <div><Link to={'/hollywood'}><button className='btn btn-outline-success'> Hollywood</button></Link></div>
          <div><Link to={'/technology'}><button className='btn btn-outline-success'>Technology </button></Link></div>
          <div><Link to={'/fitness'}><button className='btn btn-outline-success'>Fitness </button></Link></div>
          <div><Link to={'/cricket'}><button className='btn btn-outline-success'>Cricket </button></Link></div>
      </div>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/bollywood" element={<Bollywood/>}/>
        <Route path="/technology" element={<Technology/>}/>
        <Route path='/hollywood' element={<Hollywood/>}/>
        <Route path='/fitness' element={<Fitness/>}/>
        <Route path="/cricket" element={<Cricket/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    </Api>
    </ApiHolly>
    </ApiTech>
    </ApiFit>
    </ApiHome>
    </ApiCric>
  );
}

export default App;
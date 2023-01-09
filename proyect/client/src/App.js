import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Home } from './component/Home/Home';
import { CrearLugar } from '../CrearLugar/CrearLugar';

function App() {
  return (
      <BrowserRouter>  
      <Route exact path={'/'}>
        <Home/>
      </Route>
      <Route exact path={'/CrearLugar'}>
        <CrearLugar/>
      </Route>
    </BrowserRouter>
  );
}

export default App;

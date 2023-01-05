import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Home } from './component/Home/Home';

function App() {
  return (
      <BrowserRouter>  
      <Route exact path={'/'}>
        <Home/>
      </Route>
    </BrowserRouter>
  );
}

export default App;

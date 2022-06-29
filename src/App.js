
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Home } from './pages/home';
import { Cart } from './pages/cart';
import { useState } from 'react';
import { ListProvider } from './providers/products';
import { CartProvider } from './providers/cart';

function App() {

  const [verif,setVerif] = useState(false)
  const [home] = useState(true)

  return (
    <ListProvider>
      <CartProvider>
        <div className="App">
            <Switch>
              <Route exact path={"/"}>
                <Home 
                verif={verif}
                setVerif={setVerif}
                home={home}
                />
              </Route>
              <Route exact path={"/cart"}>
                <Cart
                setVerif={setVerif} 
                />
              </Route>
            </Switch>
        </div>        
      </CartProvider>
    </ListProvider>

  );
}

export default App;

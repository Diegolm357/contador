import React from 'react';
import Navbars from './components/Navbars';

import Inicio from './components/Inicio';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ItemListBlanco from './components/ItemListBlanco';
import ItemList from './components/ItemList';
import ItemListEspumante from './components/ItemListEspumante';
function App() {
  return (
    <>
      <Router>
      <header>
     <Navbars/>
          <Switch>
            <Route path='/' exact component={Inicio} />
            <Route path='/ItemListBlanco' component={ItemListBlanco} />
            <Route path='/ItemList' component={ItemList} />
            <Route path='/ItemListEspumante' component={ItemListEspumante} />

</Switch>
          

          </header> 
        

                
      
     
       </Router>
     
    </>
  );
}

export default App;






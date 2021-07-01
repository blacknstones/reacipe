import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomePage, RecipesPage, DetailPage, FavoritePage } from './pages';
import { NavBar } from './components';
import globalContext from './globalContext';
import './css/main.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState(null);
  const [filters, setFilters] = useState([]);

  return (
    <globalContext.Provider value={{ searchQuery, setSearchQuery, data, setData, filters, setFilters }}>
      <div className='App'>
        <BrowserRouter>
        <NavBar/>
          <Switch>
            <Route exact path='/'>
              <HomePage />
            </Route>
            <Route exact path='/recipes'>
              <RecipesPage />
            </Route>
            <Route exact path='/recipes/:id'>
              <DetailPage />
            </Route>
            <Route exact path='/favorites'>
              <FavoritePage />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </globalContext.Provider>
  );
}

export default App;

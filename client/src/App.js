import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomePage, RecipesPage, DetailPage } from './pages';
import globalContext from './globalContext';
import './css/main.css';

function App() {
  const [queryObj, setQueryObj] = useState({});
  const [data, setData] = useState(null);

  return (
    <globalContext.Provider value={{ queryObj, setQueryObj, data, setData }}>
      <div className='App'>
        <BrowserRouter>
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
          </Switch>
        </BrowserRouter>
      </div>
    </globalContext.Provider>
  );
}

export default App;

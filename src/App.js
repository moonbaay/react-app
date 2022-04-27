import {Route, Switch} from 'react-router-dom'

import AllMeetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites'; 
import NewMeetup from './pages/NewMeetup';
import MainNavigation from './layout/MainNavigation';

function App() {
  return (
    <div className="App">
    <MainNavigation/>
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetup />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

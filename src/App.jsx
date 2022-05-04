import CharacterList from './views/Characters/CharacterList';
import { Route, Switch } from 'react-router-dom';
import CharacterDetails from './views/Characters/CharacterDetails';

export default function App() {
  return (
    <>
      <h1>Welcome to the Ricky and Morty Universe</h1>
      <Switch>
        <Route exact path="/characters/:id">
          <CharacterDetails />
        </Route>
        <Route path="/characters">
          <CharacterList />
        </Route>
      </Switch>
    </>
  );
}

import React from "react";
import Header from "../Header";
import CharacterList from "../CharacterList";
import "./App.css";
import { BrowserRouter,Switch, Route } from "react-router-dom";
import EpisodesList from '../EpisodesList';
import CharacterPage from '../CharacterPage';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path='/Characters'>
          <CharacterList />
          </Route>
          <Route path='/Episodes'>
          <EpisodesList />
          </Route>
          <Route path={`/Character/:id`}>
          <CharacterPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;

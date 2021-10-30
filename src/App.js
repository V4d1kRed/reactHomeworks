import React from 'react';
import {Provider} from "react-redux";
import {store} from "./store";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Competitions from "./pages/Competitions";
import Create from "./pages/Create";
import Participants from "./pages/Participants";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Competitions} exact/>
          <Route path="/create" component={Create}/>
          <Route path="/competition/:competitionId" component={Participants}/>
          <Redirect to="/"/>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import { PermissionContext } from './providers/PermissionProvider';
import { AppHeader } from './AppHeader';
import { ROUTES } from './routes';

function App() {
  const { appRoutes } = React.useContext(PermissionContext);
  const hasRoutesLoaded = appRoutes.length !== 0;

  return (
    <div className="App">
      <AppHeader/>

      { hasRoutesLoaded ? (
        <Switch>
          <Route path="/" exact={true}>
            Welcome Home Stranger!
          </Route>
          { appRoutes.map(route => {
            const RouteComponent = ROUTES[route.name];

            return (
              <Route key={route.name} path={route.slug}>
                <RouteComponent/>
              </Route>
            );
          }) }
        </Switch>
      ) : (
        <img className="App-logo" alt="logo" src={logo}/>
      ) }
    </div>
  );
}

export default App;

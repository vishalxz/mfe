import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';
import Sfe from './components/Sfe';

export default () => {
  return (
    <div>
      <StylesProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/pricing" component={Pricing} />
            <Route exact path="/landing" component={Landing} />
            <Route path="/" component={Sfe} />
           
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
};

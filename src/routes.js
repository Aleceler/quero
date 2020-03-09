import React from 'react';
import {
  Switch, BrowserRouter as Router, Route,
} from 'react-router-dom';

import Views from './views';

const MainRoutes = () => (
        <Router>
            <Switch>
                <Route path="/" component={Views} />
                {/* other routes like auth and / redirect here */}
            </Switch>
      </Router>
);

export default MainRoutes;

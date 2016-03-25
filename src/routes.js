import React from 'react';
import { Route, IndexRoute } from 'react-router';

import MainApp from './components/MainApp';
import HomeComponent from './components/HomeComponent';
import ResumeContainer from './containers/ResumeContainer';

export default (
    <Route path="/cyarie-react" component={MainApp}>
        <IndexRoute component={HomeComponent} />
        <Route path="resume" component={ResumeContainer} />
    </Route>
);
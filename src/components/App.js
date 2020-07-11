import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import withAuth from './auth/withAuth';
import Header from './Header/Header';
import Login from './Header/Login';
import Register from './Header/Register';
import Footer from './Footer/Footer';
import DashBoard from './DashBoard/DashBoard';
import Homepage from './Homepage/Homepage';
import UploadCoursePage from './UploadCourse/UploadCoursePage';
import { connect, connectAdvanced } from 'react-redux';
import NotFound from './404/NotFound';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path='/register' exact component={Register} />
          <Route path='/login' exact component={Login} />
          <Route exact path='/dashboard' component={withAuth(DashBoard)} />
          <Route path='/course/upload' exact component={UploadCoursePage} />
          <Route path='*' component={NotFound} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(App);

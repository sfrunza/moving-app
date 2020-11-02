import React, {
  lazy,
  Suspense,
  Component
} from 'react';
import axios from 'axios'
import {
  Switch,
  Redirect,
  Route
} from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import CustomerLayout from 'src/layouts/CustomerLayout';
import General from 'src/views/customerView/General';
import Security from 'src/views/customerView/Security';
import MainLayout from 'src/layouts/MainLayout';
import CalendarLayout from 'src/layouts/CalendarLayout'
import LoadingScreen from 'src/components/LoadingScreen';
import SignInPage from 'src/registrations/SignInPage'
import WorkView from 'src/views/pages/WorkView'
import PrivateRoute from 'src/registrations/PrivateRoute';
import RouteWithLayout from './common/RouteWithLayout';
import JobDetailsView from 'src/views/customerView/JobDetailsView'

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: null,
      user: {},
     };
  }
    UNSAFE_componentWillMount() {
      this.loginStatus();
    }

    loginStatus = () => {
        axios.get('/api/v1/users', {withCredentials: true})
        .then(response => {
          if (response.data.logged_in) {
            this.handleLogin(response.data.current_user)
          } else {
            this.handleLogout()
          }
        })
        .catch(error => console.log('api errors:', error))
      }

    handleLogin = (data) => {
        this.setState({
          user: data,
          isLoggedIn: true
        })
      }
    handleLogout = () => {
        this.setState({
        isLoggedIn: false,
        user: {}
        })
      }

    handleUserUpdate = (user, id) => {
      fetch(`/api/v1/users/${id}`,
      {
        method: 'PUT',
        body: JSON.stringify({user: user}),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        this.setState(formState => ({
          ...formState,
            user: user
        }))
        })
    }

    handlePasswordChange = (user, id) => {
      fetch(`/users/password/${id}`,
      {
        method: 'PUT',
        body: JSON.stringify({user: user}),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }

  render() {
    if (this.state.isLoggedIn === null || !this.state.user) {
        return (
          <Suspense fallback={<LoadingScreen />} />
        );
      }

    const LoginRoute = ({ loggedInStatus }) => (
      <Route
        exact path='/login'
        render={(props) => (
        <SignInPage history={props.history} handleLogin={this.handleLogin} loginStatus={this.loginStatus}/>
        )}
      />
    );

    return (
      <Suspense fallback={<LoadingScreen />}>
        <Switch>
          <Route
            exact
            path="/404"
            component={lazy(() => import('src/views/pages/Error404View'))}
          />


          <PrivateRoute
            path="/calendar"
            component={(props) => (
              <CalendarLayout {...props} handleLogout={this.handleLogout} loggedInStatus={this.state.isLoggedIn} user={this.state.user} history={props.history}>
                <Suspense fallback={<LoadingScreen />}>
                  <Switch>
                    <Route
                      exact
                      path="/calendar"
                      component={lazy(() => import('src/views/userCalendar/CalendarView'))}
                    />
                    <Route
                      exact
                      path="/calendar/:jobId"
                      component={lazy(() => import('src/views/userCalendar/JobDetailsView'))}
                    />
                    <Redirect to="/404" />
                  </Switch>
                </Suspense>
              </CalendarLayout>
            )}
            loggedInStatus={this.state.isLoggedIn}
          />

          <PrivateRoute
            path="/app"
            component={(props) => (
              <DashboardLayout {...props} handleLogout={this.handleLogout} loggedInStatus={this.state.isLoggedIn} user={this.state.user}>
                <Suspense fallback={<LoadingScreen />}>
                  <Switch>
                    <Redirect
                      exact
                      from="/app"
                      to="/app/reports/dashboard-alternative"
                    />
                    <Route
                      exact
                      path="/app/account"
                      component={lazy(() => import('src/views/pages/AccountView'))}
                    />
                    <Route
                      exact
                      path="/app/all-calendar"
                      component={lazy(() => import('src/views/userCalendar/CalendarView'))}
                    />
                    <Route
                      exact
                      path="/app/reports/dashboard"
                      component={lazy(() => import('src/views/reports/DashboardView'))}
                    />
                    <Route
                      exact
                      path="/app/reports/dashboard-alternative"
                      component={lazy(() => import('src/views/reports/DashboardAlternativeView'))}
                    />
                    <Redirect
                      exact
                      from="app/reports"
                      to="/app/reports/dashboard"
                    />
                    <Route
                      exact
                      path="/app/customers"
                      component={lazy(() => import('src/views/management/CustomerListView'))}
                    />
                    <Route
                      exact
                      path="/app/customers/:id"
                      component={lazy(() => import('src/views/management/CustomerDetailsView'))}
                    />
                    <Route
                      exact
                      path="/app/customers/:id/edit"
                      component={lazy(() => import('src/views/management/CustomerEditView'))}
                    />
                    <Route
                      exact
                      path="/app/jobs"
                      component={lazy(() => import('src/views/management/JobListView'))}
                    />
                    <Route
                      exact
                      path="/app/images"
                      component={lazy(() => import('src/views/management/ImagesListView'))}
                    />
                    <Route
                      exact
                      path="/app/jobs/:id"
                      component={lazy(() => import('src/views/management/JobDetailsView'))}
                    />
                    <Route
                      exact
                      path="/app/employees"
                      component={lazy(() => import('src/views/management/EmployeeListView'))}
                    />
                    <Route
                      exact
                      path="/app/employees/:id"
                      component={lazy(() => import('src/views/management/EmployeeDetailsView'))}
                    />

                    <Route
                      exact
                      path="/app/calendar"
                      component={lazy(() => import('src/views/calendar/CalendarView'))}
                    />
                    <Redirect to="/404" />
                  </Switch>
                </Suspense>
              </DashboardLayout>
            )}
            loggedInStatus={this.state.isLoggedIn}
          />


          <PrivateRoute
            path="/account"
            component={(props) => (
              <CustomerLayout {...props} handleLogout={this.handleLogout} user={this.state.user} history={props.history}>
                <Suspense fallback={<LoadingScreen />}>
                  <Switch>
                    <Route
                      exact
                      path="/account/jobs/:id"
                      render={props => (
                        <JobDetailsView user={this.state.user} history={props.history} match={props.match}/>
                      )}
                    />
                    <Route
                      exact
                      path="/account/edit"
                      render={props => (
                        <General user={this.state.user} handleUserUpdate={this.handleUserUpdate}/>
                      )}
                    />
                    <Route
                      exact
                      path="/account/password/change"
                      render={props => (
                        <Security user={this.state.user} handlePasswordChange={this.handlePasswordChange} />
                      )}
                    />
                    <Route
                      exact
                      path="/account/bill"
                      component={lazy(() => import('src/views/customerView/BillOfLading'))}
                    />



                  </Switch>
                </Suspense>
              </CustomerLayout>
            )}
            loggedInStatus={this.state.isLoggedIn}
          />


          <Route
            path="/"
            render={(props) => (
              <MainLayout {...props} handleLogout={this.handleLogout} loggedInStatus={this.state.isLoggedIn} user={this.state.user}>
                  <Switch>

                    <Route
                      exact
                      path="/"
                      component={lazy(() => import('src/views/pages/HomeView'))}
                    />
                    <Route
                      exact
                      path="/pricing"
                      component={lazy(() => import('src/views/pages/PricingView'))}
                    />
                    <Route
                      exact
                      path="/services"
                      component={lazy(() => import('src/views/pages/ServicesView'))}
                    />
                    <Route
                      exact
                      path="/book"
                      component={lazy(() => import('src/views/pages/BookView/BookNew'))}
                    />
                    <Route
                      exact
                      path='/work'
                      component={lazy(() => import('src/views/pages/WorkView'))}
                    />
                    <Route
                      exact
                      path="/privacy"
                      component={lazy(() => import('src/views/pages/PrivacyView'))}
                    />
                    <Route
                      exact
                      path="/terms"
                      component={lazy(() => import('src/views/pages/TermsView'))}
                    />
                    {
                      !this.state.isLoggedIn ?
                      <Route
                        exact path='/login'
                        render={props => (
                          <LoginRoute loggedInStatus={this.state.isLoggedIn}/>
                        )}
                      />
                      : (<Redirect to="/" />)
                    }
                    <Redirect to="/404" />
                  </Switch>
              </MainLayout>
            )}
          />

          <Redirect to="/404" />

        </Switch>
      </Suspense>
    );
  }
}

export default Routes;

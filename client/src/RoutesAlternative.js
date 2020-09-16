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
import MainLayout from 'src/layouts/MainLayout';
import CalendarLayout from 'src/layouts/CalendarLayout'
import LoadingScreen from 'src/components/LoadingScreen';
import LoginView from 'src/views/auth/LoginView'
import WorkView from 'src/views/pages/WorkView'
import Signup from 'src/registrations/Signup'
import PrivateRoute from 'src/registrations/PrivateRoute';
import RouteWithLayout from './common/RouteWithLayout';

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: null,
      user: {},
      images: {}
     };
  }
    UNSAFE_componentWillMount() {
      this.getImages()
      this.loginStatus()
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

    getImages = () => {
        axios.get('/api/v1/images.json')
        .then(response => {
          this.setState({images: response.data})
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

  render() {

    if (this.state.isLoggedIn === null) {
        return (
          <Suspense fallback={<LoadingScreen />} />
        );
      }

    const LoginRoute = ({ loggedInStatus }) => (
      <Route
        exact path='/login'
        render={(props) => (
        <LoginView history={props.history} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
        )}
        loggedInStatus={this.state.isLoggedIn}
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
          <Route
            exact path='/login'
            render={props => (
              <LoginRoute loggedInStatus={this.state.isLoggedIn}/>
            )}
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
                      to="/app/reports/dashboard"
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
                      path="/app/management/customers"
                      component={lazy(() => import('src/views/management/CustomerListView'))}
                    />
                    <Route
                      exact
                      path="/app/management/customers/:id"
                      component={lazy(() => import('src/views/management/CustomerDetailsView'))}
                    />
                    <Route
                      exact
                      path="/app/management/customers/:id/edit"
                      component={lazy(() => import('src/views/management/CustomerEditView'))}
                    />
                    <Route
                      exact
                      path="/app/management/jobs"
                      component={lazy(() => import('src/views/management/JobListView'))}
                    />
                    <Route
                      exact
                      path="/app/management/images"
                      component={lazy(() => import('src/views/management/ImagesListView'))}
                    />
                    <Route
                      exact
                      path="/app/management/jobs/:jobId"
                      component={lazy(() => import('src/views/management/JobDetailsView'))}
                    />
                    <Route
                      exact
                      path="/app/management/orders"
                      component={lazy(() => import('src/views/management/OrderListView'))}
                    />
                    <Route
                      exact
                      path="/app/management/orders/:id"
                      component={lazy(() => import('src/views/management/OrderDetailsView'))}
                    />
                    <Route
                      exact
                      path="/app/management/invoices"
                      component={lazy(() => import('src/views/management/InvoiceListView'))}
                    />
                    <Route
                      exact
                      path="/app/management/invoices/:id"
                      component={lazy(() => import('src/views/management/InvoiceDetailsView'))}
                    />
                    <Route
                      exact
                      path="/app/calendar"
                      component={lazy(() => import('src/views/calendar/CalendarView'))}
                    />
                    <Route
                      exact
                      path="/app/rates"
                      component={lazy(() => import('src/views/management/RatesView'))}
                    />
                    <Route
                      exact
                      path="/app/kanban"
                      component={lazy(() => import('src/views/kanban/KanbanView'))}
                    />
                    <Route
                      path={[
                        '/app/chat/new',
                        '/app/chat/:threadKey'
                      ]}
                      component={lazy(() => import('src/views/chat/ChatView'))}
                    />
                    <Route
                      path={[
                        '/app/mail/label/:customLabel/:mailId?',
                        '/app/mail/:systemLabel/:mailId?'
                      ]}
                      component={lazy(() => import('src/views/mail/MailView'))}
                    />
                    <Route
                      exact
                      path="/app/projects/overview"
                      component={lazy(() => import('src/views/projects/OverviewView'))}
                    />
                    <Route
                      exact
                      path="/app/projects/browse"
                      component={lazy(() => import('src/views/projects/ProjectBrowseView'))}
                    />
                    <Route
                      exact
                      path="/app/projects/:id"
                      component={lazy(() => import('src/views/projects/ProjectDetailsView'))}
                    />
                    <Route
                      exact
                      path="/app/social/feed"
                      component={lazy(() => import('src/views/social/FeedView'))}
                    />
                    <Route
                      exact
                      path="/app/social/profile"
                      component={lazy(() => import('src/views/social/ProfileView'))}
                    />
                    <Route
                      exact
                      path="/app/extra/charts/apex"
                      component={lazy(() => import('src/views/extra/charts/ApexChartsView'))}
                    />
                    <Route
                      exact
                      path="/app/extra/forms/formik"
                      component={lazy(() => import('src/views/extra/forms/FormikView'))}
                    />
                    <Route
                      exact
                      path="/app/extra/forms/redux"
                      component={lazy(() => import('src/views/extra/forms/ReduxFormView'))}
                    />
                    <Route
                      exact
                      path="/app/extra/editors/draft-js"
                      component={lazy(() => import('src/views/extra/editors/DraftEditorView'))}
                    />
                    <Route
                      exact
                      path="/app/extra/editors/quill"
                      component={lazy(() => import('src/views/extra/editors/QuillEditorView'))}
                    />
                    <Redirect to="/404" />
                  </Switch>
                </Suspense>
              </DashboardLayout>
            )}
            loggedInStatus={this.state.isLoggedIn}
          />

          <Route
            path="/"
            render={(props) => (
              <MainLayout {...props} images={this.state.images}>
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
                      exact path='/work'
                      render={props => ( this.state.images[0] == null ? <LoadingScreen /> : <WorkView images={this.state.images}/>
                      )}
                    />
                    <Route
                      exact
                      path="/client-login"
                      component={lazy(() => import('src/views/pages/ClientLogin'))}
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

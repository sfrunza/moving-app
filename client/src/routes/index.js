import React, { Suspense, lazy } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import MainLayout from "src/layouts/MainLayout";
// import Home from "src/pages/Home";
// import About from "src/pages/About";
// import Login from "src/pages/Login";
// import Private from "src/pages/Private";
// import Contact from "src/pages/Contact";
import { connect } from "react-redux";
import PrivateRoute from "./PrivateRoute";
import ScrollReset from "src/components/ScrollReset";
import DashboardLayout from "src/layouts/DashboardLayout";
import Home from "src/pages/Home";
import Services from "src/pages/Services";
import Work from "src/pages/Work";
import Book from "src/pages/Book";
import Login from "src/pages/Login";
import Pricing from "src/pages/Pricing";
// import JobDetailsView from "src/managementPages/JobDetailsView";

// const Home = lazy(() => import("src/pages/Home"));
// const Services = lazy(() => import("src/pages/Services"));
const Private = lazy(() => import("src/pages/Private"));
// const Work = lazy(() => import("src/pages/Work"));
// const Login = lazy(() => import("src/pages/Login"));
// const Book = lazy(() => import("src/pages/Book"));
const CustomerList = lazy(() => import("src/managementPages/CustomerList"));
const CustomerView = lazy(() => import("src/managementPages/CustomerView"));
const EmployeeList = lazy(() => import("src/managementPages/EmployeeList"));
// const CustomerView = lazy(() => import("src/managementPages/CustomerView"));
const CalendarView = lazy(() => import("src/managementPages/CalendarView"));
const UserView = lazy(() => import("src/managementPages/UserView"));
const JobList = lazy(() => import("src/managementPages/JobList"));
const JobDetailsView = lazy(() => import("src/managementPages/JobDetailsView"));
const RatesView = lazy(() => import("src/managementPages/RatesView"));

function Routes(props) {
  let location = useLocation();
  // console.log(props);
  return (
    <ScrollReset>
      <Switch>
        <PrivateRoute
          path="/dashboard"
          component={(props) => (
            <DashboardLayout {...props}>
              <Suspense fallback="">
                <Switch location={location}>
                  <Redirect exact from="/dashboard" to="/dashboard/calendar" />
                  <Route exact path="/dashboard" component={Private} />
                  <Route exact path="/dashboard/finance" component={Private} />
                  <Route
                    exact
                    path="/dashboard/customers"
                    component={CustomerList}
                  />
                  <Route
                    exact
                    path="/dashboard/employees"
                    component={EmployeeList}
                  />
                  <Route
                    exact
                    path="/dashboard/customers/:id"
                    component={CustomerView}
                  />
                  <Route
                    exact
                    path="/dashboard/analytics"
                    component={Private}
                  />
                  <Route
                    exact
                    path="/dashboard/calendar"
                    component={CalendarView}
                  />
                  <Route exact path="/dashboard/jobs" component={JobList} />
                  <Route
                    exact
                    path="/dashboard/jobs/:id"
                    component={JobDetailsView}
                  />
                  <Route exact path="/dashboard/rates" component={RatesView} />
                  <Route
                    exact
                    path="/dashboard/users/:id"
                    component={UserView}
                  />
                </Switch>
              </Suspense>
            </DashboardLayout>
          )}
        />
        <Route
          path="/"
          render={(props) => (
            <MainLayout {...props}>
              <Switch location={location}>
                {/* <Redirect exact from="/services" to="/services" /> */}
                <Route exact path="/" component={Home} />
                <Route exact path="/services" component={Services} />
                <Route exact path="/services/:name" component={Services} />
                <Route exact path="/pricing" component={Pricing} />
                <Route exact path="/work" component={Work} />
                <Route exact path="/book" component={Book} />
                <Route exact path="/login" component={Login} />
              </Switch>
            </MainLayout>
          )}
        />
      </Switch>
    </ScrollReset>
  );
}

const mapStateToProps = (state) => {
  return state.auth;
};

export default connect(mapStateToProps)(Routes);

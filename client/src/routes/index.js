import React, { Suspense, lazy } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
// import MainLayout from "src/layouts/MainLayout";
// import Home from "src/pages/Home";
// import About from "src/pages/About";
// import Login from "src/pages/Login";
// import Private from "src/pages/Private";
// import Contact from "src/pages/Contact";
import { connect } from "react-redux";
import PrivateRoute from "./PrivateRoute";
import ScrollReset from "src/components/ScrollReset";
import LoadingTable from "src/components/LoadingTable";
// import DashboardLayout from "src/layouts/DashboardLayout";
// import CustomerJobDetailsView from "src/customerPages/JobDetailsView";
import Home from "src/pages/Home";
import Services from "src/pages/Services";
import Work from "src/pages/Work";
import Book from "src/pages/Book";
import Login from "src/pages/Login";
import Pricing from "src/pages/Pricing";
import AnalyticsOverview from "src/managementPages/AnalyticsOverview";
// import CustomerLayout from "src/layouts/CustomerLayout";
// import Main from "src/customerPages/Main";

const DashboardLayout = lazy(() => import("src/layouts/DashboardLayout"));
const MainLayout = lazy(() => import("src/layouts/MainLayout"));

// const Home = lazy(() => import("src/pages/Home"));
const NotFound = lazy(() => import("src/pages/NotFound"));
// const Services = lazy(() => import("src/pages/Services"));
// const Work = lazy(() => import("src/pages/Work"));
// const Book = lazy(() => import("src/pages/Book"));
// const Login = lazy(() => import("src/pages/Login"));
// const Pricing = lazy(() => import("src/pages/Pricing"));

const Private = lazy(() => import("src/pages/Private"));
const CustomerList = lazy(() => import("src/managementPages/CustomerList"));
const CustomerView = lazy(() => import("src/managementPages/CustomerView"));
const EmployeeList = lazy(() => import("src/managementPages/EmployeeList"));
const CalendarView = lazy(() => import("src/managementPages/CalendarView"));
const UserView = lazy(() => import("src/managementPages/UserView"));
const JobList = lazy(() => import("src/managementPages/JobList"));
const JobDetailsView = lazy(() => import("src/managementPages/JobDetailsView"));
const RatesView = lazy(() => import("src/managementPages/RatesView"));
// const CustomerJobDetailsView = lazy(() =>
//   import("src/customerPages/JobDetailsView")
// );

function Routes(props) {
  let location = useLocation();
  // console.log(props);
  return (
    <ScrollReset>
      <Suspense fallback={<LoadingTable />}>
        <Switch>
          <PrivateRoute
            path="/dashboard"
            component={(props) => (
              <DashboardLayout {...props}>
                <Suspense fallback={<LoadingTable />}>
                  <Switch location={location}>
                    <Redirect
                      exact
                      from="/dashboard"
                      to="/dashboard/calendar"
                    />
                    <Route exact path="/dashboard" component={Private} />
                    <Route
                      exact
                      path="/dashboard/analytics"
                      component={AnalyticsOverview}
                    />
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
                    <Route
                      exact
                      path="/dashboard/rates"
                      component={RatesView}
                    />
                    <Route
                      exact
                      path="/dashboard/users/:id"
                      component={UserView}
                    />
                    {/* <Route path="/not-found" component={NotFound} />
                    <Redirect to="/not-found" /> */}
                  </Switch>
                </Suspense>
              </DashboardLayout>
            )}
          />
          {/* <Route
            path="/account"
            component={(props) => (
              <CustomerLayout {...props}>
                <div>
                  <Switch>
                    <Route exact path="/account" component={Main} />
                    <Route
                      exact
                      path="/account/requests/:id"
                      component={CustomerJobDetailsView}
                    />
                    <Route exact path="/account/edit" component={General} />
                    <Route
                      exact
                      path="/account/password/change"
                      component={Security}
                    />
                    <Route
                      exact
                      path="/account/bill-of-lading"
                      component={BillOfLading}
                    />
                  </Switch>
                </div>
              </CustomerLayout>
            )}
          /> */}
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
                  {/* <Route path="/not-found" component={NotFound} />
                  <Redirect to="/not-found" /> */}
                </Switch>
              </MainLayout>
            )}
          />
        </Switch>
      </Suspense>
    </ScrollReset>
  );
}

const mapStateToProps = (state) => {
  return state.auth;
};

export default connect(mapStateToProps)(Routes);

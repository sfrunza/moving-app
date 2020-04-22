/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';
import AuthLayout from './layouts/Auth';
import ErrorLayout from './layouts/Error';
import DashboardLayout from './layouts/Dashboard';

import DashboardDefaultView from './views/DashboardDefault';


export default [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/admin/dashboard" />
  },
  {
    route: '*',
    component: DashboardLayout,
    routes: [
      {
        path: '/admin/calendar',
        exact: true,
        component: lazy(() => import('src/views/Calendar'))
      },
      {
        path: '/admin/customers',
        exact: true,
        component: lazy(() => import('src/views/Customers'))
      },
      {
        path: '/admin/customers/:id',
        exact: true,
        component: lazy(() => import('src/views/CustomerDetails'))
      },
      {
        path: '/admin/customers/:id/:tab',
        exact: true,
        component: lazy(() => import('src/views/CustomerDetails'))
      },
      {
        path: '/admin/employees',
        exact: true,
        component: lazy(() => import('src/views/Employees/EmployeesIndexContainer'))
      },
      {
        path: '/admin/employees/:id',
        exact: true,
        component: lazy(() => import('src/views/EmployeeDetails/CustomerShowContainer'))
      },

      {
        path: '/admin/dashboard',
        exact: true,
        component: lazy(() => import('src/views/DashboardDefault'))
      },
      {
        path: '/admin/jobs',
        exact: true,
        component: lazy(() => import('src/views/Jobs'))
      },
      {
        path: '/admin/jobs/:id',
        exact: true,
        component: lazy(() => import('src/views/JobDetails'))
      },
      {
        path: '/admin/new_job',
        exact: true,
        component: lazy(() => import('src/views/JobCreate'))
      },
      {
        path: '/admin/rates',
        exact: true,
        component: lazy(() => import('src/views/Rates/index'))
      }
    ]
  }
];

/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React from 'react';
import { colors } from '@material-ui/core';
import BarChartIcon from '@material-ui/icons/BarChart';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ChatIcon from '@material-ui/icons/ChatOutlined';
import CodeIcon from '@material-ui/icons/Code';
import DashboardIcon from '@material-ui/icons/DashboardOutlined';
import ErrorIcon from '@material-ui/icons/ErrorOutline';
import FolderIcon from '@material-ui/icons/FolderOutlined';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import ListAltIcon from '@material-ui/icons/ListAlt';
import LockOpenIcon from '@material-ui/icons/LockOpenOutlined';
import MailIcon from '@material-ui/icons/MailOutlined';
import PresentToAllIcon from '@material-ui/icons/PresentToAll';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';
import PersonIcon from '@material-ui/icons/PersonOutlined';
import ReceiptIcon from '@material-ui/icons/ReceiptOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import ViewConfigIcon from '@material-ui/icons/ViewComfy';
import ListIcon from '@material-ui/icons/List';
import Label from 'src/components/Label';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

export default [
  {
    subheader: 'Pages',
    items: [
      {
        title: 'Dashboard',
        href: '/admin/dashboard',
        icon: DashboardIcon
      },
      {
        title: 'Calendar',
        href: '/admin/calendar',
        icon: CalendarTodayIcon,
        label: () => <Label color={colors.green[500]}>New</Label>
      },
      {
        title: 'Jobs',
        href: '/admin/jobs',
        icon: FolderIcon
      },
      {
        title: 'Customers',
        href: '/admin/customers',
        icon: PeopleIcon
      },
      {
        title: 'Employees',
        href: '/admin/employees',
        icon: PersonIcon
      },
      {
        title: 'Create Job',
        href: '/admin/new_job',
        icon: FolderIcon
      },
      {
        title: 'Rates',
        href: '/admin/rates',
        icon: AttachMoneyIcon
      }
    ]
  }
];

import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import Transaction from "views/admin/marketplace";
import AdminTransaction from "views/admin/transactionadmin";
import Profile from "views/admin/profile";
import EventManagement from "views/admin/event";
import RoleManagement from "views/admin/role";
import RTLDefault from "views/rtl/default";
import EventDetail from 'views/admin/event/components/EventDetail';
import ComplexTable from 'views/admin/event/components/ComplexTable';

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
  MdSupervisedUserCircle,
  MdCurrencyExchange,
} from "react-icons/md";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
    sidebar: true,
  },
  {
    name: "Transaction",
    layout: "/admin",
    path: "transaction",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <Transaction />,
    secondary: true,
    sidebar: true,
  },
  {
    name: "Admin Transaction",
    layout: "/admin",
    path: "admin-transaction",
    icon: <MdCurrencyExchange className="h-6 w-6" />,
    component: <AdminTransaction />,
    secondary: true,
    sidebar: true,
  },
  {
    name: "Event Management",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "event-management",
    component: <EventManagement />,
    sidebar: true,
  },
  {
    name: "Role Management",
    layout: "/admin",
    icon: <MdSupervisedUserCircle className="h-6 w-6" />,
    path: "role-management",
    component: <RoleManagement />,
    sidebar: true,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
    sidebar: true,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
    sidebar: true,
  },
  {
    path: "event-management/event/:id",
    layout: "/admin",
    name: "Event Detail",
    component: <EventDetail />,
    sidebar: false,
  },
  {
    path: "event",
    layout: "/admin",
    name: "Event List",
    component: <ComplexTable />,
    sidebar: false

  },
  // ...
  // {
  //   name: "RTL Admin",
  //   layout: "/rtl",
  //   path: "rtl",
  //   icon: <MdHome className="h-6 w-6" />,
  //   component: <RTLDefault />,
  // },
];
export default routes;

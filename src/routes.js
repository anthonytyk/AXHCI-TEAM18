/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.jsx";
import Icons from "views/Icons.jsx";
import Intake from "views/Intake.jsx";
import UserPage from "views/User.jsx";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-sound-wave",
    component: Intake,
    layout: "/admin"
  },
  {
    path: "/map",
    name: "InfoMap",
    icon: "nc-icon nc-world-2",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/user-page",
    name: "Profile",  
    icon: "nc-icon nc-single-02",
    component: UserPage,
    layout: "/admin"
  }

];
export default routes;

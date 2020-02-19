import React from "react";
import { Route, Switch, Router } from "react-router-dom";
import history from "./history";

import { AuthRoute, ProtectRoute } from "../util/route_util";

import NavBar from "./nav_bar/nav_bar_container";
import { library } from "@fortawesome/fontawesome-svg-core";
import { 
  faBookmark, 
  faCommentAlt,
  faUser, 
  faCalendar, 
  faMoneyBillAlt, 
  faBuilding, 
  faClock, 
  faCreditCard,
  faCalendarTimes,
  faCalendarCheck,
} from "@fortawesome/free-regular-svg-icons";
import {
  faCalendarAlt,
  faMapMarkerAlt,
  faAngleDown,
  faBars,
  faHamburger,
  faUtensils,
  faSignLanguage,
  faTshirt,
  faSubway,
  faExternalLinkAlt,
  faPhoneAlt,
  
  
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faCalendarAlt, 
  faAngleDown, 
  faMapMarkerAlt, 
  faBars, 
  faHamburger, 
  faBookmark, 
  faCommentAlt, 
  faUtensils, 
  faMoneyBillAlt,
  faBuilding,
  faClock,
  faSignLanguage,
  faTshirt,
  faSubway,
  faCreditCard,
  faExternalLinkAlt,
  faPhoneAlt,
  faCalendar,
  faUser,
  faCalendarCheck,
  faCalendarTimes
);
import { SignInPageContainer } from "./session_forms/login_form_container";
import { SignUpPageContainer } from "./session_forms/signup_form_container";
import RestaurantsIndexContainer from "./restaurants/restaurants_index_container";
import RestaurantShowContainer from "./restaurants/restaurant-show-container";
import CreateReservationContainer from "./reservations/create_reservation_container";
import ShowReservationContainer from "./reservations/show_reservation_container";



// resservation_c

const App = () => (
  <div id="doc">
    <header>
      <NavBar />
    </header>
    {/* <Switch> */}
      <AuthRoute path="/login" component={SignInPageContainer} />
      <AuthRoute path="/signup" component={SignUpPageContainer} />
      <Route
        exact
        path="/restaurants/:restaurantId"
        component={RestaurantShowContainer}
      />
      <ProtectRoute
        exact path="/reservations/create/new"
        component={CreateReservationContainer}
      />

      <ProtectRoute
        exact path="/reservations/:reservationId"
        component={ShowReservationContainer}
      />
      <Route exact path="/restaurants" component={RestaurantsIndexContainer} />
    {/* </Switch> */}
    {/* <LoginFormContainer /> */}
    {/* <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} /> */}
    {/* <footer id="footer">
        <p>Mahmud Ahmed</p>
      
      </footer> */}
  </div>
);

export default App;

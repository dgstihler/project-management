import angular from "angular";

import homeView from "./home/home.component";
import profileView from "./profile/profile.component";
import calendarView from "./calendar/calendar.component";
import settingsView from "./settings/settings.component";
import contactView from "./contact/contact.component";
import loginView from "./login/login.component";

export default angular
  .module("views", [])
  .component("homeView", homeView)
  .component("profileView", profileView)
  .component("calendarView", calendarView)
  .component("settingsView", settingsView)
  .component("contactView", contactView)
  .component("loginView", loginView)
  ;

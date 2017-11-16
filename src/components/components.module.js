import angular from "angular";

import sidebarComponent from "./sidebar/sidebar.component";
import toggleComponent from "./toggle/toggle.component";
import checkboxComponent from "./checkbox/checkbox.component";


export default angular
  .module("components", [])
  .component("sidebarComponent", sidebarComponent)
  .component("toggleComponent", toggleComponent)
  .component("checkboxComponent", checkboxComponent)
  ;

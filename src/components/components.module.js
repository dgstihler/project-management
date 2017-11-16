import angular from "angular";

import toggleComponent from "./toggle/toggle.component";
import checkboxComponent from "./checkbox/checkbox.component";

export default angular
  .module("components", [])
  .component("toggleComponent", toggleComponent)
  .component("checkboxComponent", checkboxComponent)
  ;

import angular from "angular";

import toggleComponent from "./toggle/toggle.component";

export default angular
  .module("components", [])
  .component("toggleComponent", toggleComponent)
  ;

import uiRouter from "@uirouter/angularjs";
import angular from "angular";
import routes from "./routes";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// components
import components from "./components/components.module";

// views
import views from "./views/views.module";

// scss
import "./index.scss";

angular
  .module("app", [
    "ui.router",
    components.name,
    views.name
  ])
  .config(routes)
  ;

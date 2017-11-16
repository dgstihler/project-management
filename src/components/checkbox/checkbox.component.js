import template from "./checkbox.html";
import "./checkbox.scss";

export default {
  template,
  controller,
  bindings: {
    label: "@",
    checked: "="
  }
};

function controller() {
  const $ctrl = this;
}
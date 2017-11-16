export default routes;

/** @ngInject */
function routes($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider.state("/", {
    url: "/",
    component: "loginView"
  })
    .state("profile", {
      url: "/profile",
      component: "profileView"
    })
    .state("contact", {
      url: "/contact",
      component: "contactView"
    })
    .state("settings", {
      url: "/settings",
      component: "settingsView"
    })
    .state("calendar", {
      url: "/calendar",
      component: "calendarView"
    });
}

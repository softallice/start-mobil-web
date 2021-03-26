import { LocalStorage, Notify } from "quasar";

export default async ({ router, store }) => {
  router.beforeEach((to, from, next) => {
    // console.log('to.meta.requiresAuth', to.meta.requiresAuth)
    // console.log('state.loggedIn', store.state.auth.loggedIn)
    if (to.meta.requiresAuth) {
      if (store.state.auth.loggedIn) {
        if ( to.path === "/" || to.path === "/login" ) {
          next("/home");
        } else {
          next()
        }
      } else {
        if (to.path !== "/login") {
          next("/login");
        } else {
          next();
        }
      }
    } else {
      next();
    }
  });
};

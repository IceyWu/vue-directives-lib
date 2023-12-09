import { createApp } from "vue";
import App from "./App.vue";
// import vueDirectives  from "../../packages";
import vueDirectives from "vue-directives-lib";

const app = createApp(App);
app.use(vueDirectives);
app.mount("#app");

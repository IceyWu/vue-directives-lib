import * as directives from "./directives";
import { type Directive } from "vue";

export * from "./directives";
export * from "./types";

export default {
  install(app) {
    Object.keys(directives).forEach(key => {
      app.directive(key, (directives as { [key: string]: Directive })[key]);
    });
  }
};

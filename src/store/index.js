import { createStore } from "vuex";
import visibility from "./modules/visibility";
import tab from "./modules/tab";
export default createStore({
  modules: {
    visibility,
    tab,
  },
});

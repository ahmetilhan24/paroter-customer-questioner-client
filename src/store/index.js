import { createStore } from "vuex";
import visibility from "./modules/visibility";
import tab from "./modules/tab";
import modals from "./modules/modals";
export default createStore({
  modules: {
    visibility,
    tab,
    modals,
  },
});

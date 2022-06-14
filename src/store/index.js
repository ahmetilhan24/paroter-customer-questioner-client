import { createStore } from "vuex";
import visibility from "./modules/visibility";
export default createStore({
  modules: {
    visibility,
  },
});

import { mount } from "@vue/test-utils";
import { createStore } from "vuex";
import AppFooter from "../../src/layouts/partials/AppFooter.vue";
import {
  HOME_TAB_NAME,
  FEEDBACK_TAB_NAME,
} from "../../src/constants/tab.constants";

describe("AppFooter", () => {
  const store = createStore({
    state: {
      isActiveTab: FEEDBACK_TAB_NAME,
    },
    mutations: {
      setActiveTab(state, payload) {
        state.isActiveTab = payload;
      },
    },
  });
  const wrapper = mount(AppFooter, {
    global: {
      plugins: [store],
    },
  });
  it("p element test", () => {
    expect(wrapper.find(".app-footer").exists()).toBe(true);
  });
  it("store mutation test", () => {
    wrapper.find(".app-footer__back-text").trigger("click");
    expect(store.state.isActiveTab).toBe(HOME_TAB_NAME);
  });
});

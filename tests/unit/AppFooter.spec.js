import { mount } from "@vue/test-utils";
import { createStore } from "vuex";
import AppFooter from "../../src/layouts/partials/AppFooter.vue";

describe("AppFooter", () => {
  const store = createStore({
    state: {
      isActiveTab: "feedback",
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
    expect(store.state.isActiveTab).toBe("home");
  });
});

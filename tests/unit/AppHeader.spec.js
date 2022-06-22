import { mount } from "@vue/test-utils";
import { createStore } from "vuex";
import AppHeader from "../../src/layouts/partials/AppHeader.vue";

describe("AppHeader.vue", () => {
  const store = createStore({
    state: {
      isPopupVisible: true,
    },
    mutations: {
      setPopupVisible(state, payload) {
        state.isPopupVisible = payload;
      },
    },
  });
  const wrapper = mount(AppHeader, {
    global: {
      plugins: [store],
    },
  });
  it("header img test", () => {
    expect(wrapper.find(".app-header__left > img").exists()).toBe(true);
  });
  it("button test", () => {
    expect(wrapper.find(".app-header__right > button").exists()).toBe(true);
  });
  it("store commit test", async () => {
    await wrapper.find(".close-btn").trigger("click");
    expect(store.state.isPopupVisible).toBeFalsy();
  });
});

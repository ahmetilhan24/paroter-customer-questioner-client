import { mount } from "@vue/test-utils";
import { createStore } from "vuex";
import AppLoader from "../../src/components/AppLoader.vue";
describe("AppLoader.vue", () => {
  const store = createStore({
    modules: {
      modals: {
        state() {
          return {
            isLoaderVisible: true,
          };
        },
      },
    },
  });
  const wrapper = mount(AppLoader, {
    data() {
      return {
        isLoaderVisible: () => store.modals.state.isLoaderVisible,
      };
    },
    global: {
      plugins: [store],
    },
  });
  it("component visible test", () => {
    expect(wrapper.find(".container").exists()).toBe(true);
  });
  it(".container element length test", () => {
    expect(wrapper.findAll(".container > div")).toHaveLength(1);
  });
  it(".lds-ring element length test", () => {
    expect(wrapper.findAll(".lds-ring > div")).toHaveLength(4);
  });
});

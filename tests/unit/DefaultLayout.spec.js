import { mount } from "@vue/test-utils";
import DefaultLayout from "../../src/layouts/DefaultLayout.vue";
import AppHeader from "../../src/layouts/partials/AppHeader.vue";
import AppFooter from "../../src/layouts/partials/AppFooter.vue";
describe("DefaultLayout.vue", () => {
  const wrapper = mount(DefaultLayout, {});
  it("default layout content test", () => {
    expect(wrapper.find(".default-layout__content").exists()).toBeTruthy();
  });
  it("app-footer components test", () => {
    expect(wrapper.findComponent(AppFooter).exists()).toBeTruthy();
  });
  it("app-header components test", () => {
    expect(wrapper.findComponent(AppHeader).exists()).toBeTruthy();
  });
});

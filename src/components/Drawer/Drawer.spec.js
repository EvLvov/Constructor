import { shallowMount } from "@vue/test-utils";
import { QDrawer } from "@/components/Drawer";

let wrapper;

describe("Drawer component", () => {
  beforeEach(() => {
    wrapper = shallowMount(QDrawer, {
      props: {
        open: true,
      },
    });
  });

  it("should be render correctly", () => {
    wrapper = shallowMount(QDrawer, {
      props: {
        open: true,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should be visible with the open prop", () => {
    wrapper = shallowMount(QDrawer, {
      props: {
        open: true,
      },
    });

    expect(wrapper.find(".q-drawer").classes()).toContain("q-drawer--open");
  });

  it("should not be visible without the open prop", () => {
    const wrapper = shallowMount(QDrawer);

    expect(wrapper.find(".q-drawer").classes("q-drawer--open")).toBe(false);
  });
});

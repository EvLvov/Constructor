import { mount } from "@vue/test-utils";
import { QMenuLabel } from "@/components/Menu";

describe("QMenu component", () => {
  const wrapper = mount(QMenuLabel, {
    slots: {
      default: "Test",
    },
  });

  it("render correctly", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should contain the default classes q-menu-label", () => {
    expect(wrapper.classes()).toContain("q-menu-label");
  });

  it("should contain the text specified in slot when the component was created.", () => {
    expect(wrapper.find("div").text()).toBe("Test");
  });
});

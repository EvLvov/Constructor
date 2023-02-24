import { mount } from "@vue/test-utils";
import { QRow } from "@/components/Row";

describe("QRow component", () => {
  it("render correctly", () => {
    const wrapper = mount(QRow);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should contain the default classes q-row", () => {
    const wrapper = mount(QRow);
    expect(wrapper.classes()).toContain("q-row");
  });

  describe("checking modifiers", () => {
    it("gutter modifier operation test", () => {
      const wrapper = mount(QRow, {
        propsData: {
          gutter: "-2rem",
        },
      });

      expect(wrapper.attributes("style")).toBe(
        "--q-grid-gutter-compensation: -2rem;"
      );
    });

    it("alignment modifier operation test", () => {
      const wrapper = mount(QRow, {
        propsData: {
          alignment: ["center-xs"],
        },
      });

      expect(wrapper.classes()).toContain("q-row--center-xs");
    });

    it("distribution modifier operation test", () => {
      const wrapper = mount(QRow, {
        propsData: {
          alignment: ["around-md"],
        },
      });

      expect(wrapper.classes()).toContain("q-row--around-md");
    });

    it("reverse modifier operation test", () => {
      const wrapper = mount(QRow, {
        propsData: {
          reverse: true,
        },
      });
      expect(wrapper.classes()).toContain("q-row--reverse");
    });
  });
});

import { mount } from "@vue/test-utils";
import { QCol } from "@/components/Col";

describe("QCol component", () => {
  it("render correctly", () => {
    const wrapper = mount(QCol);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should contain the default classes q-col", () => {
    const wrapper = mount(QCol);
    expect(wrapper.classes()).toContain("q-col");
  });

  describe("checking modifiers", () => {
    it("xs modifier operation test", () => {
      const wrapper = mount(QCol, {
        propsData: {
          xs: 10,
        },
      });
      expect(wrapper.classes()).toContain("q-col--xs-10");
    });

    it("sm modifier operation test", () => {
      const wrapper = mount(QCol, {
        propsData: {
          sm: 8,
        },
      });
      expect(wrapper.classes()).toContain("q-col--sm-8");
    });

    it("md modifier operation test", () => {
      const wrapper = mount(QCol, {
        propsData: {
          md: 6,
        },
      });
      expect(wrapper.classes()).toContain("q-col--md-6");
    });

    it("lg modifier operation test", () => {
      const wrapper = mount(QCol, {
        propsData: {
          lg: 4,
        },
      });
      expect(wrapper.classes()).toContain("q-col--lg-4");
    });

    it("alignment modifier operation test", () => {
      const wrapper = mount(QCol, {
        propsData: {
          alignment: ["center-xs"],
        },
      });

      expect(wrapper.classes()).toContain("q-col--center-xs");
    });

    it("distribution modifier operation test", () => {
      const wrapper = mount(QCol, {
        propsData: {
          alignment: ["around-md"],
        },
      });

      expect(wrapper.classes()).toContain("q-col--around-md");
    });

    it("gutter modifier operation test", () => {
      const wrapper = mount(QCol, {
        propsData: {
          gutter: "2rem",
        },
      });

      expect(wrapper.attributes("style")).toBe(
        "--q-grid-half-gutter-width: 2rem;"
      );
    });
  });
});

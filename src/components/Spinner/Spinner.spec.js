import { mount } from "@vue/test-utils";
import { QSpinner } from "./index";

describe("Spinner component", () => {
  it("should initialize correctly", () => {
    const wrapper = mount(QSpinner);

    expect(wrapper.classes()).toContain("q-spinner");
  });

  describe("when provided no parameters", () => {
    it("should be set font-size in style attribute", () => {
      const wrapper = mount(QSpinner, {
        props: {
          size: "10rem",
        },
      });

      expect(wrapper.attributes("style")).toContain("font-size: 10rem;");
    });

    it("should be set --track-width in style attribute", () => {
      const wrapper = mount(QSpinner, {
        props: {
          trackWidth: "2px",
        },
      });

      expect(wrapper.attributes("style")).toContain("--track-width: 2px;");
    });

    it("should be set --track-color in style attribute", () => {
      const wrapper = mount(QSpinner, {
        props: {
          trackColor: "#000",
        },
      });

      expect(wrapper.attributes("style")).toContain("--track-color: #000;");
    });

    it("should be set --indicator-color in style attribute", () => {
      const wrapper = mount(QSpinner, {
        props: {
          indicatorColor: "#000",
        },
      });

      expect(wrapper.attributes("style")).toContain("--indicator-color: #000;");
    });

    it("should be set --speed in style attribute", () => {
      const wrapper = mount(QSpinner, {
        props: {
          speed: "10s",
        },
      });

      expect(wrapper.attributes("style")).toContain("--speed: 10s;");
    });
  });
});

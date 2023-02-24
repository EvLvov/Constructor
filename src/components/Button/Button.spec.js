import { mount, shallowMount } from "@vue/test-utils";
import { QButton } from "@/components/Button";

describe("QButton component", () => {
  it("render correctly", () => {
    const wrapper = mount(QButton);
    expect(wrapper.html()).toMatchSnapshot();
  });

  describe("accessibility tests", () => {
    const wrapper = mount(QButton);

    it("should be accessible when variant is default", () => {
      wrapper.setProps({variant: "default"})
      wrapper.find('button').trigger('click')
      expect(wrapper.emitted()).toHaveProperty('click');    
    });

    it("should be accessible when variant is primary", () => {
      wrapper.setProps({variant: "primary"})
      wrapper.find('button').trigger('click')
      expect(wrapper.emitted()).toHaveProperty('click');    
    });

    it("should be accessible when variant is success", () => {
      wrapper.setProps({variant: "success"})
      wrapper.find('button').trigger('click')
      expect(wrapper.emitted()).toHaveProperty('click');    
    });

    it("should be accessible when variant is neutral", () => {
      wrapper.setProps({variant: "neutral"})
      wrapper.find('button').trigger('click')
      expect(wrapper.emitted()).toHaveProperty('click');    
    });

    it("should be accessible when variant is warning", () => {
      wrapper.setProps({variant: "warning"})
      wrapper.find('button').trigger('click')
      expect(wrapper.emitted()).toHaveProperty('click');    
    });

    it("should be accessible when variant is danger", () => {
      wrapper.setProps({variant: "danger"})
      wrapper.find('button').trigger('click')
      expect(wrapper.emitted()).toHaveProperty('click');    
    });
  });

  describe("when provided no parameters", () => {
    const wrapper = mount(QButton);

    it("passes accessibility test", () => {
      wrapper.find('button').trigger('click')
      expect(wrapper.emitted()).toHaveProperty('click');
    });

    it("default values are set correctly", () => {
      expect(wrapper.classes()).toContain("q-button--default");
      expect(wrapper.classes()).toContain("q-button--medium");
      expect(wrapper.classes()).not.toContain("q-button--outline");
      expect(wrapper.classes()).not.toContain("q-button--pill");
      expect(wrapper.classes()).not.toContain("q-button--circle");
      expect(wrapper.classes()).not.toContain("q-button--disabled");
      expect(wrapper.classes()).not.toContain("q-button--caret");
      expect(wrapper.classes()).not.toContain("q-button--loading");
    });

    it("should render as a <button>", () => {
      expect(wrapper.html()).toContain("button");
    });

    it("have the text specified in the slot when the component is created", () => {
      const wrapper = mount(QButton, {
        slots: {
          default: "test",
        },
      });

      expect(wrapper.find(".q-button__label").text()).toBe("test");
    });

    it("have the text specified in the prefix slot when the component is created", () => {
      const wrapper = mount(QButton, {
        slots: {
          prefix: "test",
        },
      });

      expect(wrapper.find(".q-button__prefix").text()).toBe("test");
    });

    it("have the text specified in the suffix slot when the component is created", () => {
      const wrapper = mount(QButton, {
        slots: {
          suffix: "test",
        },
      });

      expect(wrapper.find(".q-button__suffix").text()).toBe("test");
    });
  });

  describe("when loading", () => {
    const wrapper = mount(QButton, {
      propsData: {
        loading: true,
      },
    });

    it("should have a spinner present", () => {
      expect(wrapper.classes()).toContain("q-button--loading");
      expect(wrapper.html()).toContain("div");
      expect(wrapper.find(".q-spinner").html()).toContain("svg");
    });
  });

  describe("when caret", () => {
    const wrapper = shallowMount(QButton, {
      propsData: {
        caret: true,
      },
    });

    it("should have a caret present", () => {
      expect(wrapper.classes()).toContain("q-button--caret");
      expect(wrapper.find(".q-button__suffix").html()).toContain("q-icon-stub");
    });
  });

  describe("when href is present", () => {
    const wrapper = shallowMount(QButton, {
      propsData: {
        href: "https://www.google.com/",
      },
    });

    it("should render as an <a>", () => {
      expect(wrapper.html()).toContain("a");
    });
  });

  describe("when disabled", () => {
    
    it("should disable the native <button> when rendering a <button>", () => {
      const wrapper = shallowMount(QButton, {
        propsData: {
          disabled: true,
        },
      });

      expect(wrapper.html()).toContain("button");
    });

    it("should not disable the native <a> when rendering an <a>", () => {
      const wrapper = shallowMount(QButton, {
        propsData: {
          disabled: true,
          href: "https://www.google.com/",
        },
      });

      expect(wrapper.html()).toContain("a");
    });
  });
});

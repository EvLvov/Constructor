import { mount } from "@vue/test-utils";
import { QCheckbox } from "@/components/Checkbox";

let wrapper;

describe("Checkbox component", () => {
  beforeEach(() => {
    wrapper = mount(QCheckbox);
  });

  it("should be render correctly", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("default properties", async () => {
    expect(wrapper.vm.value).toBe(false);
    expect(wrapper.vm.disabled).toBe(false);
    expect(wrapper.vm.required).toBe(false);
    expect(wrapper.vm.checked).toBe(false);
    expect(wrapper.vm.indeterminate).toBe(false);
  });

  it("should be disabled with the disabled attribute", () => {
    const wrapper = mount(QCheckbox, {
      props: {
        disabled: true,
      },
    });

    expect(wrapper.find("input").attributes()).toHaveProperty("disabled");
  });

  it("should be valid by default", async () => {
    const wrapper = mount(QCheckbox);

    expect(wrapper.vm.invalid).toBe(false);
  })
});

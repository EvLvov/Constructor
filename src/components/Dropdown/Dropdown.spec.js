import { shallowMount } from "@vue/test-utils";
import { QDropdown } from "@/components/Dropdown";

describe("QDropdown", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(QDropdown, {
      slots: {
        trigger: `<button>Dropdown</button>`,
      },
    });
  });

  it("render correctly", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  // Placement
});

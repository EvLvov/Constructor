import { mount } from "@vue/test-utils";
import { QTextarea } from "@/components/Textarea";

describe("QTextarea component", () => {
  it("should initialize correctly", () => {
    const wrapper = mount(QTextarea);

    expect(wrapper.html({ raw: true })).toBe(
      `<div class="q-textarea q-textarea--medium q-textarea--standard q-textarea--empty q-textarea--resize-vertical"><textarea id="input" class="q-textarea__control" name="" rows="4" placeholder="" spellcheck="false"></textarea></div>`
    );
  });

  it("should be disabled with the disabled props and disabled attribute is set", () => {
    const wrapper = mount(QTextarea, {
      props: {
        disabled: true,
      },
    });

    expect(wrapper.props("disabled")).toBe(true);
    expect(wrapper.find({ ref: "input" }).attributes("disabled")).toBe("");
  });

  describe("when using constraint validation", () => {
    it("should be valid by default", () => {
      const wrapper = mount(QTextarea);

      expect(wrapper.vm.invalid).toBe(false);
    });

    it("should be invalid when required and empty", () => {
      const wrapper = mount(QTextarea, {
        props: {
          required: true,
        },
      });

      expect(wrapper.vm.invalid).toBe(true);
    });

    it("should be invalid when required and after removing disabled ", async () => {
      const wrapper = mount(QTextarea, {
        props: {
          required: true,
          disabled: true,
        },
      });

      await wrapper.setProps({ disabled: false });

      expect(wrapper.vm.invalid).toBe(true);
    });

    it("should be invalid when required and disabled is removed", async () => {
      const wrapper = mount(QTextarea, {
        props: {
          required: true,
          disabled: true,
        },
      });

      await wrapper.setProps({ required: false });
      await wrapper.setProps({ disabled: false });

      expect(wrapper.vm.invalid).toBe(true);
    });
  });
});

import { mount } from "@vue/test-utils";
import { QCard } from "@/components/Card";

describe("QCard component", () => {
  describe("when provided no parameters", () => {
    const wrapper = mount(QCard, {
      slots: {
        default:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
    });

    it("should contain the class q-card", () => {
      expect(wrapper.classes()).toContain("q-card");
    });

    it("should render the child content provided", () => {
      expect(wrapper.find(".q-card__body").text()).toBe(
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      );
    });
  });

  describe("when provided an element in the slot 'header' to render a header", () => {
    const wrapper = mount(QCard, {
      slots: {
        header:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        default:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
    });

    it("should contain the class q-card--has-header.", () => {
      expect(wrapper.classes()).toContain("q-card--has-header");
    });

    it("render the header content provided.", () => {
      expect(wrapper.find(".q-card__header").text()).toBe(
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      );
    });

    it("should render the child content provided", () => {
      expect(wrapper.find(".q-card__body").text()).toBe(
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      );
    });
  });

  describe("when provided an element in the slot 'footer' to render a footer", () => {
    const wrapper = mount(QCard, {
      slots: {
        footer:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        default:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
    });

    it("should contain the class q-card--has-footer.", () => {
      expect(wrapper.classes()).toContain("q-card--has-footer");
    });

    it("render the footer content provided.", () => {
      expect(wrapper.find(".q-card__footer").text()).toBe(
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      );
    });

    it("should render the child content provided", () => {
      expect(wrapper.find(".q-card__body").text()).toBe(
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      );
    });
  });

  describe("when provided an element in the slot 'image' to render a image", () => {
    const wrapper = mount(QCard, {
      slots: {
        image:
          '<img src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80" alt="A kitten sits patiently between a terracotta pot and decorative grasses.">',
          default:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
    });

    it("should contain the class q-card--has-image.", () => {
      expect(wrapper.classes()).toContain("q-card--has-image");
    });

    it("accept 'image' as an assigned child.", () => {
      expect(wrapper.find(".q-card__image").html()).toBe(
        '<div class="q-card__image"><img src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80" alt="A kitten sits patiently between a terracotta pot and decorative grasses."></div>'
      );
    });

    it("should render the child content provided", () => {
      expect(wrapper.find(".q-card__body").text()).toBe(
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      );
    });
  });
});

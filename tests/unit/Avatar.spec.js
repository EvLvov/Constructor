import { mount } from "@vue/test-utils";
import { QAvatar } from "@/components/Avatar";

describe("Check the operation of the Avatar component", () => {
  describe("without parameters", () => {
    const wrapper = mount(QAvatar);

    it("should contain the default classes q-avatar, q-avatar--primary.", () => {
      expect(wrapper.classes()).toContain("q-avatar", "q-avatar--primary");
    });
  });

  describe("in the presence of the image parameter", () => {
    const wrapper = mount(QAvatar, {
      props: {
        image:
          "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      },
    });

    it("should render image with src set", () => {
      expect(wrapper.find(".q-avatar__image").html()).toBe(
        '<img class="q-avatar__image" src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=300&amp;q=80" alt="">'
      );
    });
  });

  describe("if there is an initials parameter", () => {
    const wrapper = mount(QAvatar, {
      props: {
        initials: "ZH",
      },
    });

    it("should contain the initials passed in the initials parameter", () => {
      expect(wrapper.find(".q-avatar__initials").html()).toBe(
        '<div class="q-avatar__initials">ZH</div>'
      );
    });
  });

  describe("when passing the square form parameter", () => {
    const wrapper = mount(QAvatar, {
      props: {
        shape: "square",
      },
    });

    it("should contain default classes q-avatar, q-avatar--square.", () => {
      expect(wrapper.classes()).toContain("q-avatar", "q-avatar--square");
    });
  });

  describe("when passing the rounded form parameter", () => {
    const wrapper = mount(QAvatar, {
      props: {
        shape: "rounded",
      },
    });

    it("should contain default classes q-avatar, q-avatar--rounded.", () => {
      expect(wrapper.classes()).toContain("q-avatar", "q-avatar--rounded");
    });
  });

  describe("when passing the shape parameter circle", () => {
    const wrapper = mount(QAvatar, {
      props: {
        shape: "circle",
      },
    });

    it("should contain the default classes q-avatar, q-avatar--circle.", () => {
      expect(wrapper.classes()).toContain("q-avatar", "q-avatar--circle");
    });
  });

  describe("when passing text to the icon slot", () => {
    const wrapper = mount(QAvatar, {
      slots: {
        icon: "test",
      },
    });

    it("should contain the passed text", () => {
      expect(wrapper.find(".q-avatar__icon").text()).toBe("test");
    });
  });

  describe("when passing an invalid link to the src argument", () => {
    const wrapper = mount(QAvatar, {
      props: {
        image:
          "https://image.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      },
    });

    it("should not show the image if the image is not loading", async () => {
      expect(wrapper.html()).toBe(
        `<div class="q-avatar q-avatar--circle" role="img"><div class="q-avatar__icon" aria-hidden="true"><div class="q-icon q-icon--default"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16"><path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path></svg></div></div><!--v-if--></div>`
      );
    });
  });
});

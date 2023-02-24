import { mount } from "@vue/test-utils";
import { QBadge } from "@/components/Badge";

describe("Проверить работу компонента Badge", () => {
    

    describe("без указания параметров", () => {
        const wrapper = mount(QBadge, {
            slots: {
                default: "Test",
            },
        });

        it("должен содержать классы по умолчанию q-badge, q-badge--primary.", () => {
            expect(wrapper.classes()).toContain("q-badge", "q-badge--primary");
        });

        it("должен содержать текст указанный при создании компонента.", () => {
            expect(wrapper.find("span").text()).toBe("Test");
        });
    })

    describe("при указании параметра pill", () => {
        const wrapper = mount(QBadge, {
            props: {
                pill: true,
            },
        });

        it("должен содержать классы q-badge, q-badge--primary, q-badge--pill.", () => {
            expect(wrapper.classes()).toContain("q-badge", "q-badge--primary", "q-badge--pill");
        });
    })

    describe("при указании параметра pulse", () => {
        const wrapper = mount(QBadge, {
            props: {
                pulse: true,
            },
        });

        it("должен содержать классы q-badge, q-badge--primary, q-badge--pulse.", () => {
            expect(wrapper.classes()).toContain("q-badge", "q-badge--primary", "q-badge--pulse");
        });
    })

    describe("когда установлен вариант представления primary", () => {
        const wrapper = mount(QBadge, {
            props: {
                variant: "primary",
            },
        });

        it("должен содержать классы q-badge, q-badge--primary", () => {
            expect(wrapper.classes()).toContain("q-badge", "q-badge--primary");
        });
    })

    describe("когда установлен вариант представления success", () => {
        const wrapper = mount(QBadge, {
            props: {
                variant: "success",
            },
        });

        it("должен содержать классы q-badge, q-badge--success", () => {
            expect(wrapper.classes()).toContain("q-badge", "q-badge--success");
        });
    })

    describe("когда установлен вариант представления neutral", () => {
        const wrapper = mount(QBadge, {
            props: {
                variant: "neutral",
            },
        });

        it("должен содержать классы q-badge, q-badge--neutral", () => {
            expect(wrapper.classes()).toContain("q-badge", "q-badge--neutral");
        });
    })

    describe("когда установлен вариант представления warning", () => {
        const wrapper = mount(QBadge, {
            props: {
                variant: "warning",
            },
        });

        it("должен содержать классы q-badge, q-badge--warning", () => {
            expect(wrapper.classes()).toContain("q-badge", "q-badge--warning");
        });
    })

    describe("когда установлен вариант представления danger", () => {
        const wrapper = mount(QBadge, {
            props: {
                variant: "danger",
            },
        });

        it("должен содержать классы q-badge, q-badge--danger", () => {
            expect(wrapper.classes()).toContain("q-badge", "q-badge--danger");
        });
    })
})
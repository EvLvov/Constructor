import * as components from "@/components";

import { use } from "@/utilites/plugins";

const QuickerStyle = {
  install(Vue) {
    for (let componentKey in components) {
      Vue.use(components[componentKey]);
    }
  },
};

use(QuickerStyle);

export default QuickerStyle;

export * from "@/components";

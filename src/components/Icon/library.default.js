import { getBasePath } from "@/utilites/base-path";

const library = {
  name: "default",
  resolver: (name) => `${getBasePath()}/icons/${name}.svg`,
};
export default library;

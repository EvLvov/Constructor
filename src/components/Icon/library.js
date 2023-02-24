import defaultLibrary from "./library.default";
import systemLibrary from "./library.system";

let registry = [defaultLibrary, systemLibrary];
let watchedIcons = [];

export function watchIcon(icon) {
  watchedIcons.push(icon);
}

export function unwatchIcon(icon) {
  watchedIcons = watchedIcons.filter((el) => el !== icon);
}

export function getIconLibrary(name) {
  return registry.find((lib) => lib.name === name);
}

export function registerIconLibrary(name, options) {
  unregisterIconLibrary(name);
  registry.push({
    name,
    resolver: options.resolver,
    mutator: options.mutator,
  });
  // Redraw watched icons
  watchedIcons.forEach((icon) => {
    if (icon.library === name) {
      icon.redraw();
    }
  });
}

export function unregisterIconLibrary(name) {
  registry = registry.filter((lib) => lib.name !== name);
}

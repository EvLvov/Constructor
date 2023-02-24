let basePath = "";
/**
 * Sets the library's base path to the specified directory.
 */
export function setBasePath(path) {
  basePath = path;
}

export function getBasePath() {
  if (!basePath) {
    // TODO:
    setBasePath("");
  }

  return basePath.replace(/\/$/, "");
}

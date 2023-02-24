const includeFiles = new Map();

export function requestInclude(src, mode = "cors") {
  if (includeFiles.has(src)) {
    return includeFiles.get(src);
  }
  const fileDataPromise = fetch(src, { mode: mode }).then(async (response) => {
    return {
      ok: response.ok,
      status: response.status,
      html: await response.text(),
    };
  });
  includeFiles.set(src, fileDataPromise);

  return fileDataPromise;
}

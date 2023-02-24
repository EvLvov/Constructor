import { requestInclude } from "@/components/Include/request";

const iconFiles = new Map();

export async function requestIcon(url) {
  if (iconFiles.has(url)) {
    return iconFiles.get(url);
  }
  const fileData = await requestInclude(url);

  const iconFileData = {
    ok: fileData.ok,
    status: fileData.status,
    svg: null,
  };

  if (fileData.ok) {
    const div = document.createElement("div");
    div.innerHTML = fileData.html;
    const svg = div.firstElementChild;
    iconFileData.svg =
      (svg === null || svg === void 0 ? void 0 : svg.tagName.toLowerCase()) ===
      "svg"
        ? svg.outerHTML
        : "";
  }

  iconFiles.set(url, iconFileData);

  return iconFileData;
}

import { useEffect, useRef, useState } from "react";
/**
 *
 * @param {String} VdocipherAPIScriptUrl
 */

export default function () {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    if (isScriptLoaded) return;
    const script = document.createElement("script");
    script.onload = () => setIsScriptLoaded(true);
    script.src = "https://player.vdocipher.com/v2/api.js";
    document.body.append(script);
  });

  return {
    loadVideo: function ({ pathVideo, container, configuration = {} }: any) {
      const params = new URLSearchParams("");
      const parametersToAdd = { ...configuration };
      for (const item in parametersToAdd) {
        params.append(item, parametersToAdd[item]);
      }
      const iframe = document.createElement("iframe");
      iframe.setAttribute("allowfullscreen", "true");
      iframe.setAttribute("allow", "encrypted-media");
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute(
        "style",
        "height: 100%; width: 100%; overflow: auto;"
      );
      iframe.src = `${pathVideo}&${params.toString()}`;
      container.append(iframe);

      return iframe;
    },
    isAPIReady: isScriptLoaded,
  };
}

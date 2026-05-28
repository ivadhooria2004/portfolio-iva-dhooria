"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Viewer = dynamic(
  () => import("@react-pdf-viewer/core").then((mod) => mod.Viewer),
  { ssr: false }
);

const Worker = dynamic(
  () => import("@react-pdf-viewer/core").then((mod) => mod.Worker),
  { ssr: false }
);

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/zoom/lib/styles/index.css";
import "@react-pdf-viewer/full-screen/lib/styles/index.css";

export default function PdfViewer({ src, height = "600px" }) {
  const [isClient, setIsClient] = useState(false);
  const [zoomPluginInstance, setZoomPluginInstance] = useState(null);
  const [fullScreenPluginInstance, setFullScreenPluginInstance] = useState(null);

  useEffect(() => {
    setIsClient(true);
    import("@react-pdf-viewer/zoom").then((mod) => {
      setZoomPluginInstance(mod.zoomPlugin());
    });
    import("@react-pdf-viewer/full-screen").then((mod) => {
      setFullScreenPluginInstance(mod.fullScreenPlugin());
    });
  }, []);

  if (!isClient || !zoomPluginInstance || !fullScreenPluginInstance) {
    return (
      <div style={{ height, display: "flex", alignItems: "center", justifyContent: "center", color: "#999" }}>
        Loading PDF viewer...
      </div>
    );
  }

  return (
    <div style={{ height }}>
      <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js">
        <Viewer
          fileUrl={src}
          initialPage={0}
          plugins={[zoomPluginInstance, fullScreenPluginInstance]}
        />
      </Worker>
    </div>
  );
}

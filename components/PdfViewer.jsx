"use client";

export default function PdfViewer({ src, height = "800px" }) {
  return (
    <iframe
      src={src}
      width="100%"
      height={height}
      style={{ border: 'none', borderRadius: '8px' }}
      title="PDF Viewer"
    />
  );
}

import Image from "next/image";

/**
 * Reusable placeholder photo slot.
 *
 * Props:
 *   src          - image path/URL. If omitted, renders a dashed placeholder.
 *   alt          - alt text (defaults to empty string).
 *   caption      - small label beneath the slot. Defaults to the instruction
 *                  copy so unfilled slots are self-explanatory.
 *   aspectRatio  - required CSS aspect-ratio string (e.g. "4/3", "16/9").
 *   className    - additional wrapper classes.
 */
export default function PhotoSlot({
  src,
  alt = "",
  caption = "Caption \u2014 describe this moment",
  aspectRatio,
  className = "",
}) {
  const hasImage = Boolean(src);

  return (
    <figure className={`flex flex-col ${className}`}>
      <div
        className={
          hasImage
            ? "relative w-full overflow-hidden rounded-2xl border border-white/[0.08]"
            : "relative w-full overflow-hidden rounded-2xl border border-dashed border-white/15 bg-white/[0.02] flex items-center justify-center"
        }
        style={{ aspectRatio }}
      >
        {hasImage ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        ) : (
          <span className="text-[11px] uppercase tracking-[0.15em] text-white/30 font-display">
            [ Add photo ]
          </span>
        )}
      </div>
      <figcaption className="mt-2 text-[12px] text-white/35 font-display">
        {caption}
      </figcaption>
    </figure>
  );
}

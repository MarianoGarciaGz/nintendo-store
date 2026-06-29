import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronRight, Play } from "lucide-react";
import product from "@/data/product.json";

const slides = product.gallery;

export default function Gallery() {
  const [selected, setSelected] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel();
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index: number) => emblaMainApi?.scrollTo(index),
    [emblaMainApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    const idx = emblaMainApi.selectedScrollSnap();
    setSelected(idx);
    emblaThumbsApi.scrollTo(idx);
  }, [emblaMainApi, emblaThumbsApi]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className="flex flex-col gap-3">
      {/* Imagen principal */}
      <div className="overflow-hidden rounded-xl" ref={emblaMainRef}>
        <div className="flex">
          {slides.map((slide, i) => (
            <div key={i} className="relative min-w-0 flex-[0_0_100%]">
              <img
                src={slide.src}
                alt={slide.alt}
                className="aspect-video w-full object-cover"
              />
              {slide.type === "video" && (
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex size-14 items-center justify-center rounded-full bg-black/55">
                    <Play className="size-6 translate-x-0.5 text-white" fill="currentColor" />
                  </span>
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Miniaturas */}
      <div className="relative">
        <div className="overflow-hidden" ref={emblaThumbsRef}>
          <div className="flex gap-2">
            {slides.map((slide, i) => (
              <button
                key={i}
                type="button"
                onClick={() => onThumbClick(i)}
                className={`relative min-w-0 flex-[0_0_16%] overflow-hidden rounded-md border-2 transition-colors ${
                  selected === i ? "border-primary" : "border-transparent"
                }`}
                aria-label={`Slide ${i + 1}`}
              >
                <img
                  src={slide.src}
                  alt=""
                  className="aspect-video w-full object-cover"
                />
                {slide.type === "video" && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <Play className="size-4 text-white drop-shadow" fill="currentColor" />
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
        {/* Flecha siguiente */}
        <button
          type="button"
          onClick={() => emblaThumbsApi?.scrollNext()}
          aria-label="More thumbnails"
          className="absolute right-0 top-0 flex h-full w-8 items-center justify-center bg-gradient-to-l from-white via-white/90 to-transparent text-ink/70 hover:text-ink"
        >
          <ChevronRight className="size-5" strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}

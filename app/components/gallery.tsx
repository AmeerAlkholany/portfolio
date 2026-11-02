"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import ScrollReveal from "./scroll-reveal";
import { siteConfig } from "@/lib/site-config";

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  category: string;
  src: string;
  width: number;
  height: number;
}

const categories = ["All", ...Array.from(new Set(siteConfig.gallery?.map((g) => g.category)) || [])];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = siteConfig.gallery?.filter(
    (item) => filter === "All" || item.category === filter
  ) || [];

  const openModal = useCallback((item: GalleryItem) => setSelectedItem(item), []);
  const closeModal = useCallback(() => setSelectedItem(null), []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape" && selectedItem) {
        closeModal();
      }
    },
    [selectedItem, closeModal]
  );

  return (
    <section id="gallery" className="py-12 sm:py-16 md:py-20 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 border-l-4 border-emerald-400 pl-4">
            Gallery
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mb-8 sm:mb-10">
            Selected screenshots from websites and systems I&apos;ve built.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400 ${
                  filter === category
                    ? "bg-emerald-400 text-black"
                    : "bg-zinc-900 text-gray-300 border border-zinc-800 hover:border-emerald-400/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {filteredItems.length === 0 ? (
          <ScrollReveal>
            <div className="text-center py-12 sm:py-16 bg-zinc-900/50 rounded-xl border border-zinc-800 border-dashed">
              <p className="text-gray-400 text-sm sm:text-base">
                No images added yet. Add gallery items to <code className="text-emerald-400">lib/site-config.ts</code>.
              </p>
            </div>
          </ScrollReveal>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/60 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-400"
                onClick={() => openModal(item)}
                tabIndex={0}
                onKeyDown={(e: React.KeyboardEvent) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openModal(item);
                  }
                }}
              >
                <ScrollReveal delay={item.id.length * 0.03}>
                  <div className="aspect-video w-full overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-110 group-hover:brightness-110"
                      placeholder="blur"
                      blurDataURL={item.src}
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-1">
                      {item.category}
                    </p>
                    <h3 className="text-white font-semibold text-sm sm:text-base">{item.title}</h3>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        )}

        {/* Modal Lightbox */}
        {selectedItem && (
          <Modal item={selectedItem} onClose={closeModal} onKeyDown={handleKeyDown} />
        )}
      </div>
    </section>
  );
}

interface ModalProps {
  item: GalleryItem;
  onClose: () => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
}

function Modal({ item, onClose, onKeyDown }: ModalProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <div
        className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
        onClick={onClose}
        onKeyDown={(e: React.KeyboardEvent) => onKeyDown(e)}
      >
        <div
          className="relative bg-zinc-900 border border-zinc-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-label={`${item.title} preview`}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400"
            aria-label="Close preview"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-2/3 bg-black flex items-center justify-center">
              <Image
                src={item.src}
                alt={item.title}
                width={item.width || 1280}
                height={item.height || 720}
                className="max-h-[60vh] lg:max-h-[85vh] max-w-full object-contain"
              />
            </div>
            <div className="lg:w-1/3 p-6 flex flex-col border-t lg:border-t-0 lg:border-l border-zinc-800">
              <p className="text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
                {item.category}
              </p>
              <h3 className="text-white text-xl sm:text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed flex-grow">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

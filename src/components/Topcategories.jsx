"use client";

import Link from "next/link";
import { useRef, useState, useEffect, useCallback } from "react";

const MOBILE_VISIBLE = 4;

export default function TopCategories({ categories = [] }) {
  const scrollRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const syncArrows = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    syncArrows();
    el.addEventListener("scroll", syncArrows, { passive: true });
    const ro = new ResizeObserver(syncArrows);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", syncArrows);
      ro.disconnect();
    };
  }, [syncArrows]);

  const nudge = (dir) =>
    scrollRef.current?.scrollBy({ left: dir * 300, behavior: "smooth" });

  const mobileList = showAll ? categories : categories.slice(0, MOBILE_VISIBLE);
  const hasMore = categories.length > MOBILE_VISIBLE;

  return (
    <section style={{ padding: "40px 0", background: "#fff" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 20px" }}>

        {/* ── Header ── */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 28 }}>
          <div>
            <p style={{ margin: "0 0 4px", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#dc2626" }}>
              Browse by category
            </p>
            <h2 style={{ margin: 0, fontSize: 32, fontWeight: 700, color: "#111", lineHeight: 1 }}>
              Top Categories
            </h2>
          </div>

          {/* Arrow buttons — desktop only */}
          <div className="desktop-arrows" style={{ display: "flex", gap: 8 }}>
            {[[-1, "M10 12L6 8l4-4"], [1, "M6 4l4 4-4 4"]].map(([dir, d]) => (
              <button
                key={dir}
                onClick={() => nudge(dir)}
                disabled={dir === -1 ? atStart : atEnd}
                aria-label={dir === -1 ? "Previous" : "Next"}
                style={{
                  width: 40, height: 40, borderRadius: "50%", border: "1px solid #e5e7eb",
                  background: "none", cursor: "pointer", display: "flex", alignItems: "center",
                  justifyContent: "center", transition: "all .2s", flexShrink: 0,
                  opacity: (dir === -1 ? atStart : atEnd) ? 0.3 : 1,
                  color: "#6b7280",
                }}
                onMouseEnter={e => { if (!(dir === -1 ? atStart : atEnd)) { e.currentTarget.style.borderColor = "#dc2626"; e.currentTarget.style.color = "#dc2626"; } }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#e5e7eb"; e.currentTarget.style.color = "#6b7280"; }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d={d} stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            ))}
          </div>
        </div>

        {/* ── DESKTOP: horizontal scroll carousel ── */}
        <div className="desktop-carousel">
          <div
            ref={scrollRef}
            style={{
              display: "flex",
              gap: 16,
              overflowX: "auto",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              paddingBottom: 8,
            }}
          >
            {categories.length === 0 && (
              <p style={{ color: "#9ca3af", fontSize: 14, padding: "40px 0", width: "100%", textAlign: "center" }}>
                No categories found.
              </p>
            )}
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/category/${cat.slug}`}
                style={{
                  flexShrink: 0,
                   width: "calc((100% - 64px) / 5)",  // ← changed from 180
                   minWidth: 160,  
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textDecoration: "none",
                  border: "1px solid #f3f4f6",
                  borderRadius: 16,
                  padding: 8,
                  background: "#fff",
                  transition: "box-shadow .25s, border-color .25s",
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#fecaca"; e.currentTarget.style.boxShadow = "0 6px 24px rgba(220,38,38,.09)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#f3f4f6"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ width: "100%", aspectRatio: "1/1", borderRadius: 10, overflow: "hidden", marginBottom: 10 }}>
                  <img
                    src={cat.image || `/categories/${cat.slug}.png`}
                    alt={cat.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </div>
                <p style={{ margin: 0, fontSize: 13, fontWeight: 600, color: "#1f2937", textAlign: "center", lineHeight: 1.3 }}>
                  {cat.name}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* ── MOBILE: 2×2 grid ── */}
        <div className="mobile-grid">
          {categories.length === 0 && (
            <p style={{ color: "#9ca3af", fontSize: 14, textAlign: "center", padding: "40px 0" }}>
              No categories found.
            </p>
          )}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {mobileList.map((cat) => (
              <Link
                key={cat.id}
                href={`/category/${cat.slug}`}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textDecoration: "none",
                  border: "1px solid #f3f4f6",
                  borderRadius: 16,
                  padding: 8,
                  background: "#fff",
                }}
              >
                <div style={{ width: "100%", aspectRatio: "1/1", borderRadius: 10, overflow: "hidden", marginBottom: 10 }}>
                  <img
                    src={cat.image || `/categories/${cat.slug}.png`}
                    alt={cat.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </div>
                <p style={{ margin: 0, fontSize: 13, fontWeight: 600, color: "#1f2937", textAlign: "center", lineHeight: 1.3 }}>
                  {cat.name}
                </p>
              </Link>
            ))}
          </div>

          {hasMore && (
            <div style={{ textAlign: "center", marginTop: 20 }}>
              <button
                onClick={() => setShowAll(v => !v)}
                style={{
                  padding: "10px 24px", borderRadius: 999, border: "1.5px solid #dc2626",
                  background: "none", color: "#dc2626", fontSize: 14, fontWeight: 600,
                  cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 6,
                }}
              >
                {showAll ? "Show Less" : "View All Categories"}
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path
                    d={showAll ? "M12 10L8 6l-4 4" : "M4 6l4 4 4-4"}
                    stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>

      </div>

      <style>{`
        .desktop-carousel { display: flex; flex-direction: column; }
        .desktop-arrows { display: flex; }
        .mobile-grid { display: none; }
        @media (max-width: 639px) {
          .desktop-carousel { display: none; }
          .desktop-arrows { display: none; }
          .mobile-grid { display: block; }
        }
        .desktop-carousel div::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}
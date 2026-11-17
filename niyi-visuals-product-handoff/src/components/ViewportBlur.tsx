import { useEffect, useRef, useState } from 'react';

/** A small, click-through optical edge. Captions and reading passages always take priority. */
export default function ViewportBlur({ disabled, refreshKey }: { disabled: boolean; refreshKey: string }) {
  const element = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [reading, setReading] = useState(true);
  useEffect(() => {
    if (disabled || !window.CSS.supports('backdrop-filter', 'blur(1px)') || !window.CSS.supports('mask-image', 'linear-gradient(transparent, black)')) {
      setReady(false);
      return;
    }
    let observer: IntersectionObserver | undefined;
    const rebuild = () => {
      observer?.disconnect();
      const height = element.current?.getBoundingClientRect().height ?? 0;
      if (!height) return;
      const protectedContent = new Set<Element>();
      observer = new IntersectionObserver(entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) protectedContent.add(entry.target);
          else protectedContent.delete(entry.target);
        }
        setReading(protectedContent.size > 0);
        setReady(true);
      }, { rootMargin: `-${Math.max(0, window.innerHeight - height - 12)}px 0px 0px 0px` });
      document.querySelectorAll('.gallery-toolbar, .site-header, .project-caption, .photo-invite, .work-colophon, .perspective, .about-section, .services-section, .contact-section').forEach(node => observer?.observe(node));
    };
    rebuild();
    window.addEventListener('resize', rebuild, { passive: true });
    window.visualViewport?.addEventListener('resize', rebuild, { passive: true });
    return () => {
      observer?.disconnect();
      window.removeEventListener('resize', rebuild);
      window.visualViewport?.removeEventListener('resize', rebuild);
    };
  }, [disabled, refreshKey]);
  return <div ref={element} className="viewport-blur" data-muted={!ready || reading || disabled} aria-hidden="true">
    <span /><span /><span /><span /><span />
  </div>;
}

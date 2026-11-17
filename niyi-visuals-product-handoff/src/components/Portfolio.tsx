import { useEffect, useRef, useState } from 'react';
import type { MouseEvent } from 'react';
import type { MotionStyle } from 'motion/react';
import { AnimatePresence, LayoutGroup, MotionConfig, motion, useIsPresent, useReducedMotion } from 'motion/react';
import type { Category, GalleryView, PortfolioImage, PortfolioProject, PortfolioCopy } from '../types/portfolio';
import '../styles/portfolio.css';
import PhotoArrival from './PhotoArrival';
import ViewportBlur from './ViewportBlur';

interface Props {
  projects: PortfolioProject[];
  content: PortfolioCopy;
  portrait: PortfolioImage;
  initialProject?: string;
  initialCategory?: Category;
  initialSection?: string;
}
interface BrowseState { view: GalleryView; category: Category; scroll: number | null; focus: string; url: string; }
const categories: Category[] = ['All', 'Sport', 'Parties', 'Lifestyle'];
const spring = { type: 'spring' as const, stiffness: 230, damping: 31, mass: 0.85 };
const quickSpring = { type: 'spring' as const, stiffness: 460, damping: 37 };
const ordinaryClick = (event: MouseEvent<HTMLAnchorElement>) => !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey && event.button === 0;

function Arrow({ down = false }: { down?: boolean }) {
  return <svg className={down ? 'arrow arrow--down' : 'arrow'} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14" /></svg>;
}

function Photograph({ photo, eager = false, sizes = '(max-width: 700px) 100vw, 65vw', sharedId, retryable = false, reduced = false, interactive = false }: { photo: PortfolioImage; eager?: boolean; sizes?: string; sharedId?: string; retryable?: boolean; reduced?: boolean; interactive?: boolean }) {
  const [failedSource, setFailedSource] = useState('');
  const [attempt, setAttempt] = useState(0);
  const [loadedSource, setLoadedSource] = useState('');
  const imageRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    if (imageRef.current?.complete) {
      if (imageRef.current.naturalWidth) setLoadedSource(photo.src);
      else setFailedSource(photo.src);
    }
  }, [photo.src]);
  const imageSrc = attempt ? `${photo.src}?retry=${attempt}` : photo.src;
  const imageSrcSet = attempt ? photo.srcSet.replace(/(\S+) (\d+w)/g, `$1?retry=${attempt} $2`) : photo.srcSet;
  const failed = failedSource === photo.src;
  return <motion.div layout={Boolean(sharedId) && !reduced} {...(sharedId && !reduced ? { layoutId: sharedId } : {})} className="photograph" data-photo-id={photo.id} style={{ '--focal': photo.focal, '--natural-ratio': `${photo.width} / ${photo.height}`, '--image-ratio': photo.width / photo.height } as MotionStyle} transition={spring}>
    <div className="photo-image"><motion.img key={`${photo.src}-${attempt}`} ref={imageRef} layout={Boolean(sharedId) && !reduced} src={imageSrc} srcSet={imageSrcSet} onLoad={() => setLoadedSource(photo.src)} sizes={sizes} width={photo.width} height={photo.height} alt={photo.alt} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : 'auto'} decoding="async" onError={() => setFailedSource(photo.src)} style={{ opacity: failed ? 0 : 1 }} /></div>
    {interactive && !failed ? <span className="photo-invite" aria-hidden="true">View selection <Arrow /></span> : null}
    {loadedSource !== photo.src && !failed ? <span className="photo-loading" aria-hidden="true">Loading photograph…</span> : null}
    {failed ? <span className="photo-failure" role="status">Image unavailable.<br />{photo.alt}{retryable ? <button type="button" onClick={() => { setFailedSource(''); setAttempt(value => value + 1); }}>Retry photograph</button> : null}</span> : null}
  </motion.div>;
}

function GalleryCard({ project, number, open, selected, reduced, visited, view }: { visited: Set<string>; view: GalleryView; project: PortfolioProject; number: number; open: (project: PortfolioProject, event: MouseEvent<HTMLAnchorElement>) => void; selected: boolean; reduced: boolean }) {
  return <motion.article layout={!reduced} className={`project-card project-card--${project.arrangement}`} data-project={project.slug} transition={spring}>
    <motion.a layout={!reduced} href={`/work/${project.slug}/`} className="project-link" id={`project-${project.slug}`} onClick={event => open(project, event)} aria-label={`Open ${project.title}, ${project.category}`} aria-current={selected ? 'true' : undefined}>
      <PhotoArrival identity={`cover-${project.slug}`} visited={visited} reduced={reduced} disabled={view === 'index' || selected}>
      <Photograph photo={project.cover} interactive={!selected} eager={number < 2} sharedId={`photo-${project.slug}`} reduced={reduced} />
      <motion.div layout={reduced ? false : 'position'} className="project-caption" transition={spring}>
        <span className="project-ordinal" aria-hidden="true">{String(number + 1).padStart(2, '0')}</span>
        <motion.h3 layout={reduced ? false : 'position'} transition={spring}><span className="caption-title">{project.title}</span></motion.h3>
        <motion.span layout={reduced ? false : 'position'} className="project-category" transition={spring}>{project.category}</motion.span>
        <span className="project-open"><span className="sr-only">Open selection</span><Arrow /></span>
      </motion.div>
      </PhotoArrival>
    </motion.a>
  </motion.article>;
}

function ProjectPanel({ project, next, close, openNext, reduced, content, visited }: { visited: Set<string>; content: PortfolioCopy; project: PortfolioProject; next: PortfolioProject; close: () => void; openNext: (project: PortfolioProject, event: MouseEvent<HTMLAnchorElement>) => void; reduced: boolean }) {
  const panel = useRef<HTMLDivElement>(null);
  const present = useIsPresent();
  const closeButton = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    const root = document.getElementById('site-content');
    const oldOverflow = document.body.style.overflow;
    if (root) root.inert = true;
    document.body.style.overflow = 'hidden';
    closeButton.current?.focus({ preventScroll: true });
    return () => { if (root) root.inert = false; document.body.style.overflow = oldOverflow; };
  }, []);
  useEffect(() => {
    panel.current?.scrollTo({ top: 0, behavior: 'instant' });
    closeButton.current?.focus({ preventScroll: true });
  }, [project.slug]);

  return <motion.div ref={panel} layoutRoot layoutScroll className="project-panel" style={{ pointerEvents: present ? 'auto' : 'none' }} inert={!present} aria-hidden={!present} role="dialog" aria-modal="true" aria-labelledby="project-title" data-reduced-motion={reduced}
    initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduced ? 0 : 0.28 }}
    onKeyDown={event => {
      if (event.key === 'Escape') { event.preventDefault(); close(); }
      if (event.key === 'Tab') {
        const items = panel.current?.querySelectorAll<HTMLElement>('a[href],button:not([disabled])');
        const first = items?.[0]; const last = items?.[items.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    }}>
    <div className="project-panel-bar"><span>{content.name}<span className="panel-bar-separator"> / </span><span className="panel-category">{project.category}</span></span><a ref={closeButton} href="/#work" className="close-project" onClick={event => { if (ordinaryClick(event)) { event.preventDefault(); close(); } }}>Back to work <span aria-hidden="true">×</span></a></div>
    <div className="project-panel-inner">
      <Photograph photo={project.cover} eager retryable sizes="(max-width: 700px) 100vw, 90vw" sharedId={`photo-${project.slug}`} reduced={reduced} />
      <motion.div key={project.slug} className="project-introduction" initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduced ? 0 : 0.25, delay: reduced ? 0 : 0.18 }}>
        <h1 id="project-title">{project.title}</h1>
        <div><p>{project.description}</p><dl><div><dt>Category</dt><dd>{project.category}</dd></div><div><dt>Medium</dt><dd>{project.format}</dd></div></dl></div>
      </motion.div>
      <div className="project-sequence">{project.images.slice(1).map((photo, index) => <figure className={`sequence-image sequence-image--${index % 3}`} key={`${project.slug}-${photo.id}`}><PhotoArrival identity={`sequence-${project.slug}-${photo.id}`} visited={visited} reduced={reduced}><Photograph photo={photo} retryable sizes="(max-width: 700px) 100vw, 75vw" /><figcaption>{photo.alt}</figcaption></PhotoArrival></figure>)}</div>
      <div className="project-context"><span>From the {project.category} collection</span><a href={`https://niyivisuals.mypixieset.com/gallery-${project.category === 'Sport' ? 1 : project.category === 'Parties' ? 2 : 3}/`} target="_blank" rel="noreferrer">Explore the complete collection <Arrow /></a></div>
      <a href={`/work/${next.slug}/`} className="next-project" onClick={event => openNext(next, event)}><span>Next selection</span><strong>{next.title}</strong><Arrow /></a>
      <div className="project-bottom"><button type="button" onClick={close}>Return to your place in the work</button><a href={`mailto:${content.contact.email}`}>Let’s connect <Arrow /></a></div>
    </div>
  </motion.div>;
}

export default function Portfolio({ projects, portrait, content, initialProject = '', initialCategory = 'All', initialSection = '' }: Props) {
  const [calmMode, setCalmMode] = useState(false);
  useEffect(() => { setCalmMode(new URL(window.location.href).searchParams.get('motion') === 'reduce'); }, []);
  return <MotionConfig reducedMotion={calmMode ? 'always' : 'user'}><PortfolioExperience projects={projects} portrait={portrait} content={content} initialProject={initialProject} initialCategory={initialCategory} initialSection={initialSection} calmMode={calmMode} /></MotionConfig>;
}

function PortfolioExperience({ projects, portrait, content, initialProject = '', initialCategory = 'All', initialSection = '', calmMode = false }: Props & { calmMode?: boolean }) {
  const [view, setView] = useState<GalleryView>('grid');
  const [category, setCategory] = useState<Category>(initialCategory);
  const [selected, setSelected] = useState(initialProject);
  const [hydrated, setHydrated] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const prefersReduced = useReducedMotion();
  const reduced = prefersReduced === true || calmMode;
  const menu = useRef<HTMLDialogElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const browse = useRef<BrowseState>({ view: 'grid', category: initialCategory, scroll: null, focus: '', url: '/' });
  const wasOpen = useRef(Boolean(initialProject));
  const closing = useRef(false);
  const visited = useRef(new Set<string>());
  const current = projects.find(project => project.slug === selected);
  const HomeHeading = current ? 'h2' : 'h1';
  const visible = projects.filter(project => category === 'All' || project.category === category);
  const next = current ? projects[(projects.indexOf(current) + 1) % projects.length]! : projects[0]!;

  useEffect(() => {
    const sync = () => {
      closing.current = false;
      const url = new URL(window.location.href);
      const queryCategory = url.searchParams.get('category');
      const restored = window.history.state?.niyiBrowse as BrowseState | undefined;
      setView(url.searchParams.get('view') === 'index' ? 'index' : 'grid');
      const pathCategory: Category = url.pathname.startsWith('/gallery-1') ? 'Sport' : url.pathname.startsWith('/gallery-2') ? 'Parties' : url.pathname.startsWith('/gallery-3') ? 'Lifestyle' : 'All';
      setCategory(categories.includes(queryCategory as Category) ? queryCategory as Category : pathCategory);
      const slug = url.pathname.match(/^\/work\/([^/]+)\/?$/)?.[1] ?? '';
      setSelected(projects.some(project => project.slug === slug) ? slug : '');
      if (restored) browse.current = restored;
    };
    sync(); setHydrated(true);
    if (!initialProject && initialSection) document.getElementById(initialSection)?.scrollIntoView();
    window.addEventListener('popstate', sync);
    return () => window.removeEventListener('popstate', sync);
  }, [initialCategory, initialProject, initialSection, projects]);

  useEffect(() => {
    document.title = current ? `${current.title} — Niyi Visuals` : initialSection === 'about' ? 'About Niyi Scholten — Niyi Visuals' : initialSection === 'contact' ? 'Contact Niyi Scholten — Niyi Visuals' : 'Niyi Visuals — Sport, Event & Lifestyle Photography in Apeldoorn';
  }, [current, initialSection]);

  function updateBrowsing(newView: GalleryView, newCategory: Category) {
    setView(newView); setCategory(newCategory);
    const url = new URL(window.location.href);
    if (newView === 'index') url.searchParams.set('view', 'index'); else url.searchParams.delete('view');
    if (newCategory !== 'All') url.searchParams.set('category', newCategory); else url.searchParams.delete('category');
    window.history.replaceState(window.history.state, '', url);
  }

  function openProject(project: PortfolioProject, event: MouseEvent<HTMLAnchorElement>) {
    if (!ordinaryClick(event)) return;
    event.preventDefault();
    closing.current = false;
    const url = new URL(`/work/${project.slug}/`, window.location.origin);
    if (calmMode) url.searchParams.set('motion', 'reduce');
    if (view === 'index') url.searchParams.set('view', 'index');
    if (category !== 'All') url.searchParams.set('category', category);
    if (!current) {
      browse.current = { view, category, scroll: window.scrollY, focus: project.slug, url: window.location.href };
      window.history.replaceState({ ...window.history.state, niyiBrowse: browse.current }, '', window.location.href);
      window.history.pushState({ niyiOverlay: true, niyiBrowse: browse.current }, '', url);
    } else window.history.replaceState({ ...window.history.state, niyiBrowse: browse.current }, '', url);
    wasOpen.current = true; setSelected(project.slug);
  }

  function closeProject() {
    if (closing.current) return;
    closing.current = true;
    if (window.history.state?.niyiOverlay) window.history.back();
    else {
      const url = new URL('/', window.location.origin);
      if (view === 'index') url.searchParams.set('view', 'index');
      if (category !== 'All') url.searchParams.set('category', category);
      url.hash = 'work';
      browse.current = { view, category, scroll: null, focus: selected, url: url.href };
      window.history.pushState({ niyiBrowse: browse.current }, '', url); setSelected('');
    }
  }
  function restoreBrowse() {
    if (selected || !wasOpen.current) return;
    wasOpen.current = false;
    const snapshot = browse.current;
    const target = document.getElementById(`project-${snapshot.focus}`);
    if (snapshot.scroll !== null) window.scrollTo({ top: snapshot.scroll, behavior: 'instant' });
    else target?.scrollIntoView({ block: 'center', behavior: 'instant' });
    target?.focus({ preventScroll: true });
  }

  return <LayoutGroup id="niyi-portfolio">
    <div id="site-content" data-hydrated={hydrated} data-reduced-motion={reduced} data-project-open={Boolean(current)} inert={Boolean(current)}>
      <header className="site-header page-width" id="top">
        <a className="wordmark" href="/" aria-label="Niyi Scholten — Home">Niyi Scholten<span className="wordmark-period">.</span></a>
        <span className="header-profession">Independent photographer</span>
        <nav className="desktop-navigation" aria-label="Main navigation"><a href="/portfolio/">Work <span>{String(projects.length).padStart(2, '0')}</span></a><a href="/about/">About</a><a href="/contact/">Contact <Arrow /></a></nav>
        <button ref={menuButton} className="mobile-menu-button" type="button" aria-label="Open menu" aria-controls="mobile-navigation" aria-expanded={menuOpen} onClick={() => { menu.current?.showModal(); setMenuOpen(true); menu.current?.querySelector<HTMLButtonElement>('button')?.focus(); document.body.style.overflow = 'hidden'; }}>Menu <span aria-hidden="true">+</span></button>
        <dialog ref={menu} id="mobile-navigation" className="mobile-navigation" aria-label="Site navigation" onClose={() => { setMenuOpen(false); document.body.style.overflow = ''; menuButton.current?.focus(); }}>
          <div className="mobile-navigation-top"><a href="/">{content.name}</a><button type="button" aria-label="Close menu" onClick={() => menu.current?.close()}>Close <span aria-hidden="true">×</span></button></div>
          <nav aria-label="Mobile navigation"><a href="/portfolio/">Work <span>{String(projects.length).padStart(2, '0')}</span></a><a href="/about/">About</a><a href="/contact/">Contact <Arrow /></a></nav>
          <a className="menu-email" href={`mailto:${content.contact.email}`}>{content.contact.email}</a><p>{content.location}</p>
        </dialog>
      </header>

      <section className="editorial-opening page-width" aria-labelledby="home-title">
        <HomeHeading id="home-title" aria-label={content.home.heading}>Where action<br /><span>meets emotion<span className="headline-stop">.</span></span><span className="story-line">every frame tells a story</span></HomeHeading>
        <div className="opening-introduction"><p>{content.home.introduction[1]}</p><a href="#work">Explore the work <Arrow down /></a></div>
      </section>

      <section className="selected-work page-width" id="work" aria-labelledby="work-title">
        <div className="gallery-toolbar">
          <h2 id="work-title">Selected work<span>({String(visible.length).padStart(2, '0')})</span></h2>
          <div className="gallery-filters" role="group" aria-label="Filter work by category">{categories.map(item => <button key={item} type="button" aria-pressed={category === item} onClick={() => updateBrowsing(view, item)}>{category === item ? <motion.span className="filter-dot" {...(!reduced ? { layoutId: 'filter-dot' } : {})} transition={quickSpring} /> : null}{item}</button>)}</div>
          <div className="gallery-view" role="group" aria-label="Gallery layout">{(['grid', 'index'] as const).map(item => <button key={item} type="button" aria-pressed={view === item} onClick={() => updateBrowsing(item, category)}>{view === item ? <motion.span className="view-indicator" {...(!reduced ? { layoutId: 'view-indicator' } : {})} transition={quickSpring} /> : null}<span>{item === 'grid' ? <svg width="13" height="13" viewBox="0 0 13 13" aria-hidden="true"><path d="M0 0h5v5H0zM8 0h5v5H8zM0 8h5v5H0zM8 8h5v5H8z" fill="currentColor" /></svg> : <svg width="13" height="13" viewBox="0 0 13 13" aria-hidden="true"><path d="M0 2h13M0 6.5h13M0 11h13" stroke="currentColor" /></svg>}{item === 'grid' ? 'Grid' : 'Index'}</span></button>)}</div>
        </div>
        <p className="sr-only" aria-live="polite">{visible.length} photographic selections, {category === 'All' ? 'all categories' : category}, {view} view.</p>
        <motion.div layout={!reduced} className={`project-gallery project-gallery--${view}`} data-view={view} transition={spring}>
          <AnimatePresence initial={false} mode="popLayout">{visible.map(project => <motion.div layout={!reduced} key={project.slug} className={`gallery-slot gallery-slot--${project.arrangement}`} initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduced ? 0 : 0.16, layout: spring }}><GalleryCard visited={visited.current} view={view} project={project} number={projects.indexOf(project)} open={openProject} selected={selected === project.slug} reduced={reduced} /></motion.div>)}</AnimatePresence>
        </motion.div>
        <div className="work-colophon"><p>{category === 'All' ? content.collectionNote : `${visible.length} photographic selections from my ${category} collection.`}</p><a href="/services/">Photography services <Arrow /></a></div>
      </section>

      <section className="perspective page-width" aria-label="Photographic approach"><p>{content.home.supporting}</p><span>{content.profession}</span></section>

      <section className="about-section page-width" id="about" aria-labelledby="about-title">
        <div className="about-portrait"><Photograph photo={portrait} sizes="(max-width: 700px) 80vw, 40vw" /><p>{content.name} / Apeldoorn</p></div>
        <div className="about-story"><h2 id="about-title">On both sides<br />of the moment<span>.</span></h2><p className="about-introduction">{content.home.introduction[0]}</p>{content.home.introduction.slice(1).map(text => <p key={text}>{text}</p>)}<a className="underlined-link" href={`mailto:${content.contact.email}`}>Let’s make something together <Arrow /></a></div>
      </section>

      <section className="services-section page-width" aria-labelledby="services-title"><h2 id="services-title">What I photograph</h2><div>{content.services.map(service => <a href={service.service} key={service.key}><h3>{service.name}</h3><p>{service.description}</p><Arrow /></a>)}</div></section>

      <footer className="contact-section" id="contact"><div className="page-width">
        <div className="contact-opening"><h2>Let’s connect<span>.</span></h2><p>{content.home.invitation}</p></div>
        <a className="contact-email" href={`mailto:${content.contact.email}`}>{content.contact.email}<Arrow /></a>
        <div className="contact-details"><a href={content.contact.telephoneUri}>{content.contact.phone}</a><span>{content.location}</span><div><a href={content.contact.instagram} target="_blank" rel="noreferrer">Instagram <Arrow /></a><a href={content.contact.tiktok} target="_blank" rel="noreferrer">TikTok <Arrow /></a></div></div>
        <div className="footer-line"><span>© {new Date().getFullYear()} {content.brand}</span><a href="/portfolio/">Work</a><a href="/services/">Services</a><a href="#top">Back to top <Arrow /></a></div>
        <p className="footer-wordmark" aria-hidden="true">Niyi Scholten.</p>
      </div></footer>
      <noscript><p className="no-script-note">The photographic selections open as complete pages. Layout switching requires JavaScript.</p></noscript>
    </div>
    <ViewportBlur disabled={Boolean(current) || menuOpen || reduced} refreshKey={`${view}-${category}`} />
    <AnimatePresence onExitComplete={restoreBrowse}>{current ? <ProjectPanel visited={visited.current} key="project-panel" content={content} project={current} next={next} close={closeProject} openNext={openProject} reduced={reduced} /> : null}</AnimatePresence>
  </LayoutGroup>;
}

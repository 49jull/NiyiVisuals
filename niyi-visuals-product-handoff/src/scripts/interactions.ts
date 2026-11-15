export {};
const dialog = document.querySelector<HTMLDialogElement>('#mobile-navigation');
const opener = document.querySelector<HTMLButtonElement>('.menu-toggle');
const closer = dialog?.querySelector<HTMLButtonElement>('.menu-close');
let savedScroll = 0;
let priorOverflow = '';

function restoreMenu() {
  if (!dialog || !opener) return;
  opener.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = priorOverflow;
  window.scrollTo(0, savedScroll);
  opener.focus({ preventScroll: true });
}
opener?.addEventListener('click', () => {
  if (!dialog) return;
  savedScroll = window.scrollY;
  priorOverflow = document.body.style.overflow;
  dialog.showModal();
  opener.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
  closer?.focus();
});
closer?.addEventListener('click', () => dialog?.close());
dialog?.addEventListener('close', restoreMenu);
dialog?.querySelectorAll<HTMLAnchorElement>('a').forEach(link => link.addEventListener('click', () => dialog.close()));
window.matchMedia('(min-width: 901px)').addEventListener('change', event => { if (event.matches && dialog?.open) dialog.close(); });

for (const disclosure of document.querySelectorAll<HTMLElement>('[data-work-disclosure]')) {
  const toggle = disclosure.querySelector<HTMLButtonElement>('[data-work-toggle]');
  const list = disclosure.querySelector<HTMLElement>('ul');
  if (!toggle || !list) continue;
  const setOpen = (open: boolean) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', `${open ? 'Close' : 'Open'} work categories`);
    list.hidden = !open;
  };
  toggle.addEventListener('click', () => setOpen(list.hidden));
  disclosure.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !list.hidden) {
      event.preventDefault();
      event.stopPropagation();
      setOpen(false);
      toggle.focus();
    }
  });
  document.addEventListener('click', event => { if (event.target instanceof HTMLElement && !disclosure.contains(event.target)) setOpen(false); });
  disclosure.addEventListener('focusout', event => { if (!(event.relatedTarget instanceof HTMLElement) || !disclosure.contains(event.relatedTarget)) setOpen(false); });
}

for (const frame of document.querySelectorAll<HTMLElement>('.photo__frame')) {
  const img = frame.querySelector<HTMLImageElement>('img');
  const failure = frame.querySelector<HTMLElement>('.photo__failure');
  const showFailure = () => { if (failure) failure.hidden = false; };
  img?.addEventListener('error', showFailure);
  if (img?.complete && img.naturalWidth === 0) showFailure();
}

const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (!motion.matches) {
  const hero = document.querySelector<HTMLElement>('.hero-composition');
  const heroImage = hero?.querySelector<HTMLImageElement>('img');
  if (heroImage?.complete && heroImage.naturalWidth > 0) heroImage.animate([{ transform: 'scale(1.015)' }, { transform: 'scale(1)' }], { duration: 400, easing: 'cubic-bezier(0.22,1,0.36,1)' });
  if (window.innerWidth >= 768) document.querySelector<HTMLElement>('.hero-title')?.animate([{ transform: 'translateY(8px)', opacity: 0.75 }, { transform: 'translateY(0)', opacity: 1 }], { duration: 400, easing: 'cubic-bezier(0.22,1,0.36,1)' });
  const selected = document.querySelector<HTMLElement>('[data-feature-entrance]');
  if (selected && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        if (!motion.matches) selected.animate([{ transform: 'translateY(12px)', opacity: 0.8 }, { transform: 'translateY(0)', opacity: 1 }], { duration: 400, easing: 'cubic-bezier(0.22,1,0.36,1)' });
        observer.disconnect();
      }
    }, { threshold: 0.12 });
    observer.observe(selected);
  }
}

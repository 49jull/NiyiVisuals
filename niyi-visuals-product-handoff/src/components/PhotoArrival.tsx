import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { motion, useInView } from 'motion/react';

interface Props { children: ReactNode; identity: string; visited: Set<string>; reduced: boolean; disabled?: boolean; }

/** Enhance offscreen photographs only; server-rendered and first-view content stay visible. */
export default function PhotoArrival({ children, identity, visited, reduced, disabled = false }: Props) {
  const element = useRef<HTMLDivElement>(null);
  const entered = useInView(element, { once: true, margin: '0px 0px 40px 0px' });
  const [armed, setArmed] = useState(false);
  useEffect(() => {
    if (visited.has(identity)) return;
    if (element.current && element.current.getBoundingClientRect().top > window.innerHeight + 24) setArmed(true);
    else visited.add(identity);
  }, [identity, visited]);
  useEffect(() => { if (entered) visited.add(identity); }, [entered, identity, visited]);
  const waiting = armed && !entered && !disabled && !reduced && !visited.has(identity);
  return <motion.div ref={element} className="photo-arrival" data-arrival={waiting ? 'waiting' : 'arrived'} initial={false}
    animate={{ opacity: waiting ? 0.72 : 1, y: waiting ? 14 : 0 }}
    transition={{ duration: reduced || disabled ? 0 : 0.46, ease: [0.22, 1, 0.36, 1] }}>
    {children}
  </motion.div>;
}

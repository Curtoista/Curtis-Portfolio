// so I can add images of the skills I use top row being android dev and bottom row being frontend dev
import { motion, useAnimation } from 'framer-motion';
import React, { useLayoutEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { Section } from '@/layout/Section';

import { SectionHeader } from './components/SectionHeader';
import { SkillsGrid } from './components/SkillGrid';

interface SectionProps {
  className?: string;
}
// complete the sectionprops for this file
export const Skills = ({ ...rest }: SectionProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useLayoutEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, transition: { duration: 1 } });
    }
  }, [inView, controls]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0 }} animate={controls}>
      <Section {...rest}>
        <div className=" flex w-full flex-col items-center hover:text-slate-500  md:w-full">
          <SectionHeader title="Skills" description="" />
          <SkillsGrid />
        </div>
      </Section>
    </motion.div>
  );
};

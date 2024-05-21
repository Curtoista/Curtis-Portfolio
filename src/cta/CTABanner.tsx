import { motion, useAnimation } from 'framer-motion';
import type { ReactNode } from 'react';
import { useLayoutEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import Contact from '@/contact/Contact';

type ICTABannerProps = {
  title: string;
  subtitle: string;
  button: ReactNode;
};

const CTABanner = (props: ICTABannerProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  useLayoutEffect(() => {
    if (inView) {
      controls.start({ y: 0, opacity: 1, transition: { duration: 1 } });
    }
  }, [inView, controls]);

  return (
    <div id="Contact">
      <motion.div
        ref={ref}
        initial={{ y: -50, opacity: 0 }} // Starts from above (negative y value)
        animate={controls}
      >
        <div className="flex flex-col rounded-md bg-primary-100 p-4 text-center">
          <div className="text-4xl font-semibold">
            <div className="text-gray-900">{props.title}</div>
            <div className="text-4xl text-primary-500">{props.subtitle}</div>
          </div>
          <Contact button={props.button} />
        </div>
      </motion.div>
    </div>
  );
};

export { CTABanner };

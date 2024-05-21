import { motion, useAnimation } from 'framer-motion';
import { useLayoutEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => {
  const controls = useAnimation();

  useLayoutEffect(() => {
    const animateBanner = async () => {
      await controls.start({ opacity: 1, y: 0 });
    };

    animateBanner();
  }, [controls]);

  return (
    <motion.div animate={controls}>
      <Section>
        <CTABanner
          title=""
          subtitle="Contact Me"
          button={
            <ScrollLink to="Navbar" smooth={true} duration={500}>
              <Button>Back to the Top</Button>
            </ScrollLink>
          }
        />
      </Section>
    </motion.div>
  );
};

export { Banner };

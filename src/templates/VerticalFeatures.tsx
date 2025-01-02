import { Disclosure } from '@headlessui/react';
import { motion, useAnimation } from 'framer-motion';
import { useLayoutEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: any;
      // Add other elements you're using here
      motion: any; // For framer-motion
      VerticalFeatureRow: any;
      Section: any;
    }
  }
}

// Define a TypeScript interface for the props
interface CollapsibleFeatureProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  link: string;
  github: string;
}

// Define the CollapsibleFeature component with the correct return type
const CollapsibleFeature: React.FC<CollapsibleFeatureProps> = ({
  title,
  description,
  image,
  imageAlt,
  link,
  github,
}) => {
  return (
    <Disclosure>
      <VerticalFeatureRow
        title={title}
        description={description}
        image={image}
        imageAlt={imageAlt}
        link={link}
        github={github}
      />
    </Disclosure>
  );
};

const VerticalFeatures = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useLayoutEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
    }
  }, [inView, controls]);
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 25 }} animate={controls}>
      <div id="ProjectWork">
        <Section
          yPadding="py-0"
          title="Portfolio of Projects"
          description="Skillify Web Development Projects"
        >
          <div className="space-y-8">
            {' '}
            <CollapsibleFeature
              title="Grooveshare Spotify App"
              description="This an app I created using React that uses the Spotify API to create and save playlists"
              image="/assets/images/grooveshare.png"
              imageAlt="Third feature alt text"
              link="https://grooveshare.vercel.app/"
              github="https://github.com/Curtoista/grooveshare"
            />
            <CollapsibleFeature
              title="Hockey Blog"
              description="This is a website I created for my Skillify web development course. It is a hockey blog that documents the 2023 NHL season. Contents include the results of the regular season and NHL Stanley Cup Playoffs, season stat leaders, and NHL award results."
              image="/assets/images/file.png"
              imageAlt="Third feature alt text"
              link="https://hockeywebsite.vercel.app/"
              github="https://github.com/Curtoista/CSS-Assignment-2--1-"
            />
            <CollapsibleFeature
              title="Frogger Game"
              description="This is a game I created that is similar to the classic arcade game Frogger. The player controls a frog that must cross a busy road and a river to reach the other side of the screen. The player must avoid cars and logs that move across the screen. The player earns points for successfully crossing the road and river, and loses a life if the frog is hit by a car or falls in the river."
              image="/assets/images/froggerscreen.png"
              imageAlt="Third feature alt text"
              link="https://frogger-gray.vercel.app/"
              github="https://github.com/Curtoista/Frogger"
            />
            <CollapsibleFeature
              title="Memory Game"
              description="This is a game I created that tests the player's memory. The game displays a grid of cards face down. The player must flip over two cards at a time to find matching pairs. If the cards do not match, they are flipped back over. The player must remember the location of the cards to find all the matching pairs and win the game."
              image="/assets/images/Memory-Game-Screenshot.png"
              imageAlt="First feature alt text"
              link="https://memory-game-rho-opal.vercel.app/"
              github="https://github.com/Curtoista/MemoryGame"
            />
          </div>
        </Section>
      </div>{' '}
    </motion.div>
  );
};

export { VerticalFeatures };

import type { ReactNode } from 'react';
import { CenteredFooterAlt } from '@/footer/CenteredFooterAlt';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="space-y-2 text-center">
    <div className="flex">
      {/* Optional profile image can go here */}
    </div>

    <h1 className="text-5xl font-bold leading-hero text-gray-900">
      {props.title}
    </h1>

    <div className="my-4 text-2xl">{props.description}</div>

    <div className="flex justify-center items-center">
      <CenteredFooterAlt
        iconList={
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            <a
              href="https://github.com/Curtoista"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-black dark:text-white hover:text-gray-700 transition-transform duration-300 hover:scale-105"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-12 h-12"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 .297c-6.63 0-12 5.373..." />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/curtis-fuller-73799946/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-black dark:text-white hover:text-blue-600 transition-transform duration-300 hover:scale-105"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-12 h-12"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452h-3.554..." />
              </svg>
            </a>

            <a
              href="https://docs.google.com/document/d/1fSilT8mQOwU8z9uoKW-vbg1W2v639vad/edit#heading=h.gjdgxs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Resume"
              className="text-black dark:text-white hover:text-green-600 transition-transform duration-300 hover:scale-105"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                className="w-12 h-12"
                fill="currentColor"
              >
                <path d="m55.707 11.293-10-10..." />
              </svg>
            </a>
          </div>
        }
        logo={undefined}
      />
    </div>

    <div className="flex justify-center py-12">{props.button}</div>
  </header>
);

export { HeroOneButton };

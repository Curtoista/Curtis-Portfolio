 import className from 'classnames';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';
import background1 from 'public/assets/images/file.png'
import background3 from 'public/assets/images/Memory-Game-Screenshot.png';
import background2 from 'public/assets/images/Memory-Game-Screenshot.png';
import background4 from 'public/assets/images/froggerscreen.png';
import background5 from 'public/assets/images/grooveshare.png';
import React, { useEffect, useState } from 'react';

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  image: StaticImageData | string;
  imageAlt: string;
  reverse?: boolean;
  link: string;
  github: string;
};

const VerticalFeatureRow: React.FC<IVerticalFeatureRowProps> = (props) => {
  const [backgroundImage, setBackgroundImage] = useState<
    string | StaticImageData | undefined
  >(undefined);

  useEffect(() => {
    if (props.image === '/assets/images/file.png') {
      setBackgroundImage(background1);
    } else if (props.image === '/assets/images/Memory-Game-Screenshot.png') {
      setBackgroundImage(background2);
    } else if (props.image === '/assets/images/Memory-Game-Screenshot.png') {
      setBackgroundImage(background3);
    } else if (props.image === '/assets/images/froggerscreen.png') {
      setBackgroundImage(background4);
      } else if (props.image === '/assets/images/grooveshare.png') {
      setBackgroundImage(background5);
    }
  }, [props.image]);

  const verticalFeatureClass = className('flex', 'flex-wrap', 'items-center', {
    'flex-row-reverse': props.reverse,
  });

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full px-8 text-center sm:w-1/2">
        <a className="hover:text-blue-500 hover:underline " href={props.link}>
          {' '}
          <h3 className="text-4xl font-semibold text-orange-900 hover:text-blue-500 hover:underline">
            {props.title}
          </h3>
        </a>
        <div className="mt-6 text-2xl leading-9">{props.description}</div>
        <Link href={props.github}>
          <p className=" mt-4 cursor-pointer text-2xl font-extrabold text-blue-500 underline hover:text-blue-700">
            Github
          </p>
        </Link>
      </div>

      <div className="size-full p-4 transition-transform hover:scale-105  hover:shadow-lg sm:w-1/2">
        {backgroundImage && (
          <Link href={props.link}>
            <Image height={'1200'} src={backgroundImage} alt={props.imageAlt}  />
          </Link>
        )}
      </div>
    </div>
  );
};

export { VerticalFeatureRow };

import React from 'react';

export const SkillsGridItem = ({
  imageSrc,
  title,
}: {
  imageSrc: string;
  title: string;
}) => {
  return (
    <div className="flex flex-col items-center">
      <img
        className="size-20 text-lg"
        src={imageSrc}
        alt={title}
        title={title}
      />
      <p className="mt-2 text-xl text-black">{title}</p>
    </div>
  );
};

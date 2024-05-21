// complete the sectionheader component below so it works with the above component
export const SectionHeader = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="w-full text-center text-black">
      <h2 className=" text-4xl font-bold">{title}</h2>
      <p className="text-md   text-black">{description}</p>
    </div>
  );
};

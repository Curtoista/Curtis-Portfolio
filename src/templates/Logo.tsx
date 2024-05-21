import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '60' : '32';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  // A single path that represents the combined shape of the logo
  const combinedPath =
    'M4,20 L18,20 M7,12 Q6,12 6,13 L6,19 Q6,20 7,20 L9,20 Q10,20 10,19 L10,13 Q10,12 9,12 L7,12 M13,8 Q12,8 12,9 L12,19 Q12,20 13,20 L15,20 Q16,20 16,19 L16,9 Q16,8 15,8 L13,8 M19,4 Q18,4 18,5 L18,19 Q18,20 19,20 L21,20 Q22,20 22,19 L22,5 Q22,4 21,4 L19,4';

  return (
    <span className={`inline-flex items-center text-gray-900 ${fontStyle}`}>
      <svg
        className="mr-1"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M0 0h24v24H0z" stroke="none" />
        {/* Updated path for a more cohesive look */}
        <path d={combinedPath} fill="#3490dc" />
      </svg>
      <div className="mx-auto text-4xl">{AppConfig.site_name}</div>
    </span>
  );
};

export { Logo };

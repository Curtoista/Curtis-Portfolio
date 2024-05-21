import type { ReactNode } from 'react';

type IFooterIconListProps = {
  children: ReactNode;
};

const FooterIconList = (props: IFooterIconListProps) => (
  <div className="footer-icon-list  border border-black">
    {props.children}

    <style jsx>
      {`
        .footer-icon-list :global(a) {
          @apply text-gray-500;
        }

        .footer-icon-list :global(a:hover) {
          @apply text-gray-700;
        }

        .footer-icon-list :global(svg) {
          @apply fill-current;
        }
        .footer-icon-list :global(svg) {
          @apply flex;
        }
      `}
    </style>
  </div>
);

export { FooterIconList };

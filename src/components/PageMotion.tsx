import type { ReactNode } from 'react';

type PageMotionProps = {
  children: ReactNode;
};

export default function PageMotion({ children }: PageMotionProps) {
  return <div className="page-motion">{children}</div>;
}

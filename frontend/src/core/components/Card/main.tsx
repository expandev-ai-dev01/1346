import { clsx } from 'clsx';
import type { CardProps } from './types';

/**
 * @component Card
 * @summary Card container component for content grouping
 * @domain core
 * @type ui-component
 * @category display
 */
export const Card = ({ children, className, padding = 'md' }: CardProps) => {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      className={clsx(
        'bg-white rounded-lg shadow-md border border-gray-200',
        paddingClasses[padding],
        className
      )}
    >
      {children}
    </div>
  );
};

import { clsx } from 'clsx';
import type { ButtonProps } from './types';
import { getButtonClassName } from './variants';

/**
 * @component Button
 * @summary Reusable button component with variants and sizes
 * @domain core
 * @type ui-component
 * @category form
 */
export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  type = 'button',
  onClick,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={clsx(getButtonClassName({ variant, size, fullWidth }), className)}
      {...props}
    >
      {children}
    </button>
  );
};

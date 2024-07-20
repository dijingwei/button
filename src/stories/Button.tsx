import './button.css';

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  disabled?:boolean,
  border?:string
  color?:string,
  fontSize?:string,
  padding?:string,
  borderRadius?:string,
  width?:string,
  height?:string

  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */


export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  // 自己添加的变量
  color,
  border,
  fontSize,
  padding,
  borderRadius,
  width,
  height,
  disabled=false,

  
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    // 标签上添加属性
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{width,height, fontSize,padding, backgroundColor,color,border,borderRadius }}
      disabled={disabled}
      {...props}
    >
      {label}
    </button>
  );
};

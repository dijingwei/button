import "./header.css";

export interface HeaderProps {
  type?: string;
  width?: string;
  hight?: string;
  color?: string;
  disabled?: boolean;
  label?:string;
  padding?: string;
  placeholder?:string,
  onChange?: () => void;

}

export const Header = ({
  type,
  width,
  color,
  disabled=false,
  label,
  padding,
  placeholder,
  ...props
}: HeaderProps) => (
  <header>
    <span>{label}：</span>
    <input
      type={type}
      placeholder='请输入内容'
      style={{ width, color, padding }}
      placeholder={placeholder}
      disabled={disabled}
      {...props}
    />
  </header>
);

export interface IButtonBaseProps {
  children: string;
  backgroundColor: string;
  backgroundColorHover: string;
  border?: string;
  borderHover?: string;
  fontColor?: string;
  fontColorHover?: string;
  onClick?: () => void;
}

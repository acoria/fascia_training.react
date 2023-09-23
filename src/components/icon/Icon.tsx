import { IIconProps } from "./IIconProps";

export const Icon: React.FC<IIconProps> = (props) => {
  return (
    <span
      style={props.style}
      className={`material-symbols-outlined ${props.className}`}
      onClick={props.onClick}
    >
      {props.icon}
    </span>
  );
};

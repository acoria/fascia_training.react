import { CSSProperties } from "react";
import { MaterialIcons } from "./MaterialIcons";

export interface IIconProps {
  icon: MaterialIcons;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

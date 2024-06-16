import { CSSProperties } from "react";
import classNames from "classnames";
import styles from "./UrlIcon.module.scss";

interface UrlIconProps {
  url: string;
  style?: CSSProperties;
  className?: string;
}

const UrlIcon = ({ url, className, style = {} }: UrlIconProps) => {
  return (
    <div
      className={classNames(styles.icon, className)}
      style={{
        maskImage: `url(${url})`,
        WebkitMaskImage: `url(${url})`,
        ...style,
      }}
    />
  );
};

export default UrlIcon;

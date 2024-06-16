import { PropsWithChildren } from "react";
import styles from "./Avatar.module.scss";

const Avatar = ({ children }: PropsWithChildren) => {
  return <div className={styles.avatar}>{children}</div>;
};

export default Avatar;

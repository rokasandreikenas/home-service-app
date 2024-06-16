import { Outlet } from "react-router-dom";
import Topbar from "./Topbar";
import styles from "./Layout.module.scss";

const RootLayout = () => {
  return (
    <>
      <Topbar />
      <div className={styles.rootContainer}>
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;

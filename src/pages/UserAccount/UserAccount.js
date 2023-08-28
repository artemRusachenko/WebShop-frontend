import OptionList from "./OptionsList/OptionList";
import { Outlet } from "react-router-dom";
import styles from "./UserAccount.module.css";

const UserAccount = () => {
  return (
    <div className={styles["wrapper"]}>
      <OptionList />
      <div className={styles["outlet"]}>
        <Outlet />
      </div>
    </div>
  );
};
//};

export default UserAccount;

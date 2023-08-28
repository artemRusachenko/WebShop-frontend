import styles from "./UserInfo.module.css";
import { useSelector } from "react-redux";
import {
  useGetUserInfoQuery,
  useUpdateUserInfoMutation,
} from "../../../features/usersApiSlice";
import { Fragment, useState } from "react";
import { toast } from "react-toastify";

const UserInfo = () => {
  const { user } = useSelector((slice) => slice.auth);
  const { data, isLoading } = useGetUserInfoQuery(user.userId);
  const [updateUser, { isLoadingPut }] = useUpdateUserInfoMutation();

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    patronymic: "",
    phoneNumber: "",
  });

  const changeDataHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const newUser = { id: user.userId, ...formData };
      await updateUser(newUser).unwrap();
      setFormData({
        name: "",
        surname: "",
        patronymic: "",
        phoneNumber: "",
      });
    } catch (error) {
      toast.error(error.data);
    }

    console.log("done");
  };

  if (!isLoading) {
    return (
      <Fragment>
        <div className={styles["wrapper"]}>
          <h2>My account</h2>
          <div className={styles["userInfoBlock"]}>
            <p>Name: {data.name}</p>
            <p>Surname: {data.surname}</p>
            <p>Patronymic: {data.patronymic}</p>
            <p>Phone number: {data.phoneNumber}</p>
          </div>
        </div>
        <div className={styles["wrapper"]}>
          <h2>Edit account </h2>
          <form
            className={styles["redactUserInfoBlock"]}
            onSubmit={onSubmitHandler}
          >
            <div className={styles["box"]}>
              <p>Name: </p>
              <input
                name="name"
                value={formData.name}
                onChange={changeDataHandler}
                className={styles["input"]}
              />
            </div>
            <div className={styles["box"]}>
              <p>Surname: </p>
              <input
                name="surname"
                value={formData.surname}
                onChange={changeDataHandler}
                className={styles["input"]}
              />
            </div>
            <div className={styles["box"]}>
              <p>Patronymic: </p>
              <input
                name="patronymic"
                value={formData.patronymic}
                onChange={changeDataHandler}
                className={styles["input"]}
              />
            </div>
            <div className={styles["box"]}>
              <p>Phone number: </p>
              <input
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={changeDataHandler}
                className={styles["input"]}
              />
            </div>
            <button className={styles["button"]} type="submit">
              Redact
            </button>
          </form>
        </div>
      </Fragment>
    );
  }
};

export default UserInfo;

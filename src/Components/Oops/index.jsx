import React from "react";
import { useNavigate } from "react-router-dom";
import { UnServicableImg } from "../../assets/images/index";
import styles from "./style.module.css";
const Oops = ({ setStoreID }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    // localStorage.removeItem("cart_data");
    if (setStoreID) {
      setStoreID(-1);
    }
    navigate("/home");
  };
  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <img src={UnServicableImg} className={styles.img} />
        <p>
          <b>Oops!</b> Something Went Wrong.
        </p>
      </div>
      <div className={styles.home_btn}>
        <button type="button" className={styles.btn} onClick={handleClick}>
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default Oops;

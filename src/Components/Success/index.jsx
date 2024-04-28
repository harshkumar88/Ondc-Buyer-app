import React from "react";
import { useNavigate } from "react-router-dom";
import { SuccessImg } from "../../assets/images/index";
import styles from "./style.module.css";
const Success = ({ content }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.removeItem("cart_data");
    navigate("/home");
  };
  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <img src={SuccessImg} className={styles.img} />
        <p className={styles.success_msg}>
          <b>Success!</b> {content}.
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

export default Success;

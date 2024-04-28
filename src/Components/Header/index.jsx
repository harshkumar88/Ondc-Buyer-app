import React from "react";
import styles from "./style.module.css";
import { AddressIcon, BackIcon, CloseIcon, HomeIcon } from "../../assets/icons";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../App";
import Popup from "../Popup";

const Header = ({ label, handleNavigate, isMain }) => {
  const appContext = useContext(AppContext);
  const { consumerDetails } = appContext;

  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(true);
  };

  const renderLocationDetails = (obj) => {
    let locationString = "";
    if (obj?.address) {
      locationString += obj?.address;
      if (obj?.flat_no || obj?.block || obj?.state || obj?.city)
        locationString += ", ";
    }
    if (obj?.flat_no) {
      locationString += obj.flat_no;
      if (obj?.block) locationString += ", ";
    }
    if (obj?.block) {
      locationString += obj.block;
      if (obj?.city) locationString += ", ";
    }
    if (obj?.city) {
      locationString += obj.city;
      if (obj?.state) locationString += ", ";
    }
    if (obj?.state) {
      locationString += obj?.state;
    }

    return locationString;
  };

  return (
    <div className={styles.navbar}>
      <span className={styles.back_icon}>
        <div className={styles.label}>
          {isMain ? (
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA8cTn1-RRcQ_T4-cf40vYi4sjFEADIdog1TqwvXO3kw&s"
              className={styles.profile_img}
              onClick={handleNavigate}
            />
          ) : (
            <BackIcon
              onClick={handleNavigate}
              className={styles.back_arrow_icon}
            />
          )}
          <h4 className={styles.heading}>{label}</h4>
        </div>
        {isMain && (
          <>
            <span className={styles.navbar_label}>
              <AddressIcon onClick={handleClick} />
            </span>
            {show && (
              <Popup>
                <div className={styles.address_header}>
                  <h4>Address Info</h4>
                  <CloseIcon onClick={() => setShow(false)} />
                </div>
                <div className={styles.bottom_left}>
                  <div className={styles.bottom_text}>
                    <HomeIcon />
                    <span className={styles.text_bolder}>
                      {consumerDetails?.address?.pincode} - Home
                    </span>
                  </div>
                  <div className={styles.bottom_text}>
                    <span className={styles.text_bold}>
                      {renderLocationDetails(consumerDetails?.address)}
                    </span>
                  </div>{" "}
                  <div className={styles.bottom_text}>
                    <span className={styles.text_light}>
                      {consumerDetails?.name} ({consumerDetails?.phone})
                    </span>
                  </div>
                </div>
              </Popup>
            )}
          </>
        )}
      </span>
    </div>
  );
};

export default Header;

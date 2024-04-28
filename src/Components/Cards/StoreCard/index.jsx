import React from "react";
import styles from "./style.module.css";
import Label from "../../utils/Label";
import {
  CashbackIcon,
  CircleIcon,
  DeliveryIcon,
  RatingIcon,
  ShoppingBagIcon,
} from "../../../assets/icons";
import { cardData } from "./seed";

function StoreCard({ item }) {
  return (
    <div className={styles.card_container}>
      <div className={styles.info_container}>
        <Label content={item?.name} style={"label_bold"} />
        <Label content={item?.short_desc} style={"label_small"} />
        <div className={styles.rating_container}>
          <span className={styles.flex_center}>
            <RatingIcon className={styles.yellow_star} /> {cardData?.rating}
          </span>
          <span className={styles.flex_center}>
            <ShoppingBagIcon className={styles.orange_star} />
            <span className={styles.subs_color}>{cardData?.subsc}</span>
          </span>
        </div>

        <div className={styles.rating_container}>
          <span className={styles.flex_center_address}>
            {item?.address?.state}
          </span>
          <CircleIcon className={styles.circle_icon} />
          <span className={styles.flex_center_address}>
            {item?.address?.locality}
          </span>
        </div>
      </div>
      <div className={styles.img_container}>
        <img src={item?.images?.[0]} className={styles.img} />
      </div>
    </div>
  );
}

export default StoreCard;

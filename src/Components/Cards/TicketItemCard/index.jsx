import React from "react";
import styles from "./style.module.css";
import Label from "../../utils/Label";

function TicketItemCard({ matchingItem, data }) {
  return (
    <div className={styles.outer_container}>
      <div className={styles.card_container}>
        <div className={styles.info_container}>
          <Label content={matchingItem?.name} style={"label_bold"} />

          <div className={styles.rating_container}>
            <span className={styles.flex_center_address}>
              x {matchingItem?.quantity}
            </span>
          </div>
        </div>
        <div className={styles.img_container}>
          <img src={matchingItem?.images?.[0]} className={styles.img} />
        </div>
      </div>
      {matchingItem?.defective_images &&
        matchingItem?.defective_images?.length > 0 && (
          <>
            <p className={styles.defective_text}>DEFECTIVE IMAGES</p>
            <div className={styles.ticket_img_container}>
              {matchingItem?.defective_images?.map((img, idx) => (
                <img
                  key={`ticket-image-${idx}`}
                  src={img}
                  className={styles.product_img}
                />
              ))}
            </div>
          </>
        )}
    </div>
  );
}

export default TicketItemCard;

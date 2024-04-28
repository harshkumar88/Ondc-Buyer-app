import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import Label from "../../utils/Label";
import Button from "../../utils/Button";
import { handleAddItem, handleRemoveItem } from "../../../Handlers/handler";
import { useNavigate } from "react-router-dom";
import ImageSlider from "../../ImageSlider";
import sliderStyles from "./slider.module.css";

function ProductCard(props) {
  const {
    content,
    totalItem,
    setTotalItem,
    setStoreItems,
    storeItems,
    setAlert,
    storeId,
    setItemCount,
  } = props;
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(0);
  const buttonStyles = content?.in_stock ? styles.add_btn : styles.disabled_btn;

  useEffect(() => {
    if (storeItems?.[content?.id]?.quantity) {
      setQuantity(storeItems?.[content?.id]?.quantity);
    } else {
      setQuantity(0);
    }
  }, [content, storeItems]);

  const handleCall = () => {
    handleAddItem(
      quantity,
      content,
      setAlert,
      setQuantity,
      setTotalItem,
      totalItem,
      storeItems,
      setStoreItems
    );
    setItemCount((current) => current + 1);
  };
  const handleClick = () => {
    navigate(`/product/detail/${storeId}/${content?.id}`);
  };

  const handleAddCall = () => {
    handleAddItem(
      quantity,
      content,
      setAlert,
      setQuantity,
      setTotalItem,
      totalItem,
      storeItems,
      setStoreItems
    );

    setItemCount((current) => current + 1);
  };

  const handleRemoveCall = () => {
    handleRemoveItem(
      quantity,
      content,
      setQuantity,
      setTotalItem,
      totalItem,
      storeItems,
      setStoreItems
    );
    setItemCount((current) => current + 1);
  };

  return (
    <div
      className={styles.container}
      style={{
        opacity: content?.in_stock === false && ".6",
      }}
    >
      <div className={styles.image_container}>
        <ImageSlider styles={sliderStyles}>
          {content?.images?.map((image, index) => {
            return (
              <img
                key={index}
                src={image}
                alt={content?.name}
                onClick={handleClick}
              />
            );
          })}
        </ImageSlider>

        {content?.price?.discount_per > 0 && (
          <div className={styles.ribbon_div}>
            <p className={styles.ribbon_text}>
              {content?.price?.discount_per}% OFF
            </p>
          </div>
        )}
      </div>
      <div className={styles.label_div}>
        <Label content={content?.name} style={styles.product_label} />
        <span className={styles.weight_label}>
          {content?.pack_details?.value}&nbsp;
          {content?.pack_details?.unit}
        </span>
      </div>
      <div className={styles.add_container}>
        <div className={styles.price_wrap}>
          <span className={styles.item_price_offered}>
            ₹{content?.price?.value}
          </span>
          {content?.price?.discount_per > 0 && (
            <span className={styles.item_price}>₹{content?.price?.mrp}</span>
          )}
        </div>
        <div className={styles.add_btn_wrap}>
          {quantity === 0 ? (
            <Button
              type="button"
              content={content?.in_stock ? "Add" : "Out of stock"}
              style={buttonStyles}
              callbackfn={handleCall}
              disabled={content?.in_stock === false}
            />
          ) : (
            <Button
              type="button"
              style={styles.add_item_btn}
              content={
                <>
                  <span className={styles.item_btn} onClick={handleRemoveCall}>
                    -
                  </span>
                  <span className={styles.quantity_item}>{quantity}</span>
                  <span
                    className={
                      quantity >= content?.pack_details?.max_quantity
                        ? styles.diabled_btn
                        : `${styles.item_btn} ${styles.item_add} `
                    }
                    onClick={handleAddCall}
                  >
                    +
                  </span>
                </>
              }
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

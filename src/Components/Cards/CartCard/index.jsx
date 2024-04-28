import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import Label from "../../utils/Label";
import Button from "../../utils/Button";

function CartCard(props) {
  const {
    content,
    setStoreItems,
    storeItems,
    setAlert,
    setTriggerRemove,
    edit,
    setItemCount,
  } = props;

  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    setQuantity(content?.quantity || 0);
  }, [content]);

  const handleAddItem = () => {
    if (quantity + 1 > content?.pack_details?.max_quantity) {
      setAlert(
        `Cannot add more than ${content?.pack_details?.max_quantity} items`
      );
      return;
    }
    setQuantity((current) => current + 1);
    handleAddItemInStore(quantity + 1);
    if (setItemCount) {
      setItemCount((current) => current + 1);
    }
  };

  const handleRemoveItem = () => {
    setQuantity((current) => current - 1);
    setTriggerRemove((current) => current + 1);
    handleAddItemInStore(quantity - 1);
    if (setItemCount) {
      setItemCount((current) => current + 1);
    }
  };

  const handleAddItemInStore = (quantity) => {
    if (quantity === 0) {
      const { [content?.id]: removedItem, ...rest } = storeItems;
      setStoreItems({ ...rest });
      return;
    }

    let dict = {
      ...storeItems,
      [content?.id]: {
        name: content?.name,
        in_stock: true,
        id: content?.id,
        images: content?.images,
        price: {
          item_price: content?.price?.item_price,
          final_price: content?.price?.final_price,
          mrp: content?.price?.mrp,
        },
        quantity: quantity,
        pack_details: {
          unit: content?.pack_details?.unit,
          value: content?.pack_details?.value,
          max_quantity: content?.pack_details?.max_quantity,
        },
        category: content?.category,
      },
    };

    setStoreItems({ ...dict });
  };

  return (
    <div
      className={
        content?.error?.found && content?.error?.code === 50002
          ? `${styles.container} ${styles.out_wrapper}`
          : styles.container
      }
    >
      {content?.error?.found && content?.error?.code === 50003 && (
        <span className={styles.ribbon_text}>{content?.error?.message}</span>
      )}

      {content?.error?.found && content?.error?.code === 50002 && (
        <span className={styles.out_of_stock}>{content?.error?.message}</span>
      )}

      <div className={styles.card_wrapper}>
        <div className={styles.image_container}>
          <img src={content?.images[0]} className={styles.img} />
        </div>
        <div className={styles.card_price_container}>
          <div className={styles.label_div}>
            <Label content={content?.name} style={styles.product_label} />
            <span className={styles.weight_label}>
              {content?.pack_details?.value}
              {"  "}
              {content?.pack_details?.unit}
            </span>
          </div>

          <div className={styles.price_wrap}>
            <span className={styles.item_price_offered}>
              ₹{content?.price?.final_price}
            </span>
            {/* <span className={styles.item_price}>
              ₹{content?.price?.final_price}
            </span> */}
          </div>
        </div>{" "}
      </div>
      <div className={styles.add_container}>
        <div className={styles.add_btn_wrap}>
          {edit && content?.error?.code !== 50002 ? (
            <Button
              type="button"
              style={styles.add_item_btn}
              content={
                <>
                  <span className={styles.item_btn} onClick={handleRemoveItem}>
                    -
                  </span>
                  <span className={styles.quantity_item}>{quantity}</span>
                  <span
                    className={
                      quantity >= content?.pack_details?.max_quantity
                        ? styles.diabled_btn
                        : `${styles.item_btn} ${styles.item_add} `
                    }
                    onClick={handleAddItem}
                  >
                    +
                  </span>
                </>
              }
            />
          ) : (
            <Button
              type="button"
              style={styles.add_item_btn_2}
              content={
                <span className={styles.quantity_item}>{`x ${quantity}`}</span>
              }
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default CartCard;

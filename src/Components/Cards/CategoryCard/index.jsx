import React from "react";
import styles from "./style.module.css";
import Label from "../../utils/Label";
function CategoryCard(props) {
  const { content, index, setCategory, category } = props;
  function handleClick() {
    setCategory(content?.name);
  }
  return (
    <div className={styles.container} onClick={handleClick}>
      <div className={styles.img_container}>
        <img
          src={content?.image}
          className={
            content?.name === category ? ` ${styles.active_img}` : styles.img
          }
        />
      </div>
      <Label
        content={content?.name}
        style={
          content?.name === category
            ? styles.active_label_name
            : styles.label_name
        }
      />
    </div>
  );
}

export default CategoryCard;

import React from "react";
import styles from "./style.module.css";
import { BackIcon, CloseIcon, SearchIcon } from "../../assets/icons";
import { useNavigate } from "react-router-dom";

function Search(props) {
  const {
    placeholder,
    type,
    setSearchText,
    value,
    onFocus,
    isSearch,
    isBack,
    onBlur,
  } = props;
  const handleChange = (e) => {
    if (setSearchText) {
      setSearchText(e.target.value);
    }
  };
  const navigate = useNavigate();

  const handleFocus = () => {
    if (isSearch && isSearch !== undefined) {
      navigate("/search");
    }
    if (onFocus) {
      onFocus();
    }
  };

  const handleBlur = () => {
    if (onBlur) {
      onBlur();
    }
  };

  const handleBack = () => {
    navigate("/home");
  };

  const handleClear = () => {
    if (setSearchText) {
      setSearchText("");
    }
  };
  return (
    <div className={styles.search_bar}>
      {isBack ? (
        <BackIcon className={styles.icon_style} onClick={handleBack} />
      ) : (
        <SearchIcon className={styles.icon_style} />
      )}
      <input
        type={type}
        placeholder={placeholder}
        className={styles.search_input}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
      />
      {value && value?.length > 0 && (
        <CloseIcon className={styles.close_icon_style} onClick={handleClear} />
      )}
    </div>
  );
}

export default Search;

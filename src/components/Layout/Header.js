import React from "react";
import classes from "./Header.module.css";
import meals from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h2>McDono</h2>
        <HeaderCartButton onClick={props.onClick}></HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={meals} alt="food" />
      </div>
    </>
  );
};

export default Header;

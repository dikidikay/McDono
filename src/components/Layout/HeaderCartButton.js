import React, { useContext, useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [btnIs, setBtnIs] = useState(false);
  const ctx = useContext(CartContext);

  const { items } = ctx;

  const totalItems = items.reduce((total, item) => {
    return total + item.amount;
  }, 0);

  const btnClasses = `${classes.button}  ${btnIs ? classes.bump : ""} `;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIs(true);

    const timer = setTimeout(() => {
      setBtnIs(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default HeaderCartButton;

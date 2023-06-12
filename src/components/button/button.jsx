import React from "react";
import styles from './button.module.css'

const Button = (props) => {
    const padding = props.padding
    return <button className={styles[`${padding}`]}>{props.children}</button>
}
export default Button;

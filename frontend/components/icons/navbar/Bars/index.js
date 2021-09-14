import styles from "./bars.module.scss";

function Bars({ className }) {
  return <div className={`${styles.icon} ${className}`}></div>;
}

export default Bars;

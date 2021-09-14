import styles from "./bars.module.scss";

function Bars({ className }) {
  return <div class={`${styles.icon} ${className}`}></div>;
}

export default Bars;

import styles from "./ProgressBar.module.css";

const ProgressBar = ({ percent, ...props }) => {
  return (
    <div className={styles.ProgressBarContainer}>
      <div
        className={styles.ProgressBarBar}
        style={{
          width: `${percent}%`,
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;

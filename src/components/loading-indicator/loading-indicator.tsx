"use client";
import styles from "./styles.module.css";

interface LoadingIndicatorProps {
  loadTime: number;
}

export function LoadingIndicator({ loadTime }: LoadingIndicatorProps) {
  return (
    <div className={styles.loading_indicator}>
      <p>
        Loading
        <span className={styles.ellipsis_container}>
          <span className={styles.ellipsis}>...</span>
        </span>
      </p>
      <div className={styles.progress_bar_container}>
        <div
          className={styles.progress_bar}
          style={{ animationDuration: `${loadTime}ms` }}
        ></div>
      </div>
    </div>
  );
}

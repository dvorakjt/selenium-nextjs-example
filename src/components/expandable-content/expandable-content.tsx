"use client";
import { useState, type ReactNode } from "react";
import styles from "./styles.module.css";

interface ExpandableContentProps {
  children?: ReactNode;
}

export function ExpandableContent({ children }: ExpandableContentProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles.container}>
      <div className={isExpanded ? styles.expanded : styles.collapsed}>
        {children}
      </div>
      <div className={styles.button_container}>
        <button
          className={styles.button}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Show less" : "Show more"}
        </button>
      </div>
    </div>
  );
}

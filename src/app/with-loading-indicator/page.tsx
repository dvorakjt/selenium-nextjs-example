"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { LoadingIndicator } from "@/components/loading-indicator";
import styles from "./styles.module.css";

export default function WithLoadingIndicator() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 5050);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <main className={styles.with_loading_indicator}>
      {isLoaded ? (
        <p style={{ fontSize: "18px" }}>Loaded successfully!</p>
      ) : (
        <LoadingIndicator loadTime={5000} />
      )}
      <Link href="/" style={{ position: "absolute", bottom: "0", right: "0" }}>
        Back to Home
      </Link>
    </main>
  );
}

import Link from "next/link";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <main className={styles.home}>
      <h1>Welcome to My Site</h1>
      <nav>
        <Link href="/with-expandable-content">To Expandable Content Page</Link>
        <Link href="/with-loading-indicator">To Loading Indicator Page</Link>
      </nav>
    </main>
  );
}

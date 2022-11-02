import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1 className={styles.title}>
          Your First Solana Program with{" "}
          <a href="https://alchemy.com/solana/?a=d0c917f7ef">Alchemy</a>!
        </h1>
      </div>
    </div>
  );
}

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="container"> 
      <h1 className={styles.titulo}>Helo World</h1>
    </div>
  );
}

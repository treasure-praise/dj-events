import Link from "next/link";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; DJ Events {currentYear}</p>
      <p>
        <Link href="/about">About this project</Link>
      </p>
    </footer>
  );
};

export default Footer;

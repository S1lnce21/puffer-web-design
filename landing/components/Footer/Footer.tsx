import styles from '../Footer/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© 2025 FRZN. All rights reserved.</p>
      <nav className={styles.links}>
        <a href="#">Instagram</a>
        <a href="#">Telegram</a>
        <a href="#">Privacy</a>
      </nav>
    </footer>
  );
}
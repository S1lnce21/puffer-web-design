import styles from '../Header/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>FRZN</div>

      <nav className={styles.nav}>
        <a href="#">[ CARALOG ]</a>
        <a href="#">[ PUFFERS ]</a>
        <a href="#">[ BOOTS ]</a>
        <a href="#">[ CARALOG ]</a>
        <a href="#">[ PUFFERS ]</a>
      </nav>

      <div className={styles.icons}>
        <button className={styles.iconBtn} aria-label="Search">
          <svg viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="7" />
            <line x1="16.5" y1="16.5" x2="21" y2="21" />
          </svg>
        </button>
        <button className={styles.iconBtn} aria-label="Cart">
          <svg viewBox="0 0 24 24">
            <path d="M3 6h18l-1.5 12H4.5L3 6z" />
            <path d="M8 6V4a4 4 0 0 1 8 0v2" />
          </svg>
        </button>
      </div>
    </header>
  );
}
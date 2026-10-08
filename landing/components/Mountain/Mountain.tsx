import Image from 'next/image';
import styles from '../Mountain/Mountain.module.css';

export default function Mountain() {
  return (
    <section className={styles.section}>
      <div className={styles.background}>
        <Image
          src="/mountain.jpg"
          alt="Snowy mountain"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      <div className={styles.textLeft}>
        <p>
          FRZN WAS BORN IN
          THE PURSUIT OF COLD.
          NOT AS A TREND, BUT AS
          A RESPONSE.
        </p>
        <p className={styles.textSmall}>[ PROCEED / ALTITUDE / APPLIED ]</p>
      </div>

      <div className={styles.textRight}>
        <p>
          FOR THOSE WHO
          CLIMB, NOT FOR
          THE CROWD.
        </p>
      </div>

      <div className={styles.tagline}>
        <h2>BUILT FOR COLD</h2>
        <h2>MADE FOR HEIGHT</h2>
        <h2>FORGED TO LAST</h2>
      </div>
    </section>
  );
}
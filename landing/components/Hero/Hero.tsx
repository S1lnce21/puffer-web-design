import styles from '../Hero/Hero.module.css';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <span className={styles.label}>
          [ SERIES: STASIS MK. I ] — [ SERIES ]
        </span>

        <h1 className={styles.title}>
          COLLECTION<br />ARTIC 01™
        </h1>

        <div className={styles.sizeBlock}>
          <span className={styles.label}>SIZE</span>
          <div className={styles.sizeRow}>
            <span>S</span>
            <span className={styles.active}>M</span>
            <span>L</span>
            <span>XL</span>
          </div>
        </div>

        <div className={styles.colorBlock}>
          <span className={styles.label}>COLOUR</span>
          <div className={styles.colorRow}>
            <span className={styles.active}>WHITE</span>
            <span>SILVER</span>
          </div>
        </div>

        <div className={styles.ctaBlock}>
          <button className={styles.ctaCircle} aria-label="Add to cart">
            <svg viewBox="0 0 24 24">
              <line x1="6" y1="18" x2="18" y2="6" />
              <polyline points="9,6 18,6 18,15" />
            </svg>
          </button>
          <div className={styles.ctaText}>
            <span className={styles.small}>ADD TO CART</span>
            <span className={styles.price}>$899.99</span>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.thumbs}>
          <div className={styles.thumb}>
            <Image
              src="/thumb-1.jpg"
              alt="Artic 01 back view"
              fill
              sizes="160px"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className={styles.thumb}>
            <Image
              src="/thumb-2.jpg"
              alt="Artic 01 front view"
              fill
              sizes="160px"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>

        <div className={styles.socialRow}>
          <a href="#" className={styles.socialBtn} aria-label="Instagram">
            <Image src="/instagram.png" alt="Instagram" width={14} height={14} />
          </a>
          <a href="#" className={styles.socialBtn} aria-label="Facebook">
            <Image src="/facebook.png" alt="Facebook" width={14} height={14} />
          </a>
          <a href="#" className={styles.socialBtn} aria-label="Twitter">
            <Image src="/twitter.png" alt="Twitter" width={14} height={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
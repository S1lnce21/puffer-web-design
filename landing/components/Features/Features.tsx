import styles from '../Features/Features.module.css';
import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'AURORA SILVER',
    subtitle: 'REFLECTIVE PUFFER JACKET',
    price: '$999.99',
    colors: ['WHITE', 'BLUE'],
    image: '/products/aurora-silver.jpg',
  },
  {
    id: 2,
    name: 'ORBIT SILVER',
    subtitle: 'HIGH-GLOSS PUFFER',
    price: '$1,299.99',
    colors: ['SILVER'],
    image: '/products/orbit-silver.jpg',
  },
  {
    id: 3,
    name: 'STEALTH BLACK',
    subtitle: 'HEAVY SHIELD PUFFER',
    price: '$1,199.99',
    colors: ['BLACK', 'WHITE'],
    image: '/products/stealth-black.jpg',
  },
  {
    id: 4,
    name: 'GLACIER WHITE',
    subtitle: 'INSULATED PUFFER JACKET',
    price: '$1,299.99',
    colors: ['GREY'],
    image: '/products/glacier-white.jpg',
  },
  {
    id: 5,
    name: 'POLAR GLOSS',
    subtitle: 'BLUE PUFFER JACKET',
    price: '$899.99',
    colors: ['BLUE GLOSS'],
    image: '/products/polar-gloss.jpg',
  },
  {
    id: 6,
    name: 'STEALTH BLACK',
    subtitle: 'HEAVY PUFFER JACKET',
    price: '$1,199.99',
    colors: ['NAVY BLUE', 'BLACK'],
    image: '/products/stealth-black-2.jpg',
  },
  {
    id: 7,
    name: 'ICEFIELD BLUE',
    subtitle: 'TECH PUFFER JACKET',
    price: '$999.99',
    colors: ['BLUE'],
    image: '/products/icefield-blue.jpg',
  },
  {
    id: 8,
    name: 'POLAR WHITE',
    subtitle: 'SHELL PUFFER JACKET',
    price: '$1,499.99',
    colors: ['WHITE'],
    image: '/products/polar-white.jpg',
  },
];

export default function Features() {
  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <h2 className={styles.title}>NEW COLLECTION</h2>

        <div className={styles.meta}>
          <span>[ NEW COLLECTION ]</span>
          <span>[ PUFFERS ]</span>
        </div>

        <div className={styles.meta}>
          <span>PUFFER JACKETS</span>
          <span>DUAL LAYER</span>
          <span>GLOSS SERIES</span>
          <span>EXTREME COLD LINE</span>
        </div>

        <button className={styles.filters}>FILTERS</button>
      </div>

      <div className={styles.grid}>
        {products.map((p) => (
          <article key={p.id} className={styles.card}>
            <div className={styles.image}>
              <Image
                src={p.image}
                alt={p.name}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.info}>
              <h3 className={styles.name}>{p.name}</h3>
              <p className={styles.subtitle}>{p.subtitle}</p>
              <p className={styles.color}>
                {p.colors.map((c) => (
                  <span key={c}>● {c}</span>
                ))}
              </p>
              <p className={styles.price}>{p.price}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
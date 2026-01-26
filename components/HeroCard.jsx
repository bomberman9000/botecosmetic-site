// components/HeroCard.jsx
import Link from 'next/link';
import Image from 'next/image';
import styles from './HeroCard.module.css';

export default function HeroCard({ title, subtitle, image, href, label }) {
  return (
    <Link href={href} className={styles.heroCard}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={title}
          fill
          className={styles.heroImage}
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
        <div className={styles.overlay} />
      </div>
      
      <div className={styles.content}>
        {label && <span className={styles.label}>{label}</span>}
        <h2 className={styles.title}>{title}</h2>
        <span className={styles.link}>{subtitle}</span>
      </div>
    </Link>
  );
}

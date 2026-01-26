// components/ProductCard.jsx
import Link from 'next/link';
import Image from 'next/image';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.slug}`} className={styles.productCard}>
      <div className={styles.imageWrapper}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          className={styles.productImage}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{product.name}</h3>
        <p className={styles.description}>{product.description}</p>
        <div className={styles.footer}>
          <span className={styles.price}>{product.price}₽</span>
          <span className={styles.link}>Подробнее →</span>
        </div>
      </div>
    </Link>
  );
}

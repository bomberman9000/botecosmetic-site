# Animation Examples

## Home Page

```tsx
import RevealOnScroll from "@/components/RevealOnScroll";
import AnimatedText from "@/components/AnimatedText";
import ParallaxCard from "@/components/ParallaxCard";

export default function Home() {
  return (
    <>
      <section className="hero">
        <AnimatedText text="VIA LABOTE" type="gradient" className="text-6xl" />
      </section>

      <section className="cards">
        <RevealOnScroll animation="slide-up" delay={0}>
          <ParallaxCard>
            <div>Card 1</div>
          </ParallaxCard>
        </RevealOnScroll>

        <RevealOnScroll animation="slide-up" delay={200}>
          <ParallaxCard>
            <div>Card 2</div>
          </ParallaxCard>
        </RevealOnScroll>
      </section>
    </>
  );
}
```

## Stats With Counters

```tsx
import AnimatedCounter from "@/components/AnimatedCounter";
import RevealOnScroll from "@/components/RevealOnScroll";

<RevealOnScroll animation="fade">
  <div className="stats">
    <div>
      <AnimatedCounter end={5000} suffix="+" />
      <p>Clients</p>
    </div>
    <div>
      <AnimatedCounter end={15} suffix=" years" />
      <p>On the market</p>
    </div>
    <div>
      <AnimatedCounter end={98} suffix="%" />
      <p>Positive reviews</p>
    </div>
  </div>
</RevealOnScroll>
```

## Magnetic CTA Button

```tsx
import MagneticButton from "@/components/MagneticButton";

<MagneticButton className="px-8 py-4 bg-gold text-white">
  Take the test
</MagneticButton>
```

## Product Grid

```tsx
<div className="product-grid">
  {products.map((product, index) => (
    <RevealOnScroll key={product.id} animation="zoom" delay={index * 100}>
      <ParallaxCard>
        <ProductCard product={product} />
      </ParallaxCard>
    </RevealOnScroll>
  ))}
</div>
```

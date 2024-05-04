import CardSection from "@/components/CardSection";
import CategorySection from "@/components/CategorySection";
import HeroSection from "@/components/HeorSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="container py-8">
        <div className="grid grid-cols-12 py-4">
          <CategorySection />
          <CardSection />
        </div>
      </section>

    </>

  );
}

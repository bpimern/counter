import Header from "@/components/Header";
import Counter from "@/components/Counter";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="max-w-2xl mx-auto">
        <Counter />
      </div>
      <Banner />
    </main>
  );
}

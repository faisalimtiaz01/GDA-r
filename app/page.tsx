import About from "@/components/About";
import HomeSection from "@/components/HomeSection";
import Discounts from "@/components/Discounts";
import SocialProof from "@/components/SocialProof";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="">
      <HomeSection />
      <SocialProof />
      <About />
      <Discounts />
      <Banner />
      <Footer />
    </main>
  );
}

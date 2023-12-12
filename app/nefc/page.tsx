import About, { NfaAbout } from  "@/components/About";
import HomeSection, { NfaHomeSection } from "@/components/HomeSection";
import Discounts, { NfaDiscounts } from "@/components/Discounts";
import SocialProof, { NfaSocialProof } from "@/components/SocialProof";
import Banner, { NfaBanner } from "@/components/Banner";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="">
      <NfaHomeSection />
      <NfaSocialProof />
      <NfaAbout />
      <NfaDiscounts />
      <NfaBanner />
      <Footer />
    </main>
  );
}

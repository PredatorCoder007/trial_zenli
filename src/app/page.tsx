import FeaturedCategories from "@/components/FeaturedCategories";
import HeroSection from "@/components/HeroSection";
import TimeLine from "@/components/TimeLine";
import JoinPlatform from "@/components/JoinPlatform";
import Footer from "@/components/Footer";
import { Subscribe } from "@/components/Subscribe";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { IconTimeline } from "@tabler/icons-react";
import { FeaturesPage } from "@/components/FeaturesPage";
import { OurPartner } from "@/components/OurPartner";



export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2]">
        
        <HeroSection/>
        <OurPartner/>
        <FeaturedCategories/>
        <TimeLine/>
        <FeaturesPage/>
        <Subscribe/>
        

    </main>
  );
}

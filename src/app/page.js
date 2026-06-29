import AdvertisementSection from "@/components/homepage/AdvertisementSection";
import Banner from "@/components/homepage/Banner";
import WhyChooseUs from "@/components/homepage/ChooseUsSection";
import LatestTickets from "@/components/homepage/LatestTicket";
import PopularRoutes from "@/components/homepage/PopularRoute";

export default function Home() {
  return (
    <div>
      <Banner />
      <AdvertisementSection />
      <LatestTickets />
      <PopularRoutes />
      <WhyChooseUs />
    </div>
  );
}

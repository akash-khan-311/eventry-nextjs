import EventDetails from "@/components/Details/EventDetails";
import EventVenue from "@/components/Details/EventVenue";
import HeroSection from "@/components/Details/HeroSection";

const DetailsPage = ({ params: { id } }) => {
  return (
    <>
      <HeroSection />

      <section className="container">
        <div className="grid grid-cols-5 gap-12 my-12">
          <EventDetails />
          <EventVenue />
        </div>
      </section>
    </>
  );
};
export default DetailsPage;

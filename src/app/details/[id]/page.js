import EventDetails from "@/components/Details/EventDetails";
import EventVenue from "@/components/Details/EventVenue";
import HeroSection from "@/components/Details/HeroSection";
import { getEventById } from "@/db/queries";

const EventDetailsPage = async({ params: { id } }) => {
  const eventInfo  = await getEventById(id);
  console.log(eventInfo)
  return (
    <>
      <HeroSection eventInfo={eventInfo} />

      <section className="container">
        <div className="grid grid-cols-5 gap-12 my-12">
          <EventDetails details={eventInfo?.details} swags={eventInfo?.swags} />
          <EventVenue  location={eventInfo?.location} />
        </div>
      </section>
    </>
  );
};
export default EventDetailsPage;

import { getAllEvents } from "@/db/queries";
import EventCard from "./EventCard";

const EventList = async () => {
    const events = await getAllEvents();
    console.log(events)

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">

            {/* Event Card */}

            {
                events.map(event => <EventCard event={event} key={event.id} />)
            }


        </div>


    )
}
export default EventList;
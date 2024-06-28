import EventList from "@/components/Landing/EventList";
import Header from "@/components/Landing/Header";

export default function Home() {
  return (
    <section className="container mx-auto">
      <Header />
      <EventList />
    </section>
  );
}

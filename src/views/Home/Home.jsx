import CardsContainer from "../../components/CardsContainer/CardsContainer";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import Stack from "../../components/Stack/Stack";
import Contact from "../../components/Contact/Contact";

export default function Home() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 lg:px-8">
        <Hero></Hero>
      </div>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <CardsContainer></CardsContainer>
      </div>
      <div className="relative isolate px-6 pt-32 lg:px-8">
        <Stack />
      </div>
      <div className="relative isolate pt-32">
        <Contact />
      </div>
      <div className="relative isolate px-6 lg:px-8 bg-yellow-50">
        <Footer></Footer>
      </div>
    </div>
  );
}

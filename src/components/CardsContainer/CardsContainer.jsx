import CardDoggies from "../Card/CardDoggies";
import CardHolocruxe from "../Card/CardHolocruxe";
import CardRick from "../Card/CardRick";

export default function CardsContainer() {
  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 ">
      <CardDoggies></CardDoggies>
      <CardHolocruxe></CardHolocruxe>
      <CardRick></CardRick>
    </div>
  );
}

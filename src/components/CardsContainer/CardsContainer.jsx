import Card from "../Card/Card";

export default function CardsContainer() {
  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 ">
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
  );
}

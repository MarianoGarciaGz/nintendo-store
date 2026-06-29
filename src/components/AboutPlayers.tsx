import product from "@/data/product.json";

const { aboutPlayers } = product;

export default function AboutPlayers() {
  return (
    <div className="text-sm">
      <h2 className="font-semibold">{aboutPlayers.heading}</h2>
      <p className="text-ink/80">{aboutPlayers.text}</p>
    </div>
  );
}

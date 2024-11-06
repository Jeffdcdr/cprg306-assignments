export default function Item({ name, quantity, category }) {
  return (
    <section className="p-2 m-4 bg-gray-900 max-w-sm">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-sm">Buy {quantity} in {category}</p>
    </section>
  );
}

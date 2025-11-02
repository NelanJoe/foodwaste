export default function SalesCard() {
  return (
    <div className="shadow p-4 rounded-md flex flex-col space-y-2 items-center hover:shadow-lg transition-all duration-150">
      <img
        src="https://images.pexels.com/photos/244394/pexels-photo-244394.jpeg"
        loading="lazy"
        decoding="async"
        width={100}
        height={100}
        className="w-full h-[100px] object-cover rounded-lg"
      />
      <h2>Wortel</h2>
    </div>
  );
}

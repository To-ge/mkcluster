import Map from "./Map";

export default function Home() {
  return (
    <div className="w-full h-full">
      <div className="text-5xl font-bold m-5">Google Maps</div>
      <div className="flex justify-center">
        <Map />
      </div>
    </div>
  );
}

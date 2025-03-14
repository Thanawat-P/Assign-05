import Banner from "@/components/Banner";
import Card from "@/components/Card";

export default function Home() {
  return (
    <main>
      <Banner />
      <div  className="w-full px-4 flex flex-col items-center py-24">
      <div className="grid grid-cols-3 gap-6">
        <Card imgSrc="/party.jpg" venueName="The Bloom Pavilion" />
        <Card imgSrc="/grandtable.jpg" venueName="The Grand Table"/>
        <Card imgSrc="/sparkspace.jpg" venueName="Spark Space" />
      </div>
      </div>
    </main>
  );
}
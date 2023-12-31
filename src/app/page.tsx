import ElectronicsCat from "@/components/ElectronicsCat";
import Hero from "@/components/Hero";
import JeweleryCat from "@/components/JeweleryCat";
import MensClothingCat from "@/components/MensClothingCat";
import Toppicks from "@/components/Toppicks";
import WomensClothingCat from "@/components/WomensClothingCat";


export default function Home() {
  return (
   <>
   
    <section>
      <Hero/>
      <Toppicks/>
      <JeweleryCat/>
      <ElectronicsCat/>
      <MensClothingCat/>
      <WomensClothingCat/>
    </section>
   </>
  )
}

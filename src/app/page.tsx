import ElectronicsCat from "@/components/ElectronicsCat";
import Hero from "@/components/Hero";
import JeweleryCat from "@/components/JeweleryCat";
import MesClothingCat from "@/components/MensClothingCat";
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
      <MesClothingCat/>
      <WomensClothingCat/>
    </section>
   </>
  )
}

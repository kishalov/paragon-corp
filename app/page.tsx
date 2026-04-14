import Hero from "@/components/Hero"
import About from "@/components/About"
import Workflow from "@/components/Workflow"
import Services from "@/components/Services"
import Advantages from "@/components/(old) Advantages"
import Geography from "@/components/(old) SupplyGeography"
import ContactFooter from "@/components/Footer"

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <Workflow />
      <Services />
      {/* <Advantages />
      <Geography /> */}
      <ContactFooter />
    </>
  )
}
import HomePage from "@/components/home/home-page";
import Navbar, { Header } from "@/components/home/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
  <Header/>
   <HomePage  />
     </div>
  );
}

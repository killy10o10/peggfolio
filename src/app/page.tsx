import Landing from "@/components/Landing";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col md:text-lg">
      <Navbar />
      <Landing />
    </main>
  )
}

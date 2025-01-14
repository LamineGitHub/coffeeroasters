import { Outlet } from "react-router-dom"
import { Footer } from "@/components/Footer.tsx"
import { Header } from "@/components/Header.tsx"

export function Layouts() {
  return (
    <div className="mx-6">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

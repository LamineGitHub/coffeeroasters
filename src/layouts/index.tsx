import { Outlet } from "react-router-dom"
import { Footer } from "../components/Footer.tsx"
import { Header } from "../components/Header.tsx"

export function Layouts() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

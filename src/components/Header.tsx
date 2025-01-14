import { Navbar } from "./Navbar.tsx"
import { Link } from "react-router-dom"

export function Header() {
  return (
    <header
      className="mb-10 mt-8 flex items-center justify-between gap-2.5 md:mb-[53px] md:mt-10 lg:my-[43px] desktop:mx-auto">
      <Link to="/">
        <img src="/assets/shared/desktop/logo.svg" width={237} height={27} alt="coffee roasters logo" />
      </Link>

      <Navbar />
    </header>
  )
}

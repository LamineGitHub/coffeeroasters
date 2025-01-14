import { Link, NavLink } from "react-router-dom"
import { SocialMediaLink } from "./SocialMediaLink.tsx"
import { navLinks } from "@/constants"

export function Footer() {
  return (
    <footer
      className="mx-6 mb-[72px] flex flex-col items-center justify-center gap-12 bg-secondary
      py-[54px] md:flex-row md:px-22 md:py-[47px] lg:mb-[88px] desktop:mx-auto">
      <div className="flex flex-col items-center gap-12 md:flex-row md:gap-8 lg:gap-[102px]">
        <Link to="/">
          <img src="/assets/shared/desktop/logo-footer.svg" width={237} height={27} alt="coffee roasters logo" />
        </Link>
        <nav>
          <ul className="flex flex-col items-center justify-center gap-5 md:flex-row md:gap-8">
            {navLinks.map(({ id, href, name }) => (
              <li key={id}>
                <NavLink to={href}>{name}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex items-center justify-center gap-6 md:ml-auto">
        <SocialMediaLink />
      </div>
    </footer>
  )
}

import { useState } from "react"
import clsx from "clsx"
import { NavLink } from "react-router-dom"
import { navLinks } from "@/constants"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav>
      <button
        className="block pt-1 outline-0 focus-visible:ring focus-visible:ring-primary focus-visible:ring-offset-2 sm:hidden"
        onClick={() => setIsOpen(prevState => !prevState)}>
        <img src={`/assets/shared/mobile/icon-${isOpen ? 'close' : 'hamburger'}.svg`} alt="" />
      </button>

      <div
        className={clsx("max-sm:absolute max-sm:left-0 z-10 max-sm:top-[99px] max-sm:w-full" +
          " max-sm:transition-all max-sm:duration-500",
          isOpen ? 'max-sm:opacity-100' : 'max-sm:pointer-events-none max-sm:invisible max-sm:opacity-0')}>
        <ul
          className="flex items-center justify-center gap-8 max-sm:min-h-[calc(100dvh-99px)] max-sm:flex-col max-sm:justify-start max-sm:bg-mobile-menu-gradient max-sm:pt-10">
          {navLinks.map(({ id, href, name }) => (
            <li key={id}>
              <NavLink
                to={href}
                onClick={() => setIsOpen(false)}
                className="max-sm:font-fraunces max-sm:text-2xl max-sm:leading-8 max-sm:text-secondary max-sm:hover:text-primary">
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

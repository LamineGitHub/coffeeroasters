import { useState } from "react"
import clsx from "clsx"
import { Link } from "./Link.tsx"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <nav>
      <button
        className="block pt-1 outline-0 focus-visible:ring focus-visible:ring-primary focus-visible:ring-offset-2 sm:hidden"
        onClick={() => setIsOpen(prevState => !prevState)}>
        <img src={`/assets/shared/mobile/icon-${isOpen ? 'close' : 'hamburger'}.svg`} alt="" />
      </button>

      <div
        className={clsx("max-sm:absolute max-sm:left-0 max-sm:top-[99px] max-sm:w-full" +
          " max-sm:transition-all max-sm:duration-500",
          isOpen ? 'max-sm:opacity-100' : 'max-sm:pointer-events-none max-sm:invisible max-sm:opacity-0')}>
        <ul
          className="flex items-center justify-center gap-8 max-sm:min-h-[calc(100dvh-99px)] max-sm:flex-col max-sm:justify-start max-sm:bg-mobile-menu-gradient max-sm:pt-10">
          <li><Link to="/" title="Home" onClick={closeMenu} /></li>
          <li><Link to="/about" title="About Us" onClick={closeMenu} /></li>
          <li><Link to="/subscribe" title="Create your plan" onClick={closeMenu} /></li>
        </ul>
      </div>
    </nav>
  )
}

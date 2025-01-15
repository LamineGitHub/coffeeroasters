import { useState } from "react"
import { NavLink } from "react-router-dom"
import { AnimatePresence, motion } from "motion/react"
import { navLinks } from "@/constants"
import { useScrollLock } from "@/hooks/useScrollLock"
import { menuContainerVariants, menuItemsVariants, menuItemVariants } from "@/variants"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  useScrollLock(isOpen)

  return (
    <nav>
      {/* Bouton menu mobile */}
      <button
        className="block pt-1 outline-0 focus-visible:ring focus-visible:ring-primary focus-visible:ring-offset-2 sm:hidden"
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        <img src={`/assets/shared/mobile/icon-${isOpen ? "close" : "hamburger"}.svg`} alt="" />
      </button>

      {/* Navigation desktop */}
      <ul className="hidden sm:flex sm:items-center sm:gap-8">
        {navLinks.map(({ id, href, name }) => (
          <li key={id}>
            <NavLink to={href} className="hover:text-primary">
              {name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Menu mobile avec animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuContainerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="absolute left-0 top-24 z-10 w-full overflow-hidden bg-mobile-menu-gradient sm:hidden"
          >
            <motion.ul
              variants={menuItemsVariants}
              className="flex min-h-full flex-col items-center justify-start gap-8 pt-10"
            >
              {navLinks.map(({ id, href, name }) => (
                <motion.li key={id} variants={menuItemVariants}>
                  <NavLink
                    to={href}
                    onClick={() => setIsOpen(false)}
                    className="font-fraunces text-2xl leading-8 text-secondary hover:text-primary"
                  >
                    {name}
                  </NavLink>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

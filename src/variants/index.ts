import type { Variants } from "motion/react"

export const containerVariants: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

export const itemVariants: Variants = {
  hidden: {
    y: 20,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6
    }
  }
}

export const collectionContainerVariants: Variants = {
  hidden: { 
    opacity: 0 
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
}

export const collectionItemVariants: Variants = {
  hidden: { 
    y: 100, 
    opacity: 0 
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
}

export const menuContainerVariants: Variants = {
  hidden: {
    height: 0,
    opacity: 0,
    transition: {
      when: "afterChildren"
    }
  },
  visible: {
    height: "calc(100dvh - 96px)",
    opacity: 1,
    transition: {
      when: "beforeChildren",
      duration: 0.3
    }
  }
}

export const menuItemsVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1
    }
  }
}

export const menuItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0
  }
}

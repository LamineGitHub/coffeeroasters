import { collections } from "@/constants"
import { useWindowSize } from "@/hooks/useWindowsSize"
import { collectionContainerVariants, collectionItemVariants } from "@/variants"
import { motion } from "motion/react"

export function Collection() {
  const { width } = useWindowSize()
  const viewportAmount = width < 768 ? 0.1 : 0.3 // 0.1 pour mobile, 0.3 pour desktop

  return (
    <section className="my-[7.5rem] md:mb-[10.625rem] md:mt-36 desktop:mb-[12.5rem] desktop:mt-[8.5rem]">
      <div className="relative">
        <div className="opacity-50 md:py-5 md:pb-2 lg:py-16 lg:pb-10">
          <h2 className="big-title mb-2 desktop:mb-0">our collection</h2>
        </div>
        <div className="title-gradiant absolute inset-0" />
      </div>

      <motion.div
        variants={collectionContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: viewportAmount }}
        className="mx-[calc(46px-1.5rem)] grid gap-collection md:mx-auto lg:grid-cols-2 desktop:-translate-y-14 desktop:grid-cols-4"
      >
        {collections.map((item) => (
          <CollectionItem key={item.id} {...item} />
        ))}
      </motion.div>
    </section>
  )
}

type CollectionItemProps = {
  image: string
  title: string
  description: string
}

function CollectionItem({ image, title, description }: CollectionItemProps) {
  return (
    <motion.div
      variants={collectionItemVariants}
      className="flex flex-col items-center gap-collection-item max-md:first:pt-4 md:mx-auto md:flex-row lg:flex-col desktop:w-[255px]"
    >
      <img
        src={image}
        alt={title}
        className="h-[151px] w-[200.29px] grow object-cover md:h-[176.77px] md:w-[255px] lg:h-[193px]"
      />

      <div className="flex flex-col items-center gap-collection-text md:w-[282px] md:items-start lg:items-center desktop:w-[255px]">
        <h4 className="text-secondary">{title}</h4>
        <p className="text-center max-md:px-28 max-sm:px-0 md:text-left lg:text-center">{description}</p>
      </div>
    </motion.div>
  )
}

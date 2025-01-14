import clsx from "clsx"
import { useLocation } from "react-router-dom"
import { heroInfo } from "@/constants"
import { Button } from "./Button.tsx"

export function Hero() {
  const { pathname } = useLocation()

  const p = (pathname.split("/")[1] || 'home') as keyof typeof heroInfo

  const { title, description, imageUrls } = heroInfo[p]

  return (
    <section
      className="relative mx-6 max-w-7xl overflow-hidden rounded-lg desktop:mx-auto">
      {/*<div className="absolute inset-0 bg-black opacity-50"></div>*/}
      <div
        className={`${imageUrls.join(' ')} bg-cover bg-center`}>
        {/* Contenu du texte */}
        <div
          className={clsx("relative w-full text-light max-sm:px-6 max-sm:text-center sm:ml-[58px]" +
            " sm:w-2/3 md:w-1/2 lg:ml-22",
            p === 'home' && 'py-[100px] md:py-[104px] lg:pb-[116px] lg:pt-[117px]',
            p === 'about' && 'pb-[87px] pt-[111px] md:py-[118px] lg:py-[137px]',
            p === 'subscribe' && 'pb-[136px] pt-[101px] md:pb-[126px] md:pt-[127px] lg:py-[134px]')}>
          <h1>{title}</h1>
          <p className={clsx("mt-6 opacity-80 max-sm:text-center lg:mt-8 lg:w-2/3", p === 'home' && 'mb-10 lg:mb-14')}>
            {description}
          </p>
          {p === 'home' && <Button label="Create your plan" />}
        </div>
      </div>
    </section>
  )
}
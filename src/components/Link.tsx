import { NavLink } from "react-router-dom"

type Props = {
  to: string,
  title: string
  onClick: () => void
}

export function Link({ to, title, onClick }: Props) {
  return (
    <NavLink to={to} onClick={onClick}
             className="max-sm:font-fraunces max-sm:text-2xl max-sm:leading-8 max-sm:text-secondary max-sm:hover:text-primary">
      {title}
    </NavLink>
  )
}

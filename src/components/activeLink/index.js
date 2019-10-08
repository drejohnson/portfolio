import { h } from 'preact'
import { useRoute, Link } from 'wouter-preact'
import style from './style'

export default function ActiveLink(props) {
  const [isActive] = useRoute(props.to)
  const s = isActive ? style.active : ''

  return (
    <Link class={s} {...props}>
      {props.children}
    </Link>
  )
}

import { h } from 'preact'
import ActiveLink from '../ActiveLink'
import style from './style'

const Header = () => {
  return (
    <header class={style.header}>
      <nav>
        <ActiveLink to="/">Home</ActiveLink>
        <ActiveLink to="/posts">Posts</ActiveLink>
      </nav>
    </header>
  )
}

export default Header

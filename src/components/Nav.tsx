import { useState } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
import { Button, Menu, MenuItem } from 'MUI'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { catsList } from 'types'
import { getRandomBroadside } from 'utils/randomGenerator'
import ImgText from '../images/banner/broadsides.svg'
import ImgShadow from '../images/banner/shadow.svg'
import './Nav.css'

export const Nav = () => {
  const { id } = useParams<{ id: string }>()
  return (
    <nav className="NavContainer">
      <h1 className="NavTitle">
        <Link to="/" className="NavTitle__Link">
          <img alt="Broadsides" src={ImgShadow} />
          <img alt="" src={ImgText} className="NavTitle__Text"/>
        </Link>
      </h1>
      <ul className="Nav">
        <TopicMenu />
        <NLink to="/map" text="Map" />
        <NLink to="/summary" text="About broadsides" />
        <NavLink
          key={id}
          to={`/broadsides/${getRandomBroadside().id}`}
          className={'Nav_link'}
        >
          random broadside
        </NavLink>
        <NLink to="/search" text="Search" />
      </ul>
    </nav>
  )
}

const TopicMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <>
      <div
        role="button"
        tabIndex={0}
        id="topic-menu"
        aria-label="Topics menu"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className={'Nav_link'}
      >
        Topics
        <KeyboardArrowDownIcon />
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'topic-menu',
        }}
      >
        {catsList.map((cat) => (
          <MenuItem key={cat}>
            <MenuLink to={`/topic/${cat}`} text={cat} />
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

const NLink = ({ to, text }: { to: string; text: string }) => (
  <li>
    <NavLink
      to={to}
      className={({ isActive, isPending }) =>
        ['Nav_link', isActive || isPending ? 'Nav_link--active' : ''].join(' ')
      }
    >
      {text}
    </NavLink>
  </li>
)
const MenuLink = ({ to, text }: { to: string; text: string }) => (
  <NavLink
    to={to}
    className={({ isActive, isPending }) =>
      [
        'Nav_link',
        isActive || isPending ? 'Nav_link--active' : '',
        'noUnderline',
      ].join(' ')
    }
  >
    {text}
  </NavLink>
)

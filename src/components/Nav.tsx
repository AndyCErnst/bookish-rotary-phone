import { useState } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
import { Box, Menu, MenuItem, Tooltip } from 'MUI'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { catsList } from 'types'
import { getRandomBroadside } from 'utils/randomGenerator'
import ImgText from '../images/banner/broadsides.svg'
import ImgShadow from '../images/banner/shadow.svg'
import SearchIcon from '@mui/icons-material/Search'

import './Nav.css'

export const Nav = () => {
  const { id } = useParams<{ id: string }>()
  return (
    <nav className="NavContainer">
      <h1 className="NavTitle">
        <Link to="/" className="NavTitle__Link">
          <img alt="Broadsides" src={ImgShadow} />
          <img alt="" src={ImgText} className="NavTitle__Text" />
        </Link>
      </h1>
      <ul className="Nav">
        <NLink to="/summary" text="About broadsides" />
        <TopicMenu />
        <NLink to="/map" text="Map" />
        <NavLink
          key={id}
          to={`/broadsides/${getRandomBroadside().id}`}
          className={'Nav_link'}
        >
          Random Broadside
        </NavLink>
        <NLink to="/our-work" text="Our Work" />
        <NLink
          to="/search"
          text={
            <Box sx={{ height: 2 }}>
              <Tooltip title="Search">
                <SearchIcon />
              </Tooltip>
            </Box>
          }
        />
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

const NLink = ({
  to,
  text,
}: {
  to: string
  text: string | React.ReactNode
}) => (
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

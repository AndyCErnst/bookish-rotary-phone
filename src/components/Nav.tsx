import { useState } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
import { Button, Box, Menu, MenuItem, Tooltip } from 'MUI'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { Category } from 'types'
import { getRandomBroadside } from 'utils/randomGenerator'
import SearchIcon from '@mui/icons-material/Search'

import './Nav.css'

export const Nav = () => {
  const { id } = useParams<{ id: string }>()
  return (
    <nav className="NavContainer">
      <div className="NavTitle__Container">
        <div className="NavTitle__LinkWrapper">
          <div className='DottedLine top'/>
          <Link to="/" className="NavTitle__Link">
            <h1 className="NavTitle__Text">Scottish Broadsides</h1>
          </Link>
          <div className='DottedLine bottom'/>
        </div>
      </div>
      <ul className="Nav">
        <NLink to="/summary" text="About broadsides" />
        <TopicMenu />
        <NLink to="/map" text="Map" />
        <NLink to="/now" text="Then vs Now" />
        <NLink to="/our-work" text="Our Work" />
        <NavLink
          key={id}
          to={`/broadsides/${getRandomBroadside().id}`}
          className={'Nav_link'}
        >
          Random Broadside
        </NavLink>
        <NLink
          to="/search"
          text={
            <Box sx={{ height: 2 }}>
              <Tooltip title="Search">
                <SearchIcon aria-label="Search"/>
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
      {/* MAJOR A11Y issue here, this must be fixed */}
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
        <KeyboardArrowDownIcon sx={{ verticalAlign: 'middle' }} />
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        MenuListProps={{
          'aria-labelledby': 'topic-menu',
        }}
      >
        <CatLink cat="murder" text="Murder" />
        <CatLink cat="trials" text="Trials" />
        <CatLink cat="courtship" text="Love and Courtship" />
        <CatLink cat="songs and poems" text="Songs and Poems" />
      </Menu>
    </>
  )
}

const CatLink = ({ cat, text }: { cat: Category; text: string }) => (
  <MenuItem>
    <NavLink to={`/topic/${cat}`} className={'Nav_link menuLink'}>
      {text}
    </NavLink>
  </MenuItem>
)

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

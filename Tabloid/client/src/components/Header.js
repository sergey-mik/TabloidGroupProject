import React, { useState } from 'react'
import { NavLink as RRNavLink } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'
import { logout } from '../modules/authManager'

export default function Header({ isLoggedIn }) {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand tag={RRNavLink} to="/">
          Tabloid
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {/* When isLoggedIn === true, we will render the Home link */}
            {isLoggedIn && (
              <>
                <NavItem>
                  <NavLink tag={RRNavLink} to="/">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RRNavLink} to="/posts">
                    View Posts
                  </NavLink>
                </NavItem>
              </>
            )}
          </Nav>
          <Nav navbar>
            {isLoggedIn &&
              <NavItem>
                <NavLink tag={RRNavLink} to="/category/manager">
                  Category Management
                </NavLink>
              </NavItem>}
          </Nav>
          <Nav navbar>
            {isLoggedIn && (
              <>
                <NavItem>
                  <NavLink tag={RRNavLink} to="/newPost">New Post</NavLink>
                </NavItem>
                {/* <NavItem>
                  <NavLink tag={RRNavLink} to="/PostManager">
                    Post Management
                  </NavLink>
                </NavItem> */}
              </>
            )}
          </Nav>
          <Nav navbar>
            <NavItem>
              <NavLink tag={RRNavLink} to="/tag/manager">Tag Management</NavLink>
            </NavItem>
          </Nav>
          <Nav navbar>
            <NavItem>
              <NavLink tag={RRNavLink} to="/userprofiles">User Profile</NavLink>
            </NavItem>
          </Nav>
          <Nav navbar>
            {isLoggedIn &&
              <>
                <NavItem>
                  <a
                    aria-current="page"
                    className="nav-link"
                    style={{ cursor: 'pointer' }}
                    onClick={logout}
                  >
                    Logout
                  </a>
                </NavItem>
              </>
            }
            {!isLoggedIn && (
              <>
                <NavItem>
                  <NavLink tag={RRNavLink} to="/login">
                    Login
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RRNavLink} to="/register">
                    Register
                  </NavLink>
                </NavItem>
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

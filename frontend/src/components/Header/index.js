import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link, withRouter} from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap'

  // style(s)
  import './styles.sass'

  class Header extends Component {
    state = {
      isOpen: false
    }

    toggle = () => {
      this.setState({
        isOpen: !this.state.isOpen
      })
    }

    render() {
      return (
        <Navbar color='faded' light expand='md' className='nav-main'>
          <Link className='navbar-brand' to='/'>Harvest 4th of July</Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <Link to='/#details'>Details</Link>
              </NavItem>
              <NavItem>
                <Link to='/rsvp'>RSVP</Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Sign-Up
                </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem>
                    <Link to='/volunteer'>Volunteer</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to='Potluck'>Potluck</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to='/cornhole'>Cornhole</Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      )
    }
  }

  Header.propTypes = {
    history: PropTypes.object
  }

  export default withRouter(Header)

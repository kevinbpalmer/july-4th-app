import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'
import {connect} from 'react-redux'

// actions
import {openModal} from 'actions/globals'

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
    const {openModal} = this.props

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
            <NavItem>
              <a onClick={openModal}>Donate</a>
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
                  <Link to='/potluck'>Potluck</Link>
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

const mapStateToProps = store => ({

})

const mapDispatchToProps = {
  openModal
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

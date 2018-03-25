import React from "react";
import { Navbar, Nav, NavItem,NavDropdown, Glyphicon,MenuItem } from 'react-bootstrap';
import axios from 'axios'


class Header extends React.Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">MLAS</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">
                            Link
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            Link
                        </NavItem>
                        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3}>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#" data-method={'delete'}>
                            Link Right
                        </NavItem>
                        <NavItem eventKey={2} href="#" onClick={this.sign_out}>
                            Link Right
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
     sign_out(){
      console.log('clicked')
        let token=$( 'meta[name="csrf-token"]' ).attr( 'content' );
      console.log(token)
         axios({
             method:"delete",
             url:'/users/sign_out',
             headers:{'X-CSRF-Token':token}
         })
             .then(function (response) {
                 console.log(response);
                 console.log('success');
                 location.reload()

             })
             .catch(function (error) {
                 console.log(error);
                 location.reload()

             });

     }
}


export default Header
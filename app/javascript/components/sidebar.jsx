import React from "react";
import { Nav, NavItem} from 'react-bootstrap';
import axios from 'axios'

class Sidebar extends React.Component {
    render() {
        return(
            <div className="col-md-2">
            <Nav bsStyle="pills" stacked activeKey={1}>
                <NavItem eventKey={1} href="/home">
                    NavItem 1 content
                </NavItem>
                <NavItem eventKey={2} title="Item">
                    NavItem 2 content
                </NavItem>
                <NavItem eventKey={3} disabled>
                    NavItem 3 content
                </NavItem>
            </Nav>
            </div>
        )
    }
}


export default Sidebar

import {Nav, Navbar, NavLink} from "react-bootstrap"
import {Link} from "react-router-dom"

const Navigation = () => {
    return(
        <Navbar collapseOnSelect expand ='sm' bg="dark" variant="dark"></Navbar>
        <Navbar.Toggle aria-controls="navbarScroll" data-bs-target = "#navbarScroll"/>
            <Navbar.Collapse id="navbarScroll">

            <Nav></Nav>
    );
}

export default Navigation;
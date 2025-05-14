import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Nav variant="tabs" defaultActiveKey="/page1">
            <Nav.Item>
                <Nav.Link as={Link} to="/page1">Page1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/page2">Page2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/page3">Page3</Nav.Link>
            </Nav.Item>
        </Nav>
    );
};

export default Header;

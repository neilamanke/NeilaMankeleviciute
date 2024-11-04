import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

export const Navigation = () => {
  return (
    <Nav defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
        <Nav.Link href="/home"><Link to="/">Homepage</Link></Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link ><Link to="/login"> Login</Link></Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-1"><Link to="/about">Feedback</Link></Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2"><Link to="/productList">Products</Link></Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

